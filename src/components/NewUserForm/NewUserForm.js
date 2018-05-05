import React, { Component } from 'react'
import User from '../../shared/models/User.class';
import Input from '../FormTemplate/Input';

export class NewUserForm extends Component {

    user = new User();

    constructor() {
        super();

        this.baseState = {
            firstname: { value: '', valid: false },
            lastname: { value: '', valid: false },
            email: { value: '', valid: false },
            description: { value: '', valid: false },
        }

        this.state = {
            ...this.baseState,
            formValid: false
        }
    }

    handleChange = e => {
        console.log(this);
    }

    render() {
        return (
            <div>
                <form>
                    <Input
                        value={this.state.firstname.value}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default NewUserForm
