import initialState from '../store/initialState'

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      return {
        ...state,
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