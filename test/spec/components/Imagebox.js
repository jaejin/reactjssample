'use strict';

describe('Imagebox', function () {
  var React = require('react/addons');
  var Imagebox, component;

  beforeEach(function () {
    Imagebox = require('../../../src/scripts/components/Imagebox.js');
    component = React.createElement(Imagebox);
  });

  it('should create a new instance of Imagebox', function () {
    expect(component).toBeDefined();
  });
});
