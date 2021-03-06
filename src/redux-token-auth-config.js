import { generateAuthActions } from 'redux-token-auth'

const config = {
  authUrl: 'http://localhost:3001/api/v1/auth',
  userAttributes: {
    user: 'user',
    avatar: 'avatar'
  },
  userRegistrationAttributes: {
    avatar: 'avatar'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}