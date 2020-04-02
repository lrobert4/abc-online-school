import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import HeaderImg from './images/math.jpg'

class Artist extends Component {

    state = {
            artist: {},
            songs: [],
    }

    componentDidMount() {
        const artistId = this.props.match.params.id;
        this.fetchArtist(artistId)
    }

    fetchArtist = async (artistId) => {
        try {
            const artistResponse = await axios.get(`/api/v1/artists/${artistId}/?format=json`)
            this.setState({
                artist: artistResponse.data,
                songs: artistResponse.data.songs,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <img src={HeaderImg} className="headerImg" alt="" />
                <h1>{this.state.artist.name}</h1>
                
                <Container>
                    <Row>
                        {this.state.songs.map(song => (
                            <Col>
                                <div key={song.id}>
                                    <h2>{song.title}</h2> 
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Artist;