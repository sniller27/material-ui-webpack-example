import React from 'react';
//plugin fix. Needed for onTouchTap. (temporary)
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
//routing
import { Router, Route, hashHistory } from 'react-router'
//for providing a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//files
import MyIndex from './components/component1.jsx';
import MyText from './components/App.js';
import MyText2 from './components/App2.js';

//plugin fix. Needed for onTouchTap. (temporary)
injectTapEventPlugin();

//theme object?
// const App = () => (
//   <MuiThemeProvider>
//     <MyButtons />
//   </MuiThemeProvider>
// );


//routing of URL's
render((
  <Router history={hashHistory}>
    <Route path="/" component={MyIndex}/>
    <Route path="/buttons" component={MyText}/>
    <Route path="/buttons2" component={MyText2}/>
  </Router>
), document.querySelector('.main'));



// document.write(require("./modules/content2.js"));
// document.write(require("./modules/content.js"));
require("../css/small.css");
require("../css/medium.css");
