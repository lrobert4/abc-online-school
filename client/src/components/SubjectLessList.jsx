import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderImg from './images/math.jpg'

class Subject extends Component {

    state = {
            subject: {},
            lessons: [],
            unfilteredList: [],
    }

    // When component being rendered. get data. update state.
    componentDidMount() {
        const subjectId = this.props.match.params.id;
        
        this.fetchLesson(subjectId)
        
    }

    //fetch info from api
    fetchLesson = async (subjectId) => {
        //try
        try {
            //create array banana
            let filteredArr = []

            //axios call
            const lessonResponse = await axios.get(`/api/v1/lessons/`)
            
            
            //setting your state
            this.setState({
                unfilteredList: lessonResponse
            })
            //for loop that loops through response and using 
            let i;
            for(i=0; i < this.state.unfilteredList.data.length; i++) {
                
                //if statement finds array[i].subjectId == subjectID then add to banana
                if(this.state.unfilteredList.data[i].subject == subjectId) {
                    
                    filteredArr.push(this.state.unfilteredList.data[i])
                    
                    
            } 

            
            
        } // Closing for loop

        //after for loop setState lesson: filteredArr
        this.setState({
            lessons: filteredArr,
        
            
            
        })

    } //Closing bracket for try

        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    

    } // Closing for Fecth method

        

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
                                    <Link to={`/lessons/${lesson.id}`} ><button>Start Lesson Now</button></Link>
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