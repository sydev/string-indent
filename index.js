(function() {
  'use strict';

  /**
   * @version 0.1.2
   */


  const defaultOptions = {
    multiline: false,
    __startLine: 0
  };



  /**
   * Get the indent of a string.
   * @param  {String} string - String to get the indent(s) of.
   * @param  {Object} options - Object of options.
   * @return {(Number|Number[])} indent - Returns a single indent, if the
   * multiline options is falsey. If the multiline option is truthy, it will
   * return an array of indent values, where each represents a line.
   */
  function stringIndent(string, options) {
    let buffer    = Buffer.from(string),
      cOptions    = (options) ? Object.assign(defaultOptions, options) : defaultOptions,
      indent      = (cOptions.multiline) ? [0] : 0,
      line        = cOptions.__startLine,
      spaceInt    = 32,
      newLineInt  = 10,
      wait        = false;

    for (var pair of buffer.entries()) {
      // Check if buffer entry is a space value
      if (pair[1] === spaceInt) {
        // If multiline option is truthy and we don´t have to wait for a new
        // line, increment the indent for the current line
        if (cOptions.multiline) {
          if (!wait) indent[line]++;
        } else {
          // Else increment the single line indent
          indent++;
        }
      } else {
        // If multiline option is falsey, finish the loop
        if (!cOptions.multiline) {
          break;
        } else {
          // Else check if the next buffer entry is a newLine value
          if (pair[1] === newLineInt) {
            // If we reached the last line and it is an empty line (like files
            // appends it), break the loop
            if ((pair[0] + 1) === buffer.length) {
              break;
            } else {
              // Else increase the line number and create a new indent value for
              // this line
              wait = false;
              line++;
              indent[line] = 0;
            }
          } else {
            // If this buffer entry isn´t a newLine value, wait for one
            wait = true;
          }
        }
      }
    }

    // return the single indent/the array of indents
    return indent;
  }

  module.exports = exports = stringIndent;

})();
