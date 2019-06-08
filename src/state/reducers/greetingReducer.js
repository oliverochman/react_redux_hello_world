const initialState = {
  greeting: 'Hello World from Redux',
  proposed_greeting: ''
}

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      return {
        greeting: state.proposed_greeting
      }
    case 'PROPOSE_GREETING':
      return {
        ...state,
        proposed_greeting: action.greeting
      }
    default:
      return state
  }
}
export default greetingReducer