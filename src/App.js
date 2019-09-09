import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {  fetchData } from './actions/actions'

//sync
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    );
  }
}*/

/*const mapStatetoProps = (state) => {
  return { num: state.num }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment())
  }
}*/

//async
class App extends Component {
  componentDidMount() {
    this.props.onFetchData()
  }

  render() {
    return (
      <div className="App">
        <h1>Fetching the data from the backend</h1>
        {this.props.error && <p>{this.props.error}</p>}

        {this.props.data && <ul>
          <li>id: {this.props.data.id}</li>
          <li>title: {this.props.data.title}</li>
        </ul>}
      </div>
    );
  }
}

//async
const mapStatetoProps = (state) => {
  return { num: state.num, data: state.data, error: state.error }
}

const mapDispatchtoProps = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);





