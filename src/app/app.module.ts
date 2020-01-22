import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imporstr agregados
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { UsersComponent } from './components/users/users.component';

import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
