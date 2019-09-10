import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {  fetchData } from './actions/actions'
import Users from './components/Users';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

//async
class App extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React Redux</h1>
        {/* <Users/> */}
        <PostForm/>
        <AllPosts/>
      </div>
    );
  }
}

//async
const mapStatetoProps = (state) => {
  return { data: state.data, error: state.error }
}

const mapDispatchtoProps = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
