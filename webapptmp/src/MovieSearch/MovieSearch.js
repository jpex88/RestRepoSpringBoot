import React, { Component } from 'react';
import {getMovieById} from '../Action/MovieAction';
import { Form, FormControl, Button } from 'react-bootstrap';

class MovieSearch extends Component {
    // Initierar tillståndet
    state = {
        searchId: '',
        result: {},
        loading: false
    }


    // preventDefault gör så att sidan inte laddar om undertiden vi hämtar data från databasen/backend
    handleSubmit = (e) => {
        e.preventDefault();
        // Sätter laddning till sann undertiden vi hämtar data
        this.setState({loading: true});
        // Här kallas funktionen getMovieById med state:et searchId som angivits av användaren och then gör så att async inte postar i fel ordning
        getMovieById(this.state.searchId)
            .then(res => this.setState({result: res.data, loading: false }, console.log("Film: ", res.data.moviename)));
    }

    // Uppdaterar rendreringen av hemsidan då någon skriver på den
    handleChange = (e) => {
        this.setState({searchId: e.target.value });
    }

    render() {
        return(
            <section>
                {/* Form skapar ett formulär på form inline (taggarna innanför Form kommer på rad och inte ovanpå varandra),
                 onSubmit säger att Form:en exekveras på en tagg som triggas med typen submit, vilket kallar på funktionen handleSubmit.
                 FormControl specar första taggen med className (för CSS style), typen text-ruta, value kallar på funktionen getMovieById i MovieAction,
                 placeholder specar vad som står om inget är skrivet i textrutan av användaren,
                 onChange kallar på handleChange som hanterar rendreringen då användaren börjar skriva något i textrutan.

                 Det är taggen Button med type=submit som exekverar Formuläret (pga onSubmit i parent-taggen Form) som rendrerar
                 en Knapp med texten Sök på*/}
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl
                        className='todo-input'
                        type="text"
                        value={this.state.searchId}
                        placeholder="Sök film"
                        onChange={this.handleChange}
                    />
                    <Button type='submit' >Sök</Button>
                </Form>
                {/*Här ligger en if-sats som rendrerar resultatet beroende på state:et loading*/}
                {
                    this.state.loading ?
                        <div>Hämtar film...</div>
                        :
                        <MovieInfo movie={this.state.result} />
                }
            </section>
        )
    }
}

// Den här funktionen definierar det hämtade filmnamnet
const MovieInfo = ({movie}) => {
    return(
        <div>
            <div>Titel: {movie.moviename}</div>
        </div>
    )
}

export default MovieSearch;