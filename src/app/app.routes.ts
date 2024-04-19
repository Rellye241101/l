import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


export const routes: Routes = [
    {title: "Portafolio 2 | home", path:'', component: HeaderComponent},
    {title: "Portafolio 2 | home", path:'home', component: HeaderComponent},
    {title: "Portafolio 2 | about",path:'about', component: AboutComponent},
    {title: "Portafolio 2 | gallery",path:'gallery', component: GalleryComponent},
    {title: "Portafolio 2 | testimonials",path:'testimonials', component: TestimonialsComponent},

];
