import { describe, it } from 'mocha';
import { expect } from 'chai';
import InkEventEmitter, { Event } from '../src/EventEmitter';

describe('Event', () => {
  it('should create an event with name and params', () => {
    const event = new Event('test', { foo: 'bar' });
    expect(event.name).to.equal('test');
    expect(event.params).to.deep.equal({ foo: 'bar' });
  });

  it('should allow adding params after creation', () => {
    const event = new Event('test');
    event.add('key', 'value');
    expect(event.params.key).to.equal('value');
  });

  it('should handle setting and getting data', () => {
    const event = new Event<string>('test');
    event.set('test data');
    expect(event.data).to.equal('test data');
  });

  it('should handle data property setter', () => {
    const event = new Event<string>('test');
    event.data = 'test data';
    expect(event.data).to.equal('test data');
  });
});

describe('InkEventEmitter', () => {
  it('should trigger events and pass event object', () => {
    const emitter = new InkEventEmitter();
    let receivedEvent: Event<any> | null = null;
    
    emitter.on('test', (event) => {
      receivedEvent = event;
    });
    const event = emitter.trigger('test', { foo: 'bar' });
    
    expect(receivedEvent).to.not.be.null;
    expect(event.name).to.equal('test');
    expect(event.params).to.deep.equal({ foo: 'bar' });
  });

  it('should handle multiple listeners', () => {
    const emitter = new InkEventEmitter();
    let count = 0;
    
    emitter.on('test', () => count++);
    emitter.on('test', () => count++);
    emitter.trigger('test');
    
    expect(count).to.equal(2);
  });

  it('should handle event data in listeners', () => {
    const emitter = new InkEventEmitter();
    
    emitter.on('test', (event: Event<string>) => {
      event.set('response data');
    });
    
    const event = emitter.trigger<string>('test');
    expect(event.data).to.equal('response data');
  });

  it('should handle async event processing with waitFor', async () => {
    const emitter = new InkEventEmitter();
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    emitter.on('test', async (event: Event<string>) => {
      await delay(10);
      event.set('async response');
    });
    
    const event = await emitter.waitFor<string>('test');
    expect(event.data).to.equal('async response');
  });

  it('should process multiple async listeners in sequence', async () => {
    const emitter = new InkEventEmitter();
    const results: number[] = [];
    
    emitter.on('test', async () => {
      await new Promise(resolve => setTimeout(resolve, 20));
      results.push(1);
    });
    
    emitter.on('test', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      results.push(2);
    });
    
    await emitter.waitFor('test');
    expect(results).to.deep.equal([1, 2]);
  });

  it('should remove event listeners correctly', () => {
    const emitter = new InkEventEmitter();
    let count = 0;
    const listener = () => count++;
    
    emitter.on('test', listener);
    emitter.trigger('test');
    expect(count).to.equal(1);
    
    emitter.off('test', listener);
    emitter.trigger('test');
    expect(count).to.equal(1);
  });
});