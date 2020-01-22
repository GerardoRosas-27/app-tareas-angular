import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Notes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  selectedNotes: Notes;
  notes: Notes[];
  readonly URL_API = 'http://localhost:4000/api/notes';

  constructor(private http: HttpClient) { 
    this.selectedNotes = new Notes();
  }

  getNotes(){
    return this.http.get(this.URL_API);
  }
  getNote(Notes: Notes){
    return this.http.get(this.URL_API + '/' + Notes._id );
  }
  postNotes(Notes: Notes){
    return this.http.post(this.URL_API, Notes);
  }
  putNotes(Notes: Notes){
    return this.http.put(this.URL_API + '/' + Notes._id, Notes )
  }
  deleteNotes(_id: string){
    return this.http.delete(this.URL_API + '/' + _id);
  }



}
