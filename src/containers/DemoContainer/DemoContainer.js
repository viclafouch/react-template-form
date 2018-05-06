import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import User from '../../shared/models/User.class';

export class DemoContainer extends Component {

    constructor() {
        super();
        this.state = {
            User: new User(),
            formValid: false
        }

        this.form = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                <a href="https://github.com/viclafouch/react-template-form" target="_blank" rel="noopener noreferrer">
                    <img style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        border: "0"
                    }} src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" />
                </a>
                <div className="container">
                    <h1 className="">React Template Form</h1>
                    <div className="row">
                        <div className="one-half column">
                            <NewUserForm
                                action="edit"
                                ref={this.form}
                                user={this.state.user}
                                updateUser={user => this.setState({ User: user })}
                                onSubmit={() => { alert('submitted'); this.form.current.handleClear(); } }
                                FormCanBeSubmitted={bool => this.setState({ formValid: bool })}
                            />
                        </div>
                        <div className="one-half column">
                            <p>Result in live : </p>
                            <ReactJson src={this.state} name="Form" />
                            <p>Form can be submitted : {this.state.formValid ? '✔' : '✘'}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DemoContainer
