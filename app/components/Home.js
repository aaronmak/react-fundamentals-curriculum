var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Enter a City and State</h1>
        <input placeholder='St. George, Utah'/>
        <button>Get Weather</button>
      </div>
    )
  }
});

module.exports = Home;
