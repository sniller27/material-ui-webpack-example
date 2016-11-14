import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

const TextFieldExampleSimple = () => (
<MuiThemeProvider>
  <div>

    <h2>Sign up form</h2>
    <TextField
      hintText="Name"
    />
    <br />
    <TextField
      hintText="Lastname"
      type="password"
    />
    <br />
    <RadioButtonGroup name="shipSpeed">
      <RadioButton
        value="male"
        label="male"
      />
      <RadioButton
        value="female"
        label="female"
      />
    </RadioButtonGroup>
    <Checkbox
      label="Sign up for news"
    />
    <RaisedButton label="Sign up" />

  </div>
</MuiThemeProvider>

);

export default TextFieldExampleSimple;