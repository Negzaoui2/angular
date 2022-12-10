import { Component ,OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html'
})
export class VetementsComponent implements OnInit{
  vetements : Vetement[]; //un tableau de chînes de caractères

constructor () {
  this.vetements = [{idvetements:1,nomVetement:"maryoul",prixVetement:188,dateCreation:new Date("01/14/2011")}];

}
ngOnInit():void{

}
}
