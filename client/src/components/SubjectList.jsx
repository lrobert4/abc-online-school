import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class SubjectList extends Component {
    state = {
        error: '',
        subjects: []
    }

    componentDidMount(){
        this.fetchSubjects();
    }

    fetchSubjects = async () => {
        try {
            const res = await axios.get('/api/v1/subjects/?format=json');
            this.setState({subjects: res.data});
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
                <h1>All Subjects</h1>
                <Container>
                    <Row>
                        {this.state.subjects.map(subject => (
                            <Col>
                                <div key={subject.id}>
                                    <Link to={`/subject/${subject.id}`} ><img src={subject.photo_url} className="img-size" alt=""/> <br />{subject.name}</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SubjectList;