import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { addItem, removeItem, updateItem } from './item.actions';
import { Item } from './app.state';

export const itemAdapter = createEntityAdapter<Item>();

export interface ItemState extends EntityState<Item> {}

export const initialState: ItemState = itemAdapter.getInitialState({});

export const itemReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => itemAdapter.addOne(item, state)),
  on(removeItem, (state, { id }) => itemAdapter.removeOne(id, state)),
  on(updateItem,(state,{item})=>itemAdapter.updateOne({ id: item.id, changes:{name:item.name} }, state))
);
