const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: ''
      },
    },
  },
  greeting: 'Hello World from Redux',
  proposed_greeting: ''
}
export default initialState