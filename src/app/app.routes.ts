import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
;

 export const routes: Routes = [
	{ path: 'components', redirectTo: 'components/movie-list', pathMatch: 'full'},
  	{ path: 'movie-list', component: MovieListComponent },
	{path: 'movie-add',component: MovieAddComponent},
	{path:'components/movie-edit/:movieId', component: MovieEditComponent}
  ];
