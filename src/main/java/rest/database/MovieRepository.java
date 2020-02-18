package rest.database;

import org.springframework.data.repository.CrudRepository;
import rest.model.Movie;

import java.util.List;

public interface MovieRepository extends CrudRepository<Movie, Long> {
    List<Movie> findAllByMoviename(String movie);
}
