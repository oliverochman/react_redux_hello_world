import React from 'react';
import {Container, Header, Button} from 'semantic-ui-react'
import { connect } from 'react-redux';


const App = (props) => { 
  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greeting}</Header>
        <Button
          primary
          onClick={() => props.dispatch({ type: 'CHANGE_GREETING', greeting: 'Hello Venus' })}
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
