import {Container, Header, Button, Input} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { registerUser } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
import ImageUploader from 'react-images-upload'

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      avatar: ''
    };
  };
  
  inputHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitForm = e => {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      email,
      password,
      passwordConfirmation,
      avatar
    } = this.state
    registerUser({ email, password, passwordConfirmation, avatar }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then(console.log('yay'))
      .catch()

  }

  onAvatarDropHandler = (pictureFiles, pictureDataURLs) => {
    this.setState({
      avatar: pictureDataURLs
    })
    console.log(pictureDataURLs);
  }

  render() {  
    let login

    if (this.props.currentUser.isSignedIn) {
      login = <p>Hello {this.props.currentUser.attributes.uid}</p>
    } else {
      login = (
        <>
          <input id="email" placeholder="email" onChange={this.inputHandler}></input>
          <input id="password" type="password" placeholder="password" onChange={this.inputHandler}></input>
          <input id="passwordConfirmation" type="password" placeholder="password confirmation" onChange={this.inputHandler}></input>
          <ImageUploader
            buttonText={"Upload your avatar (jpg/png)"}
            withPreview
            singleImage
            withIcon
            withLabel={false}
            onChange={this.onAvatarDropHandler}
            imgExtension={[".jpg", ".png"]}
            maxFileSize={5242880}
            singleImage={true}
          />
          <button onClick={this.submitForm}>Register</button>
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
export default connect(mapStateToProps, { registerUser })(App)
