import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, 
  HeaderComponent, AboutComponent,TestimonialsComponent, 
  GalleryComponent, NavComponent,HttpClientModule ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';

  constructor(public configService: ConfigService ){

  }
}
