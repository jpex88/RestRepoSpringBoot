/*import React from 'react';
import {deleteMovieByName} from "../Action/MovieAction";
import {Button, Form, FormControl} from "react-bootstrap";*/

/*
export default class DeleteMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchId: '',
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        deleteMovieByName(this.state.searchId).then(() => console.log("Movie ", this.state.searchId, " is deleted"));
    }

    handleChange = (e) => {
        this.setState({searchId: e.target.value});
    }

    render() {
        return(
            <section>
                <Form inline onSubmit={this.handleSubmit} style={{ padding: '2% 0' }}>
                    <FormControl
                        type="text"
                        value={this.state.searchId}
                        placeholder="Film id"
                        onChange={this.handleChange}
                    />
                    <Button type='submit' >Delete</Button>
                </Form>
            </section>
        )
    }
}*/
