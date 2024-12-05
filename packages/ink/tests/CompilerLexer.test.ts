import type { LiteralToken } from '../src/types';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import Lexer from '../src/compiler/Lexer';
import definitions, { data } from '../src/compiler/definitions';

/**
 * Test suite for the Ink Compiler Lexer.
 */
describe('Ink Compiler Lexer', () => {
  // Create a new lexer instance
  const lexer = new Lexer();

  // Define all the built-in definitions
  Object.keys(definitions).forEach((key) => {
    lexer.define(key, definitions[key]);
  });

  /**
   * Test that the lexer can parse a float.
   */
  it('Should parse float', () => {
    lexer.load('4.4');
    const token = lexer.expect<LiteralToken>(data);
    expect(token.type).to.equal('Literal');
    expect(token.value).to.equal(4.4);
    expect(token.start).to.equal(0);
    expect(token.end).to.equal(3);
  });

  /**
   * Test that the lexer can parse an integer.
   */
  it('Should parse integer', () => {
    lexer.load('44');
    const token = lexer.expect<LiteralToken>(data);
    expect(token.type).to.equal('Literal');
    expect(token.value).to.equal(44);
    expect(token.start).to.equal(0);
    expect(token.end).to.equal(2);
  });

  /**
   * Test that the lexer can parse null.
   */
  it('Should parse null', () => {
    lexer.load('null');
    const token = lexer.expect<LiteralToken>(data);
    expect(token.type).to.equal('Literal');
    expect(token.value).to.equal(null);
    expect(token.start).to.equal(0);
    expect(token.end).to.equal(4);
  });

  /**
   * Test that the lexer can parse a boolean.
   */
  it('Should parse boolean', () => {
    // Test true
    (() => {
      lexer.load('true');
      const token = lexer.expect<LiteralToken>(data);
      expect(token.type).to.equal('Literal');
      expect(token.value).to.equal(true);
      expect(token.start).to.equal(0);
      expect(token.end).to.equal(4);
    })();

    // Test false
    (() => {
      lexer.load('false');
      const token = lexer.expect<LiteralToken>(data);
      expect(token.type).to.equal('Literal');
      expect(token.value).to.equal(false);
      expect(token.start).to.equal(0);
      expect(token.end).to.equal(5);
    })();
  });

  /**
   * Test that the lexer can parse a string.
   */
  it('Should parse string', () => {
    lexer.load('"foobar"');
    const token = lexer.expect<LiteralToken>(data);
    expect(token.type).to.equal('Literal');
    expect(token.value).to.equal('foobar');
    expect(token.start).to.equal(0);
    expect(token.end).to.equal(8);
  });

  /**
   * Test that the lexer can clone itself.
   */
  it('Should clone the lexer', () => {
    const lexerClone = lexer.clone();
    expect(lexerClone).to.not.equal(lexer);
    expect(lexerClone.code).to.equal(lexer.code);
    expect(lexerClone.index).to.equal(lexer.index);
  });

  /**
   * Test that the lexer can define a new token.
   */
  it('Should define a new token', () => {
    // Define a new token with the required properties: 
    //type, value, start, and end
    lexer.define('testToken', () => ({ type: 'Test', value: 'test', start: 0, end: 8 }));
    lexer.load('testToken'); // Load the token into the lexer
    const token = lexer.expect('testToken');
    // Ensure the token has the correct properties
    expect(token).to.not.be.undefined;
    // Use non-null assertion 
    expect(token!.type).to.equal('Test'); 
    expect(token!.value).to.equal('test');
    expect(token!.start).to.equal(0);
    expect(token!.end).to.equal(8);
  });

  /**
   * Test that the lexer can find the next token.
   */
  it('Should find the next token', () => {
    lexer.load('testToken');
    // Define the token with the required properties
    lexer.define('testToken', () => 
      ({ type: 'Test', value: 'test', start: 0, end: 8 }));
    const token = lexer.find('testToken');
    // Ensure the token is found and has the correct properties
    expect(token).to.not.be.undefined;
    // Use non-null assertion 
    expect(token!.type).to.equal('Test'); 
    expect(token!.value).to.equal('test');
    expect(token!.start).to.equal(0);
    expect(token!.end).to.equal(8);
  });

  /**
   * Test that the lexer can match definitions correctly.
   */
  it('Should match definitions correctly', () => {
    lexer.load('testToken');
    lexer.define('testToken', () => 
      ({ type: 'Test', value: 'test', start: 0, end: 8 }));
    const match = lexer.match(0, ['testToken']);
    // Ensure a match is found
    expect(match).to.not.be.null;
     // Use non-null assertion 
    expect(match!.type).to.equal('Test');
    expect(match!.value).to.equal('test');
    expect(match!.start).to.equal(0);
    expect(match!.end).to.equal(8);
  });

  /**
   * Test that the lexer can check the next token correctly.
   */
  it('Should check next correctly', () => {
    lexer.load('testToken');
    lexer.define('testToken', () => 
      ({ type: 'Test', value: 'test', start: 0, end: 8 }));
    expect(lexer.next('testToken')).to.be.true;
  });

  /**
   * Test that the lexer can optionally return a token.
   */
  it('Should optionally return a token', () => {
    lexer.load('optionalToken');
    lexer.define('optionalToken', () =>
       ({ type: 'Optional', value: 'optional', start: 0, end: 12 }));
    const token = lexer.optional('optionalToken');
    // Ensure the token is found and has the correct properties
    expect(token).to.not.be.undefined;
     // Use non-null assertion 
    expect(token!.type).to.equal('Optional');
    expect(token!.value).to.equal('optional');
    expect(token!.start).to.equal(0);
    expect(token!.end).to.equal(12);
  });

  /**
   * Test that the lexer can load code correctly.
   */
  it('Should load code correctly', () => {
    lexer.load('test');
    expect(lexer.code).to.equal('test');
    expect(lexer.index).to.equal(0);
  });

  /**
   * Test that the lexer can return a substring.
   */
  it('Should return a substring', () => {
    lexer.load('Hello, World!');
    const substring = lexer.substring(0, 5);
    expect(substring).to.equal('Hello');
  });

  /**
   * Test that the lexer returns undefined for an unknown token.
   */
  it('Should return undefined for unknown token', () => {
    lexer.load('unknown');
    expect(lexer.find('unknownToken')).to.be.undefined;
  });

  /**
   * Test that the lexer returns undefined for an optional unknown token.
   */
  it('Should return undefined for optional unknown token', () => {
    lexer.load('unknown');
    expect(lexer.optional('unknownToken')).to.be.undefined;
  });

  /**
   * Test that the lexer returns null for a match unknown token.
   */
  it('Should return null for match unknown token', () => {
    lexer.load('unknown');
    expect(() => lexer.match(0, ['unknownToken'])).to.throw();
  });

  /**
   * Test that the lexer returns false for next unknown token.
   */
  it('Should return false for next unknown token', () => {
    lexer.load('unknown');
    expect(lexer.next('unknownToken')).to.be.false;
  });
});