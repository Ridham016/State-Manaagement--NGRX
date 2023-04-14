import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState ,Item } from '../store/app.state';
import { addItem, removeItem, updateItem } from '../store/item.actions';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.page.html',
  styleUrls: ['./list-data.page.scss'],
})
export class ListDataPage implements OnInit {
  id!:string;
  name!:string;
list:any=[]
dataArray:any=[]

  constructor(private store: Store<AppState>) { }

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

}
