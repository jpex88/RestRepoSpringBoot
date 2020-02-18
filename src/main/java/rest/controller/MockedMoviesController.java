package rest.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rest.model.Movie;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/mocked/movie")
public class MockedMoviesController {

    private List<Movie> movies = List.of(
            new Movie(1L, "Starwars"),
            new Movie(2L, "Dukes of Hazard"),
            new Movie(3L, "testMovie")
    );

    @RequestMapping(method = RequestMethod.GET)
    public List<Movie> getMovies() {return movies;}

    @RequestMapping(method = RequestMethod.GET, value = "/ping")
    public String ping() {return "Hello world!"; }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Optional<Movie> findById(@PathVariable Long id){
        return movies
                .stream()
                .filter(movie -> movie.getId().equals(id))
                .findFirst();
    }
}
