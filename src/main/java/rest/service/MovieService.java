package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.database.MovieRepository;
import rest.model.Movie;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class MovieService {
    @Autowired
    MovieRepository repository;

    public List<Movie> findAll() {
        return StreamSupport.stream(repository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Optional<Movie> findById(Long id){
        return repository.findById(id);
    }

    public Movie save(Movie movie){
        return repository.save(movie);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }

    public List<Movie> findByMovie(String movie) {
        return repository.findAllByMoviename(movie);
    }
}
