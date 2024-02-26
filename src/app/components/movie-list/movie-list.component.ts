import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { MovieService } from '../../services/movie.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieEditComponent } from "../movie-edit/movie-edit.component";
import { MovieService } from '../../services/movie-service.service';

@Component({
    standalone: true,
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
    imports: [RouterModule, CommonModule, MovieEditComponent]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
  navigateToAddMovie(): void {
    this.router.navigate(['/movie-add']);
  }
  deleteMovie(id: number): void {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.deleteMovie(id).subscribe(() => {
        this.movies = this.movies.filter(m => m.id !== id);
      });
    }
  }
}
  