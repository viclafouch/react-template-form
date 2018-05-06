import React, { Component } from 'react'
import User from '../../shared/models/User.class';
import Input from '../FormTemplate/Input';
import Label from '../FormTemplate/Label';
import Textarea from '../FormTemplate/Textarea';
import Button from '../FormTemplate/Button';
import Select from '../FormTemplate/Select';

export class NewUserForm extends Component {

    constructor() {
        super();
        this.user = new User();
        this.civilityOptions = ['Male', 'Female']

        this.baseState = {
            fields: this.setBaseUser(this.user),
            formValid: false
        }

        this.state = this.baseState
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.formValid !== prevState.formValid)
            return this.props.FormCanBeSubmitted(this.state.formValid)
    }


    setBaseUser(user) {

        this.baseUser = {
            firstname: { value: user.firstname },
            lastname: { value: user.lastname },
            email: { value: user.email },
            civility: { value: user.civility },
            description: { value: user.description, null: true },
        }

        for (const key in this.baseUser) {
            this.baseUser[key]['name'] = key
            this.baseUser[key].valid = (this.baseUser[key].value === '' && this.baseUser[key].null) || this.baseUser[key].valid
        }

        return this.baseUser;
    }

    handleValidField = fieldName => !!(this.state.fields[fieldName].valid)

    handleClear = e => {
        if (e) e.preventDefault();
        this.user.clear();
        return this.setState({
            formValid: false,
            fields: this.setBaseUser(this.user)
        }, () => {
            this.props.updateUser(this.user);
            this.props.FormCanBeSubmitted(this.state.formValid)
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.formValid) return;
        if (this.props.onSubmit) return this.props.onSubmit();
    }

    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        let field = this.state.fields[name];

        if (User.canChange(name, value))
            field.value = this.user[name] = value;
        field.valid = (value === '' && field.null) || User.isValid(name, value);


        this.props.updateUser(this.user);

        return this.setState(prevState => ({
            formValid:
                this.handleValidField('firstname') &&
                this.handleValidField('lastname') &&
                this.handleValidField('email') &&
                this.handleValidField('civility') &&
                this.handleValidField('description') === true,
            fields: {
                ...prevState.fields,
                [name]: field
            }
        }));
    }

    render() {

        let { firstname, lastname, email, description, civility } = this.state.fields

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
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
                </fieldset>
                <fieldset>
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
                </fieldset>
                <fieldset>
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
                </fieldset>
                <fieldset>
                    <Label
                        title="Civility"
                        for={civility.name}
                    />
                    <Select
                        value={civility.value}
                        onChange={this.handleChange}
                        valid={civility.valid}
                        name={civility.name}
                        options={this.civilityOptions}
                        required={!civility.null}
                    />
                </fieldset>
                <fieldset>
                    <Label
                        title="Description (can be null)"
                        for={description.name}
                    />
                    <Textarea
                        value={description.value}
                        onChange={this.handleChange}
                        valid={description.valid}
                        name={description.name}
                        required={!description.null}
                    />
                </fieldset>

                <Button
                    disabled={!this.state.formValid}
                    title="Save"
                />

                <Button
                    title="clear"
                    reset
                    onClick={this.handleClear}
                />
            </form>
        )
    }
}

export default NewUserForm
