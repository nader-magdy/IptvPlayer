import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LiveChannelsCategoriesComponent } from "./components/live-channels-categories/live-channels-categories.component";
import { LiveChannelsCategoryStreamsComponent } from "./components/live-channels-category-streams/live-channels-category-streams.component";
const routes: Routes = [
    {
        path: '', component: LiveChannelsCategoriesComponent
        
    },
    {
        path: 'streams', component: LiveChannelsCategoryStreamsComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LiveChannelsRoutingModule { }