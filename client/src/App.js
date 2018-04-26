import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fetchBear } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let bearReducer = function(state = [], action){
  if(action){
    if(action.type == 'FETCH_BEAR'){
      return action.payload
    }
  }
  return state
}
let store = createStoreWithMiddleware(combineReducers({
  bear: bearReducer
}))

let store = createStoreWithMiddleware(reducers)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({data: store.getState().bear})
    })
    store.dispatch(fetchBear());
  }
  render() {
    let bears = this.state.data;
    return (
      <div>
        {
          bears.map(bear => <div key={bear.id}>{bear.name}</div>)
        }
      </div>
    );
  }
}

export default App;