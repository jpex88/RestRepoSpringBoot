package rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.model.Movie;
import rest.service.MovieService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    MovieService service;

    @RequestMapping(method = RequestMethod.GET)
    public List<Movie> findAll(@RequestParam(required = false) String movie) {
        if (movie != null) {
            return service.findByMovie(movie);
        }
        return service.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Optional<Movie> findById(@PathVariable Long id){return service.findById(id);}

    @RequestMapping(method = RequestMethod.POST)
    public Movie createMovie(@RequestBody Movie movie){
        return service.save(movie);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteById(@PathVariable Long id){service.deleteById(id);}

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Movie updateMovie(@RequestBody Movie movie, @PathVariable Long id){
        return service.save(movie);
    }
}
