import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { CartService } from '../services/cart.service';
import { Cart } from '../actions/index';

@Injectable()
export class CartEffects {
    @Effect()
    loadCart$: Observable<Action> = this.actions$
        .ofType(Cart.ActionTypes.LOAD_PRODUCT)
        .debounceTime(300)
        .map((action: Cart.CartAction) => action.payload)
        .switchMap(param => {
            return this.cartService.getProduct()
                .map(payload => {
                    return new Cart.CartSuccessfulAction(payload);
                })
                .catch((e) => {
                    return Observable.of(new Cart.CartFailedAction());
                });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private cartService: CartService) {

    }
}
