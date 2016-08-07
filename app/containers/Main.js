var React = require('react');
var styles = require('../styles');
require('../main.css');
var bgImg = require('../images/pattern.svg');

var Main = React.createClass({
  render: function() {
    console.log(bgImg);
    return (
      <div>
        <div className="nav-bar-container">
          <h1>Main.js Header</h1>
        </div>
        <div className="input-container" style={styles.backgroundBody}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
