import React, { Component } from 'react';
import ItemList from './components/itemlist';
import { Button, Alert, Container} from 'reactstrap';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {  
  render() {
    return (
      <Container>
      <div className="App">
        <h3>Item List Operation</h3>
        <div>
          <div style={{marginBottom:'8px'}}>
              <Button color="success" outline size="sm" type="button" onClick={()=> this.props.addItem()}>Add Item</Button>
          </div>
          <div>
            {
              this.props.itemlist.length <= 0 ?
              <div style={{display:'block'}}>
                <Alert color="danger">
                  No Item Available!!
                </Alert>
              </div>
              : null
            }
            <ul>
              {
                this.props.itemlist.map((itemvalue, index) => {
                    return (
                      <ItemList 
                        key = {index}
                        delEvent={()=> this.props.deleteItem(index)}
                      >{itemvalue.listvalue}</ItemList>
                    )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    itemlist : state.itemlist,
    listlength : state.listlength,
  }
}
const mapDispachToProps = (dispach) => {
  return {
    addItem: () => dispach ({type : "ADD_ITEM"}),
    deleteItem: (index) => dispach ({type : "DEL_ITEM", key:index}),
  }
}
export default connect(mapStateToProps, mapDispachToProps)(App);
