import React from 'react';
//router links
import { Link } from 'react-router'
//own navbarlinks
import NavLink from './NavLink'
//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppMenu extends React.Component {
   render() {
      return (
        <MuiThemeProvider>
           <div>
              <AppBar title="My AppBar" />
              <h1>Header material</h1>
              <NavLink to="/page1">page 1</NavLink>
              <NavLink to="/page2">page 2</NavLink>
              {/* activates nested view from index.js */}
              {this.props.children}
           </div>
        </MuiThemeProvider>
      );
   }
}

export default AppMenu;


// module.exports = "<p>from content.js</p>";
