import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  addObjectToFavourites(object){
    let listOfFavourites=this.getObjectsFromFavourites();
    if(listOfFavourites===null){
      listOfFavourites=[];
    }
    listOfFavourites.push(object);
    localStorage.setItem('favourites', JSON.stringify(listOfFavourites));
  }

  getObjectsFromFavourites(){
    return JSON.parse(localStorage.getItem('favourites'));
  }

  deleteFavourite(index){
    let listOfFavourites=this.getObjectsFromFavourites();
    listOfFavourites.splice(index,1);
    localStorage.setItem('favourites', JSON.stringify(listOfFavourites));
  }

  lookupFavourite(object){
    let listOfFavourites=this.getObjectsFromFavourites();
    return listOfFavourites.find(x => x.name === object.name && x.url === object.url)
  }


}
