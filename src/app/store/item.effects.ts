import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addItem, removeItem,updateItem} from './item.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ItemEffects {
  addItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addItem),
        tap(({ item }) => {
          console.log(`Item added: ${item.name}`);
        })
      ),
    { dispatch: false }
  );

  removeItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeItem),
        tap(({ id }) => {
          console.log(`Item removed: ${id}`);
        })
      ),
    { dispatch: false }
  );


  updateItem$=createEffect(
      ()=>
      this.actions$.pipe(
        ofType(updateItem),
        tap((item)=>{
          console.log(`Item Update: ${item}`)
        })
      ),
      {dispatch:false}
    );


  constructor(private actions$: Actions) {}
}
