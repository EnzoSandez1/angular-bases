import { Component } from "@angular/core";



@Component({
  selector: 'app-list-hero',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  public heroName : string[] = ['Spiderman', 'Hulk' , 'She Hulk' , 'Thorn' ];
  public deletedHero? : string;


removeLastHero(): void{
  this.deletedHero=this.heroName.pop();

}


}
