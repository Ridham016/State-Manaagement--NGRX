import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState ,Item } from '../store/app.state';
import { addItem, removeItem, updateItem } from '../store/item.actions';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   id!:string;
   name!:string;
  constructor(
    private store: Store<AppState>,
    private toastController: ToastController
    ) {

  }
ngOnInit() {


}
async presentToast(message:string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 1500,
    position: 'bottom'
  });

  await toast.present();
}
  onSubmit(i:number){
    const item = {
      name: this.name,
      id: this.id
    };
    if(i==1){

      this.store.dispatch(addItem({item}));
      this.id=''
      this.name=''
    }

    else if(i==2){
      this.store.dispatch(removeItem({id:item.id}));
      this.id=''
      this.name=''
    }

    else if(i==3){
      this.store.dispatch(updateItem({item}));
      this.id=''
      this.name=''
    }


  }
}
