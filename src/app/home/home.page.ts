import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState ,Item } from '../store/app.state';
import { addItem, removeItem, updateItem } from '../store/item.actions';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   id!:string;
   name!:string;
list:any=[]
dataArray:any=[]
  constructor(private store: Store<AppState>) {

  }
ngOnInit() {
  this.store.select(state => state.items).subscribe(items => {
    console.log(items);
    this.list=items['entities'];
    this.dataArray=Object.keys(this.list).map(key=>{
      return{
        name:this.list[key]['name'],
        id:this.list[key]['id']
      }
    });
    console.log(this.dataArray)
  });

}
  onSubmit(i:number){
    const item = {
      name: this.name,
      id: this.id
    };
    if(i==1){

      this.store.dispatch(addItem({item}));
    }

    else if(i==2){
      this.store.dispatch(removeItem({id:item.id}));
    }

    else if(i==3){
      this.store.dispatch(updateItem({item}));
    }


  }
}
