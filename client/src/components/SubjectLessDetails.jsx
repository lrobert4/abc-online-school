import React, { Component } from 'react'
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

    this.fetchLesson(lessonId)
    
}

//fetch info from api
fetchLesson = async (lessonId) => {
    console.log(lessonId)
    //try
    try {
        

        //axios call to get specific lessonId clicked on from SeubjectLessList view
        const lessonResponse = await axios.get(`/api/v1/lessons/${lessonId}/?format=json`)
        
        console.log(lessonResponse)
        //setting your state
        this.setState({
            lessons: lessonResponse
        });
        
        

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
                    <button>View Class Notes</button>
                
                
                
            </div>
            
        )
    }
}
