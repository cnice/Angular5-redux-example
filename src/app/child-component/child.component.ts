import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  counter: number;
  data;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
    this.data = state.data;
  }
}
