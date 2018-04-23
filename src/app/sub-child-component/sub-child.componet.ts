import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})

export class SubChildComponent {
  data;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.data = state.data;
  }
}
