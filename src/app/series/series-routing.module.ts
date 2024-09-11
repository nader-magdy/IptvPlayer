import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeriesCategoriesComponent } from "./components/series-categories/series-categories.component";
import { SeriesInfoComponent } from "./components/series-info/series-info.component";
import { SeriesListComponent } from "./components/series-list/series-list.component";
const routes: Routes = [
    {path:'', component: SeriesCategoriesComponent},
    {path:'series-list', component:SeriesListComponent},
    {path:'info', component:SeriesInfoComponent}
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeriesRoutingModule { }