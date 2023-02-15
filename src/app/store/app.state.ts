import { EntityState } from '@ngrx/entity';

export interface AppState {
  items: EntityState<Item>;
}

export interface Item {
  id: string;
  name: string;

}
