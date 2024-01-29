import { Component } from '@angular/core';
import { SocietesService } from '../../services/societes-architecture.service';


@Component({
  selector: 'app-societes-architecture',
  templateUrl: './societes-architecture.component.html',
  styleUrls: ['./societes-architecture.component.css']
})
export class SocietesArchitectureComponent {
  datas: any;
  //pour stocker le socite sélectionné
  selectedSociete: any;
   constructor(private service: SocietesService) {}

   ngOnInit(): void {
    this.getsocite();
  }
  getsocite() {
    this.service. getAllSocietes().subscribe((res: any) => {
      this.datas = res;
      console.log(this.datas);
    });
  }
  showsociteDetails(socit: any) {
    this.selectedSociete = socit;
  }

}
