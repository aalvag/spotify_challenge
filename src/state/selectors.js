import { createSelector } from "@reduxjs/toolkit";

export const categoriesSelector = createSelector(
  (state) => state.categoryData,
  (categories) => categories
);

export const featuredPlaylistsSelector = createSelector(
  (state) => state.featuredPlaylistsData,
  (featuredPlaylists) => featuredPlaylists
);

export const newRealeasesSelector = createSelector(
  (state) => state.newReleasesData,
  (newRealeases) => newRealeases
);

export const login = createSelector(
  (state) => state.login,
  (login) => login
);
