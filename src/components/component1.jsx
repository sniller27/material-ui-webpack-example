import React from 'react';
//router links
import { Link } from 'react-router'
//own navbarlinks
import NavLink from './NavLink'

//IMPORT COLORS FOR CUSTOM STYLE
// import {cyan500} from 'material-ui/styles/colors';
//MATERIAL UI THEME 1
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//MATERIAL UI THEME 2
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//CUSTOM
// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500,
//   },
//   appBar: {
//     height: 50,
//   },
// });

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); } 

   render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
           <div>
              <AppBar 
              title="My App"
              onLeftIconButtonTouchTap={this.handleToggle}
               />
              <h1>Header material</h1>
              <NavLink to="/home">Home</NavLink>
              <br />
              <NavLink to="/login">Login</NavLink>


              <Drawer 
              open={this.state.open}
              docked={false}
              onRequestChange={(open) => this.setState({open})}
              >
                 <NavLink to="/home"><MenuItem>Home</MenuItem></NavLink>
                <NavLink to="/login"><MenuItem>Sign up</MenuItem></NavLink>
              </Drawer>
              {/* activates nested view from index.js */}
              {this.props.children}
           </div>
        </MuiThemeProvider>
      );
   }
}

export default AppMenu;


// module.exports = "<p>from content.js</p>";
