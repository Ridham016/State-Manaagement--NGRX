
import { createAction, props } from '@ngrx/store';
import { Item } from './app.state';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ item: Item }>()
);

export const removeItem = createAction(
  '[Item] Remove Item',
  props<{ id: string }>()
);
export const updateItem=createAction(
  '[Item] Update Item',
  props<{item:Item}>()
);
