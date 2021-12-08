import { createReducer } from "@reduxjs/toolkit";
import {
  getCategories,
  getFeaturedPlaylists,
  getNewReleases,
  signIn,
} from "./actions";

const initialStateUser = {
  loading: false,
  error: false,
  userInfo: {},
};
const initialState = {
  loading: false,
  error: false,
  data: {},
};

export const loginReducer = createReducer(initialStateUser, (builder) => {
  builder.addCase(signIn.pending, (state, action) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(signIn.fulfilled, (state, action) => {
    state.loading = false;
    state.error = false;
    state.userInfo = action.payload;
  });
  builder.addCase(signIn.rejected, (state, action) => {
    state.loading = false;
    state.error = true;
    state.userInfo = action.payload;
  });
});

export const newReleseReducer = createReducer(initialState, (builder) => {
  builder.addCase(getNewReleases.pending, (state) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(getNewReleases.fulfilled, (state, action) => {
    state.loading = false;
    state.error = false;
    state.data = action.payload;
  });
  builder.addCase(getNewReleases.rejected, (state, action) => {
    console.log(action);
    state.loading = false;
    state.error = true;
    state.data = action.error;
  });
});

export const featuredPlaylistsReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(getFeaturedPlaylists.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getFeaturedPlaylists.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(getFeaturedPlaylists.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.data = action.error;
    });
  }
);

export const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCategories.pending, (state, action) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(getCategories.fulfilled, (state, action) => {
    state.loading = false;
    state.error = false;
    state.data = action.payload;
  });
  builder.addCase(getCategories.rejected, (state, action) => {
    state.loading = false;
    state.error = true;
    state.data = action.error;
  });
});
