import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class NoteList extends Component {
    state = {
        error: '',
        notes: []
    }

    componentDidMount(){
        this.fetchNotes();
    }

    fetchNotes = async () => {
        try {
            const res = await axios.get('/api/v1/notes/?format=json');
            this.setState({notes: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>My Notes</h1>
                <Container>
                    <Row>
                        {this.state.notes.map(note => (
                            <Col>
                                <div key={note.id}>
                                    <Link to={`/notes/${note.id}`} >{note.title}</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NoteList;