import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "esto es angular";
  user = "gerardo";
  dataUser = [
    {'nombre': 'gerardo','apellido': 'rosas', 'edad': '27'},
    {'nombre': 'eduardo','apellido': 'carmona', 'edad': '22'}
   ];
}
