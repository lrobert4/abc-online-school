import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Subject from './components/SubjectLessList';
import SubjectList from './components/SubjectList';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    <div>
                        <h1>ABC123 Online School</h1>
                        <div>
                            <div><Link to="/">All Artists</Link></div>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path="/" component={SubjectList}/>
                        <Route path="/subject/:id" component={Subject}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;