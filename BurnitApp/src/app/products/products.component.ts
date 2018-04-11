import { Component, OnInit } from '@angular/core';
import { ITechnique} from './technique';
import {TechniqueServiceService} from '../services/technique-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
    filteredTechniques: any[];
    recipes: any;
  // Toggle image & Instructions and subscribe to RESTful API 

  imageWidth: number = 150;
  imageHeight: number = 80;
  imageMargin: number = 2;
  showImage: boolean = true;
  showInstructions: boolean = false;
  errorMessage: string;
  
  _listFilter: string;

  get listFilter(): string{
      return this._listFilter;
  }
  
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredTechniques = this.listFilter ? this.performFilter(this.listFilter):this.techniques;
  }
  filteredTechnique: ITechnique [];
  techniques: ITechnique[];



  //to be used in RESTful API to MongoDB database
  constructor(private _techniqueService:TechniqueServiceService) {}

  performFilter(filterBy:string):ITechnique[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.techniques.filter((technique:ITechnique)=> technique.techniqueName.toLocaleLowerCase().indexOf(filterBy) != -1);
}

  toggleImage():void{
  this.showImage = !this.showImage;
}
toggleInstructions(){
    this.showInstructions = !this.showInstructions;
  }

//used in RESTful API
public ngOnInit():void {
    this._techniqueService.getTechniques().subscribe(techniques =>{
        this.techniques = techniques
        this.filteredTechniques = this.techniques;
    },
    error => this.errorMessage = <any>error);
    }
}
