import { combineReducers } from "redux";
import user from './user'
import album from './album'
import gender from './gender'
import music from './music'

export const rootReducer = combineReducers({
  user,
  album,
  gender,
  music
})