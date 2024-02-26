import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  imports:[FormsModule],
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie = {
    id: 0,
    title: '',
    director: '',
    description:'',
    genre:'',
    releaseDate: new Date() // Initialize releasedate with the current date or null
    // Add more properties as needed
  };

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(id)
      .subscribe(movie => this.movie = movie);
  }

  onSaveChanges(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe({
        next: (updatedMovie: Movie) => {
          console.log('Movie updated successfully:', updatedMovie);
          // Optionally, you can navigate to a different route or display a success message
        },
        error: (error) => {
          console.error('Error updating movie:', error);
          // Handle error, e.g., display an error message to the user
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
