import { NgModule } from '@angular/core';
import { HeroCompanent } from './hero/hero.component';
import { ListComponent } from './lista/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:[
    HeroCompanent,
    ListComponent
  ],
  exports:[
    HeroCompanent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]

})
export class HeroModule{

}
