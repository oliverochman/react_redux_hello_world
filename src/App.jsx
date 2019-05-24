import {Container, Header, Button, Input} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { signInUser } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module


import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    };
  };
  
  inputHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then(console.log('yay'))
      .catch()

  }

  render() {  
    let login

    if (this.props.currentUser.isSignedIn) {
      login = <p>Hello {this.props.currentUser.attributes.uid}</p>
    } else {
      login = (
        <>
          <input id="email" placeholder="email" onChange={this.inputHandler.bind(this)}></input>
          <input id="password" placeholder="password" onChange={this.inputHandler.bind(this)}></input>
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
        {login}
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
export default connect(mapStateToProps, { signInUser })(App)
