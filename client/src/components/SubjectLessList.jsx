import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import HeaderImg from './images/math.jpg'

class Subject extends Component {

    state = {
            subject: {},
            lessons: [],
    }

    componentDidMount() {
        const subjectId = this.props.match.params.id;
        this.fetchSubject(subjectId)
    }

    fetchSubject = async (subjectId) => {
        try {
            const subjectResponse = await axios.get(`/api/v1/subjects/${subjectId}/?format=json`)
            this.setState({
                subject: subjectResponse.data,
                
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    
//fetch info from api
//try
//create array banana
//axios call
//for loop that loops through response and using if statement finds array[i].subjectId === subjectID then add to banana
//after for loop setState lesson: banana
//all the catch stuff
    render() {
        return (
            <div>
                <img src={HeaderImg} className="headerImg" alt="" />
                <h1>{this.state.subject.name}</h1>
                
                <Container>
                    <Row>
                        {this.state.lessons.map(lesson => (
                            <Col>
                                <div key={lesson.id}>
                                    <h2>{lesson.title}</h2> 
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Subject;