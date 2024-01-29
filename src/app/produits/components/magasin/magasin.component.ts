import { Component } from '@angular/core';
import { MagasinService } from '../../services/magasin.service';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent {
  datas: any;
  //pour stocker le socite sélectionné
  selectedMagasin: any;
   constructor(private service: MagasinService) {}

   ngOnInit(): void {
    this.getsocite();
  }
  getsocite() {
    this.service. getallmagasin().subscribe((res: any) => {
      this.datas = res;
      console.log(this.datas);
    });
  }
  showMagasinDetails(magasin: any) {
    this.selectedMagasin = magasin;
  }

}
