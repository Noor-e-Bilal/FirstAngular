import { GlitchSliderComponent } from './../main/glitch-slider/glitch-slider.component';
import { WaterSliderComponent } from './../main/water-slider/water-slider.component';
import { ParticleSliderComponent } from './../main/particle-slider/particle-slider.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from '../main/main.component';
import { UsersService } from './../users/users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { IndexComponent } from '../index/index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UsersComponent } from '../users/users.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    IndexComponent,
    ToolbarComponent,
    UsersComponent,
    PreloaderComponent,
    MainComponent,
    FooterComponent,
    ParticleSliderComponent,
    WaterSliderComponent,
    GlitchSliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UsersService],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}
