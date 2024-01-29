import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagasinComponent } from './components/magasin/magasin.component';
import { SaleteCaillouxComponent } from './components/salete-cailloux/salete-cailloux.component';
import { SocietesArchitectureComponent } from './components/societes-architecture/societes-architecture.component';




@NgModule({
  declarations: [
    MagasinComponent,
    SaleteCaillouxComponent,
    SocietesArchitectureComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MagasinComponent,
    SaleteCaillouxComponent,
    SocietesArchitectureComponent,

  ]
})
export class ProduitsModule { }