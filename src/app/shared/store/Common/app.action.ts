import { createAction, props } from "@ngrx/store";

export const SHOW_ALERT = '[app] show alert';
export const EMPTY_ACTION = '[app] empty';
export const LOADING = '[app] open loading'
//export const LOAD_DATA_SUCCESS = '[app] load data success'

export const loading        = createAction(LOADING)
export const showalert      = createAction(SHOW_ALERT, props<{message: string, resulttype:string}>())
export const emptyaction    = createAction(EMPTY_ACTION)