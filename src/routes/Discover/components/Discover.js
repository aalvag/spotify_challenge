import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getFeaturedPlaylists,
  getNewReleases,
  signIn,
} from "../../../state/actions";
import {
  categoriesSelector,
  featuredPlaylistsSelector,
  login,
  newRealeasesSelector,
} from "../../../state/selectors";

const Discover = () => {
  const dispatch = useDispatch();

  const {
    data: { categories },
  } = useSelector(categoriesSelector);

  const {
    data: { playlists },
  } = useSelector(featuredPlaylistsSelector);

  const {
    data: { albums },
  } = useSelector(newRealeasesSelector);

  const { userInfo } = useSelector(login);

  React.useEffect(() => {
    dispatch(signIn());
  }, [dispatch]);

  React.useEffect(() => {
    if (userInfo) {
      dispatch(getNewReleases());
      dispatch(getFeaturedPlaylists());
      dispatch(getCategories());
    }
  }, [dispatch, userInfo]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={albums?.items}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={playlists?.items}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories?.items}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
