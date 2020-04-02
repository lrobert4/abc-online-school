import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ArtistDetail from './components/ArtistDetail';
import ArtistList from './components/ArtistList';
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
                      <Route exact path="/" component={ArtistList}/>
                      <Route path="/artist/:id" component={ArtistDetail}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;