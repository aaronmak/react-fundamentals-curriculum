var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="nav-bar-container">
          <h1>Main.js Header</h1>
        </div>
        <div className="input-container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
