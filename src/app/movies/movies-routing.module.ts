import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesCategoriesComponent } from "./components/movies-categories/movies-categories.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MovieInfoComponent } from "./components/movie-info/movie-info.component";
const routes: Routes = [
    {path:'', component: MoviesCategoriesComponent},
    {path:'movies-list', component:MoviesListComponent},
    {path:'info', component:MovieInfoComponent}
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }