import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const TextFieldExampleSimple = () => (
<MuiThemeProvider>
  <div>

    <h2>Login</h2>
    <TextField
      hintText="Username"
    />
    <br />
    <TextField
      hintText="Password"
      type="password"
    />
    <br />
     <RaisedButton label="Login" />

  </div>
</MuiThemeProvider>

);

export default TextFieldExampleSimple;