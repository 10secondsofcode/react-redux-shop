import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {  fetchData } from '../actions/actions'

//async
class Users extends Component {
    render() {
        const users = this.props.data;
        return (
            <div className="App">
                <h1>User Details</h1>
                {this.props.error && <p>{this.props.error}</p>}
                {users && 
                <ul>
                    {users.map(
                        (user) => <li key={user.id}>{user.id} - {user.name} - {user.username} </li>
                    )}
                </ul>}
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Users);
