// app.component.ts
import { Component } from '@angular/core';
import { MovieService } from './services/movie-service.service'; // Import your MovieService
import { Movie } from './models/movie'; // Import your Movie interface
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports:[RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[] = []; // Initialize movies array
  title = 'movies';
  constructor(private movieService: MovieService, private router: Router) { }
  navigateToMovieList() {
    this.router.navigateByUrl('/movie-list');
  }
  ngOnInit() {
    this.fetchMovies(); // Fetch movies when component initializes
  }

  fetchMovies() {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  onSaveChanges(updatedMovie: Movie) {
    // Handle saving changes to the movie
    console.log('Updated Movie:', updatedMovie);
    // You can perform actions like updating the movie in your database here
  }
  
}
