import React from 'react';
import {Container, Header, Button, Input} from 'semantic-ui-react'
import { connect } from 'react-redux';


const App = (props) => { 
  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greetingReducer.greeting}</Header>
        <Input
          placeholder='New greeting...'
          onBlur={(event) => props.dispatch({ type: 'PROPOSE_GREETING', greeting: event.target.value })}
        />
        <Button
          primary
          onClick={() => props.dispatch({ type: 'CHANGE_GREETING' })}
        >
          Change greeting
        </Button>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state // Please note that we are returning the entire state object
  }
}
export default connect(mapStateToProps)(App)
