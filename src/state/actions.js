import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "querystring";
import config from "../config";

const { api } = config;
console.log(api);

export const signIn = createAsyncThunk("login", async () => {
  const res = await axios.post(
    api.authUrl,
    qs.stringify({
      grant_type: "client_credentials",
      client_id: api.clientId,
      client_secret: api.clientSecret,
    })
  );
  localStorage.setItem("userInfo", JSON.stringify(res.data));
  return res.data;
});

export const getNewReleases = createAsyncThunk(
  "newReleases",
  async (payload, { getState }) => {
    const { login } = getState();
    const res = await axios.get(`${api.baseUrl}/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${login.userInfo.access_token}`,
      },
    });
    return res.data;
  }
);

export const getFeaturedPlaylists = createAsyncThunk(
  "featuredPlaylists",
  async (payload, { getState }) => {
    const { login } = getState();
    const res = await axios.get(`${api.baseUrl}/browse/featured-playlists`, {
      headers: {
        Authorization: `Bearer ${login.userInfo.access_token}`,
      },
    });
    return res.data;
  }
);

export const getCategories = createAsyncThunk(
  "categories",
  async (payload, { getState }) => {
    const { login } = getState();
    const res = await axios.get(`${api.baseUrl}/browse/categories`, {
      headers: {
        Authorization: `Bearer ${login.userInfo.access_token}`,
      },
    });
    return res.data;
  }
);
