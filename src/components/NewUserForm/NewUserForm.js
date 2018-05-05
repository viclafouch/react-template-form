import React, { Component } from 'react'
import User from '../../shared/models/User.class';
import Input from '../FormTemplate/Input';
import Label from '../FormTemplate/Label';
import Textarea from '../FormTemplate/Textarea';

export class NewUserForm extends Component {

    user = new User();

    constructor() {
        super();

        this.baseState = {
            firstname: { value: '', valid: null },
            lastname: { value: '', valid: null },
            email: { value: '', valid: null },
            description: { value: '', valid: null },
        }

        for (const key in this.baseState) { this.baseState[key]['name'] = key }

        this.state = {
            ...this.baseState,
            formValid: false
        }
    }

    handleValidForm(state) {

       for (const key in state) {
           if (state.hasOwnProperty(key)) {
               if (state[key].valid === false) return;
           }
       }

       this.setState({
           formValid: true
       });
    }

    handleSubmit = e => {
        if (!this.state.formValid) return;
    }

    handleChange = e => {

        let name = e.target.name;
        let value = e.target.value;

        let field = this.state[name];

        if (User.change(name, value)) field.value = value;
        field.valid = User.isValid(name, value);

        return this.setState(prevState => ({
            ...prevState,
            [name]: field
        }), () => {
            this.handleValidForm(this.state)
        });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <Label
                            title="Firstname"
                            for={this.state.firstname.name}
                        />
                        <Input
                            value={this.state.firstname.value}
                            onChange={this.handleChange}
                            valid={this.state.firstname.valid}
                            name={this.state.firstname.name}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Lastname"
                            for={this.state.lastname.name}
                        />
                        <Input
                            value={this.state.lastname.value}
                            onChange={this.handleChange}
                            valid={this.state.lastname.valid}
                            name={this.state.lastname.name}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Email"
                            for={this.state.email.name}
                        />
                        <Input
                            type="email"
                            value={this.state.email.value}
                            onChange={this.handleChange}
                            valid={this.state.email.valid}
                            name={this.state.email.name}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Description"
                            for={this.state.description.name}
                        />
                        <Textarea
                            value={this.state.description.value}
                            onChange={this.handleChange}
                            valid={this.state.description.valid}
                            name={this.state.description.name}
                        />
                    </div>

                    
                </form>
            </div>
        )
    }
}

export default NewUserForm
