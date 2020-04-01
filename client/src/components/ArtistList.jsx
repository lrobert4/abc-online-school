import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <h1>All Artists</h1>
                <div class="ui container three column grid">
                    {this.state.artists.map(artist => (
                        <div class="column" key={artist.id}>
                            <Link to={`/artist/${artist.id}`} ><img src={artist.photo_url} width="300px" alt=""/> <br />{artist.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ArtistList;