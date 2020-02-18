package rest.model;

import javax.persistence.*;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String moviename;

    public Movie() {
    }

    public Movie(String moviename){

        this.moviename = moviename;
    }

    public Movie(Long id, String moviename){
        this.id = id;
        this.moviename = moviename;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMoviename() {
        return moviename;
    }

    public void setMoviename(String moviename) {
        this.moviename = moviename;
    }
}
