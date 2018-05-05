import React, { Component } from 'react'
import User from '../../shared/models/User.class';
import Input from '../FormTemplate/Input';
import Label from '../FormTemplate/Label';
import Textarea from '../FormTemplate/Textarea';
import Button from '../FormTemplate/Button';

export class NewUserForm extends Component {

    user = new User();

    constructor() {
        super();

        this.baseState = {
            firstname: { value: '', valid: null },
            lastname: { value: '', valid: null },
            email: { value: '', valid: null, null: true },
            description: { value: '', valid: null },
        }

        for (const key in this.baseState) {
            this.baseState[key]['name'] = key
            this.baseState[key].valid = (this.baseState[key].value === '' && this.baseState[key].null) ? true : null
        }

        this.state = {
            ...this.baseState,
            formValid: false
        }
    }

    handleValidForm(state) {

        console.log(state);


       for (const key in state) {
           if (state.hasOwnProperty(key)) {
               if (state[key].valid === false || (state[key].valid === null && state[key].value))
               return this.setState({
                   formValid: false
               });
           }
       }

       console.log('test');


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
        field.valid = (value === '' && field.null) ? null : field.valid;

        console.log(field.valid);


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
                            required={!this.state.firstname.null}
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
                            required={!this.state.lastname.null}
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
                            required={!this.state.email.null}
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
                            required={!this.state.description.null}
                        />
                    </div>

                    <Button
                        disabled={!this.state.formValid}
                    />
                </form>
            </div>
        )
    }
}

export default NewUserForm
