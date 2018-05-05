import React, { Component } from 'react'
import User from '../../shared/models/User.class';
import Input from '../FormTemplate/Input';
import Label from '../FormTemplate/Label';
import Textarea from '../FormTemplate/Textarea';
import Button from '../FormTemplate/Button';

export class NewUserForm extends Component {

    constructor(props) {
        super(props);

        this.user = props.user;

        this.baseUser = {
            firstname: { value: this.user.firstname, valid: null },
            lastname: { value: this.user.lastname, valid: null },
            email: { value: this.user.email, valid: null, null: true },
            description: { value: this.user.description, valid: null },
        }

        for (const key in this.baseUser) {
            this.baseUser[key]['name'] = key
            this.baseUser[key].valid = this.baseUser[key].value === '' && this.baseUser[key].null || this.baseUser[key].valid
        }

        this.state = {
            ...this.baseUser,
            formValid: false
        }
    }

    componentDidMount = () => {
        if (this.props.action === 'edit') {
            for (const key in this.baseUser) {
                this.handleChange({
                    target: { value: this.baseUser[key].value, name: this.baseUser[key].name }
                });
            }
        }
    }

    handleValidForm(state) {

       for (const key in state) {
           if (state.hasOwnProperty(key)) {
               if (state[key].valid === false || (state[key].valid === null && state[key].value))
               return this.setState({
                   formValid: false
               });
           }
       }

       this.setState({
           formValid: true
       });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.formValid) return;
        if (this.props.onSuccess) this.props.onSuccess(this.user);
    }

    handleChange = e => {

        let name = e.target.name;
        let value = e.target.value;

        let field = this.state[name];

        if (User.change(name, value)) field.value = value;
        field.valid = User.isValid(name, value);
        field.valid = (value === '' && field.null) ? null : field.valid;

        if ((value === '' && field.null) || field.valid) {
            this.user[name] = field.value;
            this.props.onSuccess(this.user);
        }

        return this.setState(prevState => ({
            ...prevState,
            [name]: field
        }), () => {
            this.handleValidForm(this.state)
        });
    }

    render() {

        let { firstname, lastname, email, description } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <Label
                            title="Firstname"
                            for={firstname.name}
                        />
                        <Input
                            value={firstname.value}
                            onChange={this.handleChange}
                            valid={firstname.valid}
                            name={firstname.name}
                            required={!firstname.null}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Lastname"
                            for={lastname.name}
                        />
                        <Input
                            value={lastname.value}
                            onChange={this.handleChange}
                            valid={lastname.valid}
                            name={lastname.name}
                            required={!lastname.null}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Email"
                            for={email.name}
                        />
                        <Input
                            type="email"
                            value={email.value}
                            onChange={this.handleChange}
                            valid={email.valid}
                            name={email.name}
                            required={!email.null}
                        />
                    </div>
                    <div className="field">
                        <Label
                            title="Description"
                            for={description.name}
                        />
                        <Textarea
                            value={description.value}
                            onChange={this.handleChange}
                            valid={description.valid}
                            name={description.name}
                            required={!description.null}
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
