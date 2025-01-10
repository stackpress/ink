import path from 'path';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import EventEmitter from '../src/EventEmitter';
import Component from '../src/compiler/Component';
import Builder from '../src/document/Builder';

describe('Ink Document Builder', () => {
  const tsconfig = path.join(__dirname, '../tsconfig.json');
  let component: Component;
  let builder: Builder;

  beforeEach(() => {
    component = new Component(
      path.join(__dirname, 'fixtures/page.ink'),
      { cwd: __dirname }
    );
  });

  describe('Constructor and Options', () => {
    it('should initialize with default options', () => {
      builder = new Builder(component);
      expect(builder.extname).to.equal('.ink');
      expect(builder.tsconfig).to.exist;
      expect(builder.emitter).to.be.instanceOf(EventEmitter);
    });

    it('should accept custom options', () => {
      const customEmitter = new EventEmitter();
      builder = new Builder(component, {
        emitter: customEmitter,
        minify: false,
        extname: '.custom',
        tsconfig
      });
      expect(builder.extname).to.equal('.custom');
      expect(builder.tsconfig).to.equal(tsconfig);
      expect(builder.emitter).to.equal(customEmitter);
    });
  });

  describe('Event Handling', () => {
    // Store builder instance for reuse across tests
    let builder: Builder;
    
    beforeEach(() => {
      // Create a fresh builder instance before each test
      builder = new Builder(component);
    });

    it('should emit build events in correct order', async () => {
      // Array to track emitted events in order
      const events: string[] = [];
      
      // Register listeners for all build-related events
      builder.emitter.on('build', () => events.push('build'));
      builder.emitter.on('built', () => events.push('built'));
      
      // Trigger the build process
      await builder.build();
      
      // Verify events were emitted in the expected order
      expect(events).to.deep.equal(['build', 'built']);
    });

    it('should emit client build events in sequence', async () => {
      // Array to track emitted events in order
      const events: string[] = [];
      
      // Register listeners for all build-related events
      builder.emitter.on('build-client', () => events.push('build-client'));
      builder.emitter.on('built-client', () => events.push('built-client'));
      
      // Trigger the client build process
      await builder.client();
      
      // Verify events were emitted in the expected sequence
      expect(events).to.deep.equal(['build-client', 'built-client']);
    });

    it('should provide event data in build events', async () => {
      // Object to store event data for verification
      let buildEventData: any = null;
      let builtEventData: any = null;
      
      // Register listeners that capture event data
      builder.emitter.on('build', (event) => {
        buildEventData = event;
      });
      
      builder.emitter.on('built', (event) => {
        builtEventData = event;
      });
      
      // Trigger the build process
      await builder.build();
      
      // Verify build event data
      expect(buildEventData).to.exist;
      expect(buildEventData.name).to.equal('build');
      
      // Verify built event data
      expect(builtEventData).to.exist;
      expect(builtEventData.name).to.equal('built');
    });

    it('should handle multiple event listeners for same event', async () => {
      // Arrays to track listener calls
      const firstListenerCalls: string[] = [];
      const secondListenerCalls: string[] = [];
      
      // Register multiple listeners for the same event
      builder.emitter.on('build', () => firstListenerCalls.push('first'));
      builder.emitter.on('build', () => secondListenerCalls.push('second'));
      
      // Trigger the build process
      await builder.build();
      
      // Verify both listeners were called
      expect(firstListenerCalls).to.have.lengthOf(1);
      expect(secondListenerCalls).to.have.lengthOf(1);
    });

    it('should allow removing event listeners', async () => {
      // Array to track event calls
      const events: string[] = [];
      
      // Create named listener function so we can remove it later
      const listener = () => events.push('build');
      
      // Add and then remove the listener
      builder.emitter.on('build', listener);
      builder.emitter.off('build', listener);
      
      // Trigger the build process
      await builder.build();
      
      // Verify the removed listener wasn't called
      expect(events).to.be.empty;
    });
  });

  describe('Build Operations', () => {
    beforeEach(() => {
      builder = new Builder(component, { tsconfig, minify: false });
    });

    it('should build document', async () => {
      const server = await builder.server();
      expect(server).to.contain('...this._toNodeList(snippet1)');
      expect(server).to.contain('...this._toNodeList(snippet2)');
    });

    it('should generate client code', async () => {
      const client = await builder.client();
      expect(client).to.contain('const snippet1 = `//on server:');
      expect(client).to.contain('const snippet2 = `<style>');
    });

    it('should generate markup', async () => {
      const build = await builder.build();
      const html = build.document.render();
      expect(html).to.contain('&lt;h1 class="title"&gt;{title}&lt;/h1&gt;');
      expect(html).to.contain('&lt;title&gt;{title}&lt;/title&gt;');
    });

    it('should generate styles', async () => {
      const styles = await builder.styles();
      expect(styles).to.be.a('string');
    });
  });

  describe('Static Load Method', () => {
    it('should load source code and return document instance', () => {
      // Create a mock Document class with a render method
      const source = `
        // Base Document class that would normally come from @stackpress/ink
        class Document {
          render() {}
        }

        // Create a test document that extends the base Document
        class TestDocument extends Document {
          render() {
            return '<div>Test</div>';
          }
        }

        // Make TestDocument available to the context
        const doc = TestDocument;

        // Set it on InkAPI.default which is what Builder.load expects
        InkAPI = { default: doc };
      `;

      // Create a custom context with InkAPI already defined
      const vm = require('vm');
      const context = vm.createContext({ 
        InkAPI: {},
        exports: {},
        require,
        console,
        module,
        process
      });

      // Run the code in our prepared context
      vm.runInContext(source, context);
      
      const result = Builder.load(source, component.fs);
      
      // Verify the source was preserved
      expect(result.source).to.equal(source);
      
      // Verify we got back both the class and instance
      expect(result.InkDocument).to.exist;
      expect(result.document).to.exist;
      
      // Verify the render method works
      expect(result.document.render()).to.equal('<div>Test</div>');
    });

    it('should throw exception for invalid source code', () => {
      const invalidSource = 'invalid javascript code {';
      expect(() => Builder.load(invalidSource, component.fs)).to.throw();
    });
  });
});