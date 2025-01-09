//modules
import path from 'node:path';
import { VariableDeclarationKind } from 'ts-morph';
//compiler
import type Component from '../compiler/Component';
import ComponentTranspiler from '../compiler/Transpiler';
//directives
import type DirectiveInterface from '../directives/DirectiveInterface';
//common
import type { MarkupToken, MarkupChildToken } from '../types';

export default class Transpiler extends ComponentTranspiler {
  /**
   * Generates document code to be used on the server
   */
  public transpile() {
    const { 
      absolute, 
      classname, 
      imports,
      scripts, 
      styles 
    } = this._component;
    //get path without extension
    //ex. /path/to/Counter.ink -> /path/to/Counter
    const extname = path.extname(absolute);
    const filePath = absolute.slice(0, -extname.length);
    //create a new source file
    const { source } = this._createSourceFile(`${filePath}.ts`);
    //import DOMDocument from '@stackpress/ink/dist/dom/Document';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/dom/Document',
      defaultImport: 'DOMDocument'
    });
    //import ServerDocument from '@stackpress/ink/dist/server/Document';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/server/Document',
      defaultImport: 'ServerDocument'
    });
    //import others from <script>
    imports.forEach(imported => {
      const specifier = imported.source
        //replace client with server
        .replaceAll('@stackpress/ink/client', '@stackpress/ink/server')
        .replaceAll('@stackpress/ink/dist/client', '@stackpress/ink/dist/server')
        .replace(/^@stackpress\/ink$/, '@stackpress/ink/server');
      if (imported.default && imported.names) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: specifier,
          defaultImport: imported.default,
          namedImports: imported.names
        });
      } else if (imported.default) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: specifier,
          defaultImport: imported.default
        });
      } else if (imported.names) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: specifier,
          namedImports: imported.names
        });
      }
    });
    //export default class FoobarComponent extends ServerDocument
    const component = source.addClass({
      name: classname,
      extends: 'ServerDocument',
      isDefaultExport: true
    });
    //public id()
    component.addMethod({
      name: 'id',
      returnType: 'string',
      statements: `return '${this._component.id}';`
    });
    //public styles()
    component.addMethod({
      name: 'styles',
      returnType: 'string',
      statements: `return \`${styles.join('\n').trim()}\`;`
    });
    //public template()
    component.addMethod({
      name: 'template',
      statements: `
        ${scripts.join('\n')}
        return ${this.markup.trim()};
      `.trim()
    });

    return source;
  }

  /**
   * Returns a client script to be passed into the transpiled
   * render(client, props) method generated in transpile()
   * 
   * Primarily used by esInkPlugin which calls builder.client()
   */
  public client() {
    const { imports, scripts } = this._component;
    //only components (vs templates)
    const components = this._component.components.filter(
      component => component.type === 'component' 
        || component.type === 'external'
    );
    //all components and sub components
    const registry = Object.values(this._component.registry).filter(
      component => component.type === 'component'
        || component.type === 'external'
    )
    //create a new source file
    const { source } = this._createSourceFile('client.ts');
    //import DOMDocument from '@stackpress/ink/dist/dom/Document';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/dom/Document',
      defaultImport: 'DOMDocument'
    });
    //import ClientDocument from '@stackpress/ink/dist/client/Document';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/client/Document',
      defaultImport: 'ClientDocument'
    });
    //import ClientRegistry from '@stackpress/ink/dist/client/Registry';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/client/Registry',
      defaultImport: 'ClientRegistry'
    });
    //import emitter from '@stackpress/ink/dist/client/Emitter';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/client/Emitter',
      defaultImport: 'emitter'
    });
    //import data from '@stackpress/ink/dist/client/api/data';
    source.addImportDeclaration({
      moduleSpecifier: '@stackpress/ink/dist/client/api/data',
      defaultImport: 'data' 
    });
    //import Counter_abc123 from './Counter_abc123'
    registry.forEach(component => {
      let relative = path.relative(
        this._component.dirname, 
        component.absolute
      );
      if (!relative.startsWith('.')) {
        relative = `./${relative}`;
      }
      //now import
      source.addImportDeclaration({
        moduleSpecifier: relative,
        //we make sure there's no collisions
        //this is also matched when generating the component tree
        defaultImport: component.classname
      });
    });
    //import others from <script>
    imports.forEach(imported => {
      if (imported.default && imported.names) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: imported.source,
          defaultImport: imported.default,
          namedImports: imported.names
        });
      } else if (imported.default) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: imported.source,
          defaultImport: imported.default
        });
      } else if (imported.names) {
        source.addImportDeclaration({
          isTypeOnly: imported.typeOnly,
          moduleSpecifier: imported.source,
          namedImports: imported.names
        });
      }
    });

    //export { ClientRegistry, emitter, data };
    source.addExportDeclaration({
      namedExports: [ 'ClientRegistry', 'emitter', 'data' ]
    });

    //export class TemplateDocument extends ClientDocument
    const template = source.addClass({
      isExported: true,
      name: 'TemplateDocument',
      extends: 'ClientDocument'
    });
    //public static sync()
    template.addMethod({
      isStatic: true,
      name: 'sync',
      statements: `
        const document = new TemplateDocument();
        return document.sync();
      `
    });
    //public template() {}
    template.addMethod({
      name: 'template',
      statements: `
        ${scripts.join('\n')}
        return ${this.markup.trim()};
      `.trim()
    });

    //export const components = { ... };
    source.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [{
        name: 'components',
        initializer: `{
          ${registry.map(
            component => `'${component.classname}': ${component.classname}`
          ).join(',\n')}
        }`
      }]
    });
    //export const elements = { ... };
    source.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [{
        name: 'elements',
        initializer: `{
          ${components.map(component => {
            const { brand, tagname, classname } = component;
            return brand 
              ? `'${brand}-${tagname}': ${classname}`
              : `'${tagname}': ${classname}`
          }).join(',\n')}
        }`
      }]
    });

    //export const BUILD_ID = 'abc123';
    source.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [{
        name: 'BUILD_ID',
        initializer: `'${this._component.id}'`
      }]
    });

    source.addStatements(`emitter.once('ready', () => {
      //collect the server props from the template data
      //generate the bindings and sync the client registry
      TemplateDocument.sync();
      //after we registered all the elements, we can now register the 
      //components and let it manip the HTML further if it wants to
      for (const [ tagname, definition ] of Object.entries(elements)) {
        if (!customElements.getName(definition)) {
          customElements.define(tagname, definition);
        }
      }
      //emit the mounted event
      emitter.emit('mounted', document.body);
    });`);

    return source;
  }

  /**
   * Transforms markup to JS for the template() function
   */
  protected _markup(
    parent: MarkupToken|null,
    markup: MarkupChildToken[], 
    components: Component[]
  ): string {
    return "[\n" + markup.map(child => {
      let expression = '';
      if (child.type === 'MarkupExpression') {
        if (this._directives.has(child.name)) {
          const directive = this._directives.get(child.name) as DirectiveInterface;
          return directive.markup(parent, child, components, this._markup.bind(this));
        }
        //syntax <div title="Some Title">...</div>
        expression += this._markupElement(expression, parent, child, components);
      } else if (child.type === 'Literal') {
        if (typeof child.value === 'string') {
          if (child.escape) {
            expression += `DOMDocument.createText(\`${child.value}\`, true)`;
          } else {
            expression += `DOMDocument.createText(\`${child.value}\`, false)`;
          }
        //null, true, false, number 
        } else {
          expression += `DOMDocument.createText(String(${child.value}))`;
        }
      } else if (child.type === 'ProgramExpression') {
        expression += `...this._toNodeList(${child.source})`;
      }
      return expression;
    }).join(", \n") + "\n]";
  }

  /**
   * Generates the markup for a standard element
   */
  protected _markupElement(
    expression: string, 
    parent: MarkupToken|null,
    token: MarkupToken,
    components: Component[]
  ) {
    //check to see if the token refers to a 
    //component directly imported by this file
    const component = components.find(
      component => component.tagname === token.name
    );
    //if the token refers to a component imported by this file
    if (component) {
      if (component.type === 'template') {
        //templates take no children and scope is 
        //the same as the parent scope. template
        //tags are simply replaced with its children
        //syntax <x-head />
        //NOTE: if you want scoped templates, 
        // that's the same as a light component
        return expression + `...${this._markup(
          parent,
          component.ast.markup, 
          components
        )}`;
      }
      
      //business as usual...

      //get the tagname for the component
      const tagname = this._component.brand.length > 0 
        ? `${this._component.brand}-${token.name}`
        : token.name;
      //create the component
      expression += `DOMDocument.createElement('${tagname}', {`;
    } else {
      //check to see if the token refers to a 
      //template in the registry
      const template = this._component.components.find(
        component => component.tagname === token.name 
          && component.type === 'template'
      );
      if (template) {
        //templates take no children and scope is 
        //the same as the parent scope. template
        //tags are simply replaced with its children
        //syntax <x-head />
        //NOTE: if you want scoped templates, 
        // that's the same as a light component
        return expression + `...${this._markup(
          parent,
          template.ast.markup, 
          components
        )}`;
      }
      expression += `DOMDocument.createElement('${token.name}', {`;
    }
    
    if (token.attributes && token.attributes.properties.length > 0) {
      expression += ' ' + this._markupAttributes(token.attributes);
    }

    if (token.kind === 'inline') {
      expression += ' })';
    } else {
      expression += ' }, ';
      if (token.children) {
        expression += this._markup(token, token.children, components);
      }
      expression += `)`;
    }
    
    return expression;
  }
}