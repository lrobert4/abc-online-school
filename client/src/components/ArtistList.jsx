import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class ArtistList extends Component {
    state = {
        error: '',
        artists: []
    }

    componentDidMount(){
        this.fetchArtists();
    }

    fetchArtists = async () => {
        try {
            const res = await axios.get('/api/v1/artists/?format=json');
            this.setState({artists: res.data});
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
                        {this.state.artists.map(artist => (
                            <Col>
                                <div key={artist.id}>
                                    <Link to={`/artist/${artist.id}`} ><img src={artist.photo_url} className="img-size" alt=""/> <br />{artist.name}</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ArtistList;