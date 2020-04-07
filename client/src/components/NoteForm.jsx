import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class NoteForm extends Component {

    state = {
        notes: [],
        newDetails: {
            title: '',
            content: '',
            
        }
    }

    handleChange = (event) => {
        
        //Using setState to update the target form elements.
        const newDetails = { ...this.state.newDetails }
        newDetails[event.target.name] = event.target.value
        this.setState({
            newDetails
            
        })
    }
    // Upon form submission send data to api. Some info will be past to Details component.
    handleSubmit = (event) => {
        
        console.log('handleSubmit!')
        event.preventDefault();
        axios.post(`/api/v1/notes/`, this.state.newDetails)
            .then((response) => {
                const postNote = response.data;
                console.log(postNote)
                this.setState({
                    notes: postNote,
                })
                
            })
            
    }


    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col>
                        <h3>Create Personal Notes</h3>   
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <label>Enter Lesson Notes Title:</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Lesson Notes Title" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="col">
                                        <label>Personal Notes:</label>
                                        <textarea type="text" className="form-control" name="content" placeholder="Enter Personal Notes" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>

                                <button className="btn btn-primary" type="submit">Create Personal Notes Now</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
