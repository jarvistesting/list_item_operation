import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  constructor() {
    super();
  }
  render() {
    const reducer = function (state, action) {
      if (action.type === 'ATTACK') {
        return action.payload
      }
      if (action.type === 'GREENATTACK') {
        return action.payload
      }
      return state;
    }
    const store = createStore (reducer, "peace");
    store.subscribe(()=>{
      console.log("store is now", store.getState());
    })

    store.dispatch({type : "ATTACK",payload:"Iron Man"});
    store.dispatch({type : "GREENATTACK",payload:"Hulk"});
      return(
        <div>
            Redux Demo
        </div>
      )
  }
}

export default ReduxDemo;