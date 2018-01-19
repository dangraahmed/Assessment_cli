import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import * as fromStore from './ngrx/index';

import { Cart } from './actions/index';
import { ICartState, IProduct } from './index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public listOfProduct: any;
  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromStore.IAppState>) { }

  ngOnInit() {
    this.store.select(fromStore.getProduct)
      .takeUntil(this._ngUnsubscribe)
      .subscribe(p => {
        this.store.dispatch(new Cart.CartAction());
        if (p !== undefined) {
          this.listOfProduct = p;
        }
      });
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
