import React from 'react';
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
            <h1>App component</h1>
            <RaisedButton label="Default" />
         </div>
        </MuiThemeProvider>
      );
   }
}

export default AppMenu;

// module.exports = "<p>from content.js</p>";
