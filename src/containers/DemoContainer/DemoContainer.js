import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { NewUserForm } from '../../components/NewUserForm/NewUserForm';
import User from '../../shared/models/User.class';

export class DemoContainer extends Component {

    constructor() {
        super();
        this.state = {
            user: new User()
        }
    }

    render() {
        return (
            <div>
                <h1>Demo</h1>
                <NewUserForm
                    user={this.state.user}
                    onSuccess={user => this.setState({user: user})}
                />
                <ReactJson src={this.state} name="Form" />
            </div>
        )
    }
}

export default DemoContainer
