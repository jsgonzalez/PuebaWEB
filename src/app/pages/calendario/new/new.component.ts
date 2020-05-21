import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario.service';
import { Agenda } from '../model/agenda';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


  agenda : Agenda;

  constructor(
    private calendarioService : CalendarioService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private datePipe : DatePipe
  ) {

  }


  ngOnInit() {

    this.agenda = new Agenda();

    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log(id);
      if (id) {
        this.calendarioService.get(id).subscribe( agenda => {
          console.log("Agenda");
          console.log(agenda);

          this.agenda = agenda;

          console.log("Dia");
          console.log(this.agenda.iniciaDia)
        });
      }
    });
  }

  create(){
    this.calendarioService.createAgenda(this.agenda).subscribe( result => {
      swal('Test','Registro creado correctamente','success');
      this.router.navigate(['/']);
    }, error => swal('Test','Error', 'error') );
  }

  update(id, agenda){
    this.calendarioService.updateAgenda(id, agenda).subscribe( result => {
      swal('Test','Registro actualizado correctamente','success');
      this.router.navigate(['/']);
    }, error => swal('Test','Error', 'error') );
  }

}
