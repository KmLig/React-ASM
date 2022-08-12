import React, { Component } from 'react';
import { LocalForm, Input } from 'react-redux-form';

class Test extends Component{
    constructor(props) {
        super(props);
        this.state={
            search: ''
        }        
    }

    handleSubmit(e) {
        this.setState({})
    }


    render() {
        return(
            <div>
                <LocalForm>
                    <Input type='text' value='' onSubmit={this.handleSubmit}></Input>

                </LocalForm>
            </div>
        )
    }
}