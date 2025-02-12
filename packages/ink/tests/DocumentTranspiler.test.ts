import path from 'path';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Component from '../src/compiler/Component';
import Transpiler from '../src/document/Transpiler';
import { toTS } from '../src/helpers';

describe('Ink Document Transpiler', () => {
  const tsconfig = path.join(__dirname, '../tsconfig.json');
  const component = new Component(
    path.join(__dirname, 'fixtures/page.ink'), 
    { cwd: __dirname }
  );
  it('Should transpile component', () => {
    expect(true).to.equal(true);
  });

  it('Should transpile $', () => {
    const transpiler = new Transpiler(component, tsconfig);
    const server = toTS(transpiler.transpile());
    //console.log('--server--', server);
    // [
    //   Registry.createElement('div', { }, [
    //     Registry.createElement('span', { }, [
    //       Registry.createText(`$`)
    //     ]).element, 
    //     Registry.createText(`ok`)
    //   ]).element
    // ]
    expect(server).to.contain('DOMDocument.createElement(\'div\', { \'title\': title },');
    expect(server).to.contain('DOMDocument.createText(`$`, false)');

    const client = toTS(transpiler.client());
    //console.log('--client--', client);
    //const __BINDINGS__: Record<string, Record<string, any>> = {'1': { 'title': title }, };
    expect(client).to.contain("const title = 'Ink - The reactive web component template engine.';");
  });
});