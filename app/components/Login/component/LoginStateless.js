import React from 'react';
import { Button } from 'react-bootstrap';
import IconSignIn from 'react-icons/lib/ti/arrow-forward';
import IconRegister from 'react-icons/lib/ti/pen';
import TextField from '@atlaskit/field-text';
import { Wrapper, Tab, SigninForm, SigninButton, RegisterForm } from '../styled/index';


class LoginStateless extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      openSigninForm: true,
      openRegisterForm: false,
      formSign: {

      },
      formRegister: {
        personalAccount: true,
      },
    };
    this.switchToSignin = this.switchToSignin.bind(this);
    this.switchToRegister = this.switchToRegister.bind(this);
    this.saveValueOfTextFieldsToState = this.saveValueOfTextFieldsToState.bind(this);
    this.setPersonalAccount = this.setPersonalAccount.bind(this);
    this.setBusinessAccount = this.setBusinessAccount.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  switchToSignin() {
    this.setState({ openRegisterForm: false, openSigninForm: true });
  }

  switchToRegister() {
    this.setState({ openRegisterForm: true, openSigninForm: false });
  }

  saveValueOfTextFieldsToState(formName, valueType, value) {
    this.state[formName][valueType] = value;
  }

  setPersonalAccount() {
    this.state.formRegister.personalAccount = true;
    this.state.formRegister.businessAccount = false;
  }

  setBusinessAccount() {
    this.state.formRegister.personalAccount = false;
    this.state.formRegister.businessAccount = true;
  }

  render() {
    return (
      <Wrapper>
        <div className="row" >
          <div className="col-md-6">
            <Tab unSelect={!this.state.openSigninForm} onClick={this.switchToSignin}>
              <IconSignIn />SignIn
            </Tab>
          </div>
          <div className="col-md-6">
            <Tab unSelect={!this.state.openRegisterForm} onClick={this.switchToRegister}>
              <IconRegister />Register
            </Tab>
          </div>
          <SigninForm visible={this.state.openSigninForm}>
            <TextField placeholder="Email or Username" shouldFitContainer autoFocus label="Email or Username" onChange={(e) => this.saveValueOfTextFieldsToState('formSign', 'emailOrUserName', e.target.value)} />
            <TextField placeholder="Password" shouldFitContainer label="Password" onChange={(e) => this.saveValueOfTextFieldsToState('formSign', 'password', e.target.value)} />
            <SigninButton><Button bsStyle="primary" block>Sign In</Button></SigninButton>
          </SigninForm>
          <RegisterForm visible={this.state.openRegisterForm}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <input type="radio" name="accountType" checked onClick={this.setPersonalAccount} />Personal Account
                </div>
                <div className="col-md-6">
                  <input type="radio" name="accountType" onClick={this.setBusinessAccount} />Business Account
                </div>
              </div>
            </div>
            <TextField placeholder="First Name" shouldFitContainer label="First Name" onChange={(e) => this.saveValueOfTextFieldsToState('formRegister', 'firstName', e.target.value)} />
            <TextField placeholder="LastName" shouldFitContainer label="Last Name" onChange={(e) => this.saveValueOfTextFieldsToState('formRegister', 'lastName', e.target.value)} />
            <TextField placeholder="Email" shouldFitContainer label="Email" onChange={(e) => this.saveValueOfTextFieldsToState('formRegister', 'email', e.target.value)} />
            <TextField placeholder="Password" shouldFitContainer label="Password" onChange={(e) => this.saveValueOfTextFieldsToState('formRegister', 'password', e.target.value)} />
            <SigninButton><Button bsStyle="primary" block>Sign In</Button></SigninButton>
          </RegisterForm>
        </div>
      </Wrapper>
    );
  }
}

LoginStateless.propTypes = {

};

export default LoginStateless;
