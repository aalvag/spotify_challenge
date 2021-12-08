import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  categoryReducer,
  featuredPlaylistsReducer,
  loginReducer,
  newReleseReducer,
} from "./reducers";

const userInfoFromStorage =
  typeof window !== "undefined"
    ? localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
    : null;

const initialState = {
  login: { userInfo: userInfoFromStorage },
};

const reducers = combineReducers({
  login: loginReducer,
  newReleasesData: newReleseReducer,
  featuredPlaylistsData: featuredPlaylistsReducer,
  categoryData: categoryReducer,
});

export const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
});
