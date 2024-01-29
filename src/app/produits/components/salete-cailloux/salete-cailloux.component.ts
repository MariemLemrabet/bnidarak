import { Component } from '@angular/core';
import { SaleteCaillouxService } from '../../services/salete-cailloux.service';

@Component({
  selector: 'app-salete-cailloux',
  templateUrl: './salete-cailloux.component.html',
  styleUrls: ['./salete-cailloux.component.css']
})
export class SaleteCaillouxComponent {

  datas: any;
  //pour stocker le socite sélectionné
  selectedTerrain: any;
   constructor(private service:SaleteCaillouxService ) {}

   ngOnInit(): void {
    this.getallterain();
  }
  getallterain() {
    this.service. getallterains().subscribe((res: any) => {
      this.datas = res;
      console.log(this.datas);
    });
  }
  showTerrainDetails(Terrain: any) {
    this.selectedTerrain = Terrain;
  }
}
