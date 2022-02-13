import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ITEMS_REQUEST, DETAILS_REQUEST } from '../actions/actionTypes'
import {
  itemsRequestFailure,
  itemsRequestSuccess,
  detailsRequestFailure,
  detailsRequestSuccess
} from '../actions/index';

export const itemsRequestEpic = action$ => action$.pipe(
  ofType(ITEMS_REQUEST),
  switchMap(() => ajax.getJSON('http://localhost:7070/api/services').pipe(
    map(o => {
      if (o) {
        return itemsRequestSuccess(o);
      }
    }),
    catchError(e => of(itemsRequestFailure(e))),
  )),
);

export const detailsRequestEpic = action$ => action$.pipe(
  ofType(DETAILS_REQUEST),
  map(o => o.payload.id),
  switchMap(o => ajax.getJSON(`http://localhost:7070/api/services/${o}`).pipe(
    map(o => {
      if (o) {
        return detailsRequestSuccess(o);
      }
    }),
    catchError(e => of(detailsRequestFailure(e))),
  )),
);
