import { Component } from '@angular/core';
import { fa1,fa2,fa3,fa4,fa5,fa6,fa7,fa8,fa9} from '@fortawesome/free-solid-svg-icons';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { ChallengeService } from '../../services/challenge.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-mnu-acciones',
  templateUrl: './mnu-acciones.component.html',
  styleUrls: ['./mnu-acciones.component.scss'],
})
export class MnuAccionesComponent {
  active = false;
  showResponse = false;
  title = 'Seleccione una opcion';
  fa1=fa1;
  fa2=fa2;
  fa3=fa3;
  fa4=fa4;
  fa5=fa5;
  fa6=fa6;
  fa7=fa7;
  fa8=fa8;
  fa9=fa9;
  mensajeRespuesta: string = '';
  dataObject: any;

  constructor(
    private apiChallenge: ChallengeService,
    private SpinnerService: NgxSpinnerService
  ) { }

  mouseUp(txt: string = '') {
    this.title = txt;
  }

  toggleMenu() {
    this.active = !this.active;
  }

  mensaje(msg: string, icono: SweetAlertIcon,title_modal: string) {
    Swal.fire({
      title: title_modal,
      icon: icono,
      html: msg,
      showCloseButton: true
    });
    this.SpinnerService.hide();
  }

  show(op?: number) {
    this.SpinnerService.show();

    switch (op) {
      case 1:
        this.apiChallenge.getContestadas().subscribe((data) => {
          let txtHtml: string = '<i class="fa fa-check-circle"></i> ' + data.data.answered?.toLocaleString() + ' - Contestadas <i class="fa fa-window-close"></i> ' + data.data.notanswered?.toLocaleString() + ' -Sin Contestar';
          this.mensaje(txtHtml, 'success','<strong>Constestadas / Sin Contestar</strong>');
        });
        break;
      case 2:
        this.apiChallenge.getTopReputation().subscribe((data) => {
          let html: string = `
          <table>
          <tr><td><img width="80px" src="${data.data.owner?.profile_image}"/></td><td>${data.data.title}</td></tr>
          <tr><td colspan="2">Reputacion:${data.data.owner?.reputation}</td></tr></table>`;
          this.mensaje(html, 'success','<strong>Mayor Reputacion </strong>');
        });
        break;

      case 3:
        this.apiChallenge.getLessViews().subscribe((data) => {
          let html: string = `
          <table>
          <tr><td><img width="80px" src="${data.data.owner?.profile_image}"/></td><td>${data.data.title}</td></tr>
          <tr><td colspan="2">Menor numero de vistas :${data.data.view_count}</td></tr></table>`;
          this.mensaje(html, 'success','<strong>Meenos Vistas</strong>')
        });
        break;
      case 4:
        this.apiChallenge.getOlderNew().subscribe((data) => {
          this.dataObject = data;
        });
        break;
      case 5:
        this.apiChallenge.getConsole().subscribe((data) => {
          console.table(data);
        });
        break;
      case 6:
        this.apiChallenge.getAeropuerto()
        .subscribe(data=>{
          let html: string =`<strong>${data.data[1]}</strong>`
          this.mensaje(html, 'success','<strong>Aeropuerto </strong>');
        });
        break;
      case 7:
        this.apiChallenge.getAerolinea()
        .subscribe(data=>{
          let html: string =`<strong>${data.data[1]}</strong>`
          this.mensaje(html, 'success','<strong>Aerolinea </strong>');
        });
        break;
      case 8:
        this.apiChallenge.getDia()
        .subscribe(data=>{
          let html: string =`<strong>${data.data[1]}</strong>`
          this.mensaje(html, 'success','<strong>fecha </strong>');
        });
        break;
      case 9:
        this.apiChallenge.getAfluencia()
        .subscribe(data=>{
        console.log(data);
        });
        break;

      }
    }
}
