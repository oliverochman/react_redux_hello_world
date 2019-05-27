import {Container, Header, Button, Input} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { registerUser } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module


import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }
  
  inputHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      email,
      password,
      password_confirmation
    } = this.state
    registerUser({ email, password, password_confirmation }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then(console.log('yay'))
      .catch()

  }

  render() {  
    let register

    if (this.props.currentUser.isSignedIn) {
      register = <p>Hello {this.props.currentUser.attributes.uid}</p>
    } else {
      register = (
        <>
          <input id="email" placeholder="Email" onChange={this.inputHandler.bind(this)}></input>
          <input id="password" placeholder="Password" onChange={this.inputHandler.bind(this)}></input>
          <input id="password_confirmation" placeholder="Password confirmation" onChange={this.inputHandler.bind(this)}></input>
          <button onClick={this.submitForm.bind(this)}>Login</button>
        </>
      )
    }

    return (
      <>
        <Container>
          <Header as='h1'>{this.props.state.greetingReducer.greeting}</Header>
          <Input
            placeholder='New greeting...'
            onBlur={(event) => this.props.dispatch({ type: 'PROPOSE_GREETING', greeting: event.target.value })}
          />
          <Button
            primary
            onClick={() => this.props.dispatch({ type: 'CHANGE_GREETING' })}
          >
            Change greeting
          </Button>
        </Container>
        {register}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}
export default connect(mapStateToProps, { registerUser })(App)
