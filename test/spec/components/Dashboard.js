'use strict';

describe('Dashboard', function () {
  var React = require('react/addons');
  var Dashboard, component;

  beforeEach(function () {
    Dashboard = require('../../../src/scripts/components/Dashboard.js');
    component = React.createElement(Dashboard);
  });

  it('should create a new instance of Dashboard', function () {
    expect(component).toBeDefined();
  });
});
