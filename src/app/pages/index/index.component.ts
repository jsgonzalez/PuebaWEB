import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario/calendario.service';
import { Agenda } from '../calendario/model/agenda';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  agendas : Agenda[];

  constructor(
    private calendarioService: CalendarioService
  ) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.calendarioService.getCalendario().subscribe( agendas => {
      console.log("Agendas");
      console.log(agendas);
      this.agendas = agendas;

    }, error => console.log(error));
  }

  delete(id){
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar este registro?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.calendarioService.delete(id).subscribe(
          () => {

            swal(
              'Test',
              `Eliminado con éxito.`,
              'success' )
            document.location.reload();
          }
        )

      }
    });
  }

}
