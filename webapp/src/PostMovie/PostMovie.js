import React from 'react';
import {getAllMovie, postMovieByName, deleteMovieByName} from "../Action/MovieAction";
import {Col, Container, Form, Row} from "react-bootstrap";
import listColor from "./PostMovie.css";

export default class PostMovie extends React.Component {
    // Initiera tillstånd
    constructor(props) {
        super(props);
        this.state = {
            postName: '',
            result: {},
            loading: false,
            movieList: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        getAllMovie()
            .then(res => this.setState({movieList: res.data}));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        postMovieByName(this.state.postName).then(res => this.setState(
            {movieList: this.state.movieList.concat(res.data)}
        ))
    }

    handleChange = (e) => {
        this.setState({postName: e.target.value});
    }

    handleDelete(movieId){
        console.log("Delete movie id", movieId);
        const newMovieList = this.state.movieList.filter(mId => {return mId.id !== movieId});
        this.setState({
            movieList: [...newMovieList]
        })
        deleteMovieByName(movieId).then(res => this.setState(
            {movieList: this.state.movieList.filter(res => res !== movieId)}
        ));
    }

    render() {
        const allMovies = this.state.movieList;
        const showMovies = allMovies.length>0 && allMovies.map(movie => {
            return (
                <section>
                        <li key={movie.id}>
                            <div  className={listColor.flexRow}>
                                <div>{movie.moviename} and id: {movie.id} </div>
                                <div><button onClick={(e) =>
                                    this.handleDelete(movie.id)} type="button" className="removeButton">X</button>
                                </div>
                            </div>
                        </li>
                </section>
            )
        })

        return(
            <section>
                <Form inline onSubmit={this.handleSubmit}>
                    <input
                        className='FormControlPostMovie'
                        type="text"
                        value={this.state.postName}
                        placeholder="Filmnamn"
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Lägg till</button>
                </Form>
                {showMovies}
            </section>
        );
    }
}