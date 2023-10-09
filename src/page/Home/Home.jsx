import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import SearchResult from "../../components/SearchResult/SearchResult";
import VideoSearchResult from "../../components/SearchResult/VideoSearchResults";
import TopCategories from "../../components/TopCategories/TopCategories";
import "./Home.scss";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [contentType, setContentType] = useState("photos");

  return (
    <div>
      <Hero search={search} setSearch={setSearch} />
      <div className="container">
        <div className="up_content">
          <div className="curtesy">
            <p>
              <b>Photo Of The Day </b> by{" "}
              <a href="/">
                <b>Unsplash</b>
              </a>
            </p>
          </div>
          <div className="content_top_over">
            <TopCategories setSearch={setSearch} />
            <div className="filter">
              <div className="links">
                <Link onClick={() => setContentType("photos")}>All</Link>
                <Link
                  className={contentType === "photos" ? "active" : ""}
                  onClick={() => setContentType("photos")}
                >
                  Photos
                </Link>
                <Link
                  className={contentType === "videos" ? "active" : ""}
                  onClick={() => setContentType("videos")}
                >
                  Videos
                </Link>
                <Link to="#">Freebie</Link>
                <Link to="#">360</Link>
              </div>
              <div className="sort">
                <select name="sort" id="sort">
                  <option value="popular">Recommended</option>
                  <option value="newest">Most Recent</option>
                  <option value="oldest">Most Viewed</option>
                  <option value="oldest">Most Downloaded</option>
                  <option value="oldest">Most Appreciated</option>
                </select>
              </div>
            </div>
            {contentType === "photos" ? (
              <SearchResult search={search} />
            ) : (
              <VideoSearchResult search={search} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
