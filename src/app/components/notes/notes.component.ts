import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NgForm } from '@angular/forms';
import { Notes } from 'src/app/models/notes';

//se declara una variable para usar los toast de materialize
declare var M: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit() {
    this.listNotes();
  }
  listNotes(){
    this,this.notesService.getNotes()
    .subscribe(res => {
      console.log(res);
      this.notesService.notes = res as Notes[];
    });
  }

  addNotes(form: NgForm) {
    //Si hya un _id se actualizan los datos
    if(form.value._id){
      this.notesService.putNotes(form.value)
    .subscribe(res =>{
      console.log(res);
      if(res['ms'] == "success"){
        this.clearForm(form);//limpiar el formulario
        M.toast({html: 'La nota se Actualizo'});
        this.listNotes();  
      }else{
        M.toast({html: 'Error la nota no se Actualizo'});
      }

     });
    }else{
    //si no existe el _id se guardan los datos
    console.log(form.value);
    this.notesService.postNotes(form.value)
    .subscribe(res =>{
      console.log(res);
        if(res['ms'] == "success"){
          this.clearForm(form);
          M.toast({html: 'La nota se Guardo'});
          this.listNotes();  
        }else{
          M.toast({html: 'Error la nota no se Guardo'});
        }

     });

    }
  }
  //se mandan los datos al formulario 
  editNotes(notes: Notes){
    this.notesService.selectedNotes = notes;
  }
//se limpia el formulario
  clearForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.notesService.selectedNotes = new Notes();
    }
  }
  //eliminar datos
  deleteNotes(notes: Notes){
    if(confirm('Estas seguro de eliminar este dato?')){
      this.notesService.deleteNotes(notes._id)
      .subscribe(res =>{
        if(res['ms'] == "success"){
          M.toast({html: 'La nota se elimino'});
          this.listNotes();  
        }else{
          M.toast({html: 'Error la nota no se elimino'});
        }
      });
    }
  }

}
