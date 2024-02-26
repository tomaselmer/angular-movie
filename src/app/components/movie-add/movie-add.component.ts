import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})  
export class MovieAddComponent {
  movie: Movie = {
    id: 0,
    title: '',
    description: '',
   genre:'',
   director:'',
   releaseDate: new Date()
    // Add more properties as needed
  };
  constructor(private movieService: MovieService) { }
  onSubmit(): void {
    this.movieService.addMovie(this.movie)
      .subscribe({
        next: (newMovie: Movie) => {
          console.log('Movie added successfully:', newMovie);
          // Optionally, you can navigate to a different route or display a success message
        },
        error: (error) => {
          console.error('Error adding movie:', error);
          // Handle error, e.g., display an error message to the user
        }
      });
    }
  }