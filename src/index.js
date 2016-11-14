import React from 'react';
//plugin fix. Needed for onTouchTap. (temporary)
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
//routing (IndexRoute for showing start view)
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
//for providing a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//files
import MyIndex from './components/component1.jsx';
import MyText from './components/App.js';
import App from './components/App2.jsx';
// import Other from './components/form.jsx';

//plugin fix. Needed for onTouchTap. (temporary)
injectTapEventPlugin();

//theme object? supporting arrow function syntax
// const App = () => (
//   <MuiThemeProvider>
//     <MyButtons />
//   </MuiThemeProvider>
// );
// ReactDOM.render(<App />, document.getElementById('app'));


//routing of URL's (+ nested routing... views in views)
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MyIndex}>
    	<IndexRoute component={MyText} />
	    <Route path="/home" component={MyText}/>
	    <Route path="/signup" component={App}/>
    </Route>
  </Router>
), document.getElementById('app'));



// document.write(require("./modules/content2.js"));
// document.write(require("./modules/content.js"));
require("../css/small.css");
require("../css/medium.css");
