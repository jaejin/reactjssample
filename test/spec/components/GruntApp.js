'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var GruntApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GruntApp = require('../../../src/scripts/components/GruntApp.js');
    component = React.createElement(GruntApp);
  });

  it('should create a new instance of GruntApp', function () {
    expect(component).toBeDefined();
  });
});
