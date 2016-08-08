var React = require('react');
var styles = require('../styles');
require('../main.css');
var bgImg = require('../images/pattern.svg');

var Main = React.createClass({
  render: function() {
    console.log(bgImg);
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Weather Genie</a>
            </div>
            <form className="navbar-form navbar-right">
              <div className="form-group">
               <input type="text" className="form-control" placeholder="St. George, Utah" />
              </div>
              <button type="submit" className="btn btn-success">Get Weather</button>
            </form>
          </div>
        </nav>
        <div className="input-container" style={styles.backgroundBody}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
