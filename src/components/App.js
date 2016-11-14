import React from 'react';

//MATERIAL UI THEME 1
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//MATERIAL UI THEME 2
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppMenu extends React.Component {
   render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
         <div>
            <h1>App component</h1>
            <RaisedButton label="Click me" />
         </div>
        </MuiThemeProvider>
      );
   }
}

export default AppMenu;

// module.exports = "<p>from content.js</p>";
