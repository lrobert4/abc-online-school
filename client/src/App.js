import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Subject from './components/SubjectLessList';
import SubjectList from './components/SubjectList';
import SubjectLessDetails from './components/SubjectLessDetails'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NoteList from './components/NoteList';



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    <div>
                        <h1>ABC123 Online School</h1>
                        <div>
                            <div><Link to="/">Back to Dashboard</Link></div>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path="/" component={SubjectList}/>
                        <Route path="/subject/:id" component={Subject}/>
                        <Route path="/lessons/:id" component={SubjectLessDetails}/>
                        <Route path="/notes/" component={NoteList}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;