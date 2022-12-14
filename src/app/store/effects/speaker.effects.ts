import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import * as speakerActions from '../actions/speaker.action';

@Injectable()
export class SpeakerEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getSpeakers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(speakerActions.getSpeakers),
      exhaustMap(() => {
        return this.productService.getProducts().pipe(
          map((res) => {
            return speakerActions.getSpeakersSuccess({speakers: res.results});
          })
        );
      })
    )
  );
}
