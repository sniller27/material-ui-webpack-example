import React from 'react';
//plugin fix. Needed for onTouchTap. (temporary)
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
//for providing a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyButtons from './components/component1.jsx';

//plugin fix. Needed for onTouchTap. (temporary)
injectTapEventPlugin();

//theme object?
const App = () => (
  <MuiThemeProvider>
    <MyButtons />
  </MuiThemeProvider>
);


render( <App />, document.querySelector('.main'));



// document.write(require("./modules/content2.js"));
// document.write(require("./modules/content.js"));
require("../css/small.css");
require("../css/medium.css");
