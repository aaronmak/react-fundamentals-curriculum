var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="input-container-inner">
        <h1 className="hero-header">Enter a City and State</h1>
        <div className="form-group">
          <input className="form-control" placeholder='St. George, Utah'/>
          <button className="btn btn-success">Get Weather</button>
        </div>
      </div>
    )
  }
});

module.exports = Home;
