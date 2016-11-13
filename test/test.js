(function() {
  'use strict';

  const chai          = require('chai');
  const assert        = chai.assert;
  const expect        = chai.expect;
  const fs            = require('fs');
  const stringIndent  = require('../index');

  let string  = '',
    indent    = null;

  /**
   * Testing a simple string
   */
  describe('Simple string', () => {

    it('should have an indent of 2', (done) => {
      string = '  test';
      indent = stringIndent(string);

      expect(indent).to.be.equal(2);
      done();
    });

    it('should have an indent of 4', (done) => {
      string = '    test';
      indent = stringIndent(string);

      expect(indent).to.be.equal(4);
      done();
    });

  });


  /**
   * Testing a multiline string
   */
  describe('Multiline string', () => {

    it('should have an indent of [2, 2]', (done) => {
      string = '  line 1\n  line 2';
      indent = stringIndent(string, {multiline: true});

      assert.deepEqual(indent, [2, 2]);
      done();
    });

    it ('should have an indent of [4, 2, 6]', (done) => {
      string = '    line 1\n  line 2\n      line 3';
      indent = stringIndent(string, {multiline: true});

      assert.deepEqual(indent, [4, 2, 6]);
      done();
    });

  });


  /**
   * Testing a file content
   */
  describe('File content', () => {

    describe('test.txt', () => {

      it('should have an indent of [1, 0, 3, 5]', (done) => {
        fs.readFile(__dirname +'/test.txt', 'utf-8', (err, content) => {
          string = content;
          indent = stringIndent(string, {multiline: true});

          assert.deepEqual(indent, [1, 0, 3, 5]);
          done();
        });
      });

    });

    describe('test.html', () => {

      it('should have an indent of [0, 2, 4, 2, 0]', (done) => {
        fs.readFile(__dirname +'/test.html', 'utf-8', (err, content) => {
          string = content;
          indent = stringIndent(string, {multiline: true});

          assert.deepEqual(indent, [0, 2, 4, 2, 0]);
          done();
        });
      });

    });

  });

})();
