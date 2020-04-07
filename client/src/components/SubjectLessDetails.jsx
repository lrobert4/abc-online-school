import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class SubjectLessDetails extends Component {

    state = {
        subject: {},
        lessons: [],
        // unfilteredList: [],
}

// When component being rendered. get data. update state.
componentDidMount() {
    const lessonId = this.props.match.params.id;
    console.log(lessonId)
    this.fetchLesson(lessonId)
    console.log(lessonId)
}

//fetch info from api
fetchLesson = async (lessonId) => {
    console.log(lessonId)
    //try
    try {
        //create array banana
        // let filteredArr = []

        //axios call to get specific lessonId clicked on from SeubjectLessList view
        const lessonResponse = await axios.get(`/api/v1/lessons/${lessonId}/?format=json`)
        
        console.log(lessonResponse)
        //setting your state
        this.setState({
            lessons: lessonResponse
        });
        
        //for loop that loops through response and using 
        // let i;
        // for(i=0; i < this.state.unfilteredList.data.length; i++) {
        //     console.log(this.state.unfilteredList.data[i].subject)
        //     console.log(subjectId)
        //     //if statement finds array[i].subjectId === subjectID then add to banana
        //     if(this.state.unfilteredList.data[i].subject == subjectId) {
        //         console.log(this.state.unfilteredList.data[i])
        //         filteredArr.push(this.state.unfilteredList.data[i])
        //         console.log(filteredArr)
                
        // } 

        
        
    //} // Closing for loop

    //after for loop setState lesson: filteredArr
    // this.setState({
    //     lessons: filteredArr,
    
        
        
    // })

} //Closing bracket for try

    catch (error) {
        console.log(error)
        this.setState({error: error.message})
    }


} // Closing for Fetch method

    render() {
        
        return (
            
            <div>
                
                    <h2>{ this.state.lessons.title }</h2> 
                    <p>Lesson Content goes here</p>
                    <button>Take Quiz</button>
                
                
                
            </div>
            
        )
    }
}
