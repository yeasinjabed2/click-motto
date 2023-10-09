import { Link } from "react-router-dom";
import "./Hero.scss";
import { FaSearch } from "react-icons/fa";

const Hero = ({ setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.searchKey.value);
  };
  return (
    <div className="container">
      <div className="hero">
        <div className="content">
          <h1>
            Your local source of high quality images and videos directly from
            their creators
          </h1>
          <form onSubmit={submitHandler}>
            <div className="search_area">
              <input
                name="searchKey"
                onBlur={searchHandler}
                type="text"
                className="search_area_box"
                placeholder="Search photos and videos"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
          <p>
            Recommended:
            <span>
              <Link to="#" onClick={() => setSearch("summer")}>
                {" "}
                summer,
              </Link>
              <Link to="#" onClick={() => setSearch("food")}>
                {" "}
                food,
              </Link>
              <Link to="#" onClick={() => setSearch("covid")}>
                {" "}
                covid
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
