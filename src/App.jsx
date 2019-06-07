import {Container, Header, Button, Input} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { registerUser } from './redux-token-auth-config'
import ImageUploader from 'react-images-upload'


import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      avatar: ''
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
      password_confirmation,
      avatar
    } = this.state
    registerUser({ email, password, password_confirmation, avatar })
      .then(() => {
        let image = `data:image/png;base64,${this.props.currentUser.attributes.avatar}`
        this.setState({
          avatar: image
        })
      })
      .catch()

  }

  onAvatarDropHandler = (pictureFiles, pictureDataURLs) => {
    this.setState({
      avatar: pictureDataURLs
    })
    console.log(pictureDataURLs);
  }

  render() {  
    let register

    if (this.props.currentUser.isSignedIn) {
      register = (
        <>
          <p>Hello {this.props.currentUser.attributes.user.uid}</p>
          <img src={this.state.avatar}></img>
        </>
      ) 
    } else {
      register = (
        <>
          <input id="email" placeholder="Email" onChange={this.inputHandler.bind(this)}></input>
          <input id="password" placeholder="Password" onChange={this.inputHandler.bind(this)}></input>
          <input id="password_confirmation" placeholder="Password confirmation" onChange={this.inputHandler.bind(this)}></input>
          <ImageUploader
            buttonText={"Upload your avatar (jpg/png)"}
            withPreview
            singleImage
            withIcon
            withLabel={false}
            onChange={this.onAvatarDropHandler}
            imgExtension={[".jpg", ".png"]}
            maxFileSize={5242880}
          />
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
