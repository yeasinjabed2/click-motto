import "./FeaturedAuthor.scss";

const FeaturedAuthor = () => {
  return (
    <div className="featured_authors">
      <h3>Featured Artist</h3>
      <div className="single-featured-author">
        <div className="author-img">
          <img
            src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="author-info">
          <h4>Momotaj</h4>
          <p>5M Views</p>
        </div>
      </div>
      <div className="single-featured-author">
        <div className="author-img">
          <img
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
            alt=""
          />
        </div>
        <div className="author-info">
          <h4>Asif Akbar</h4>
          <p>5M Views</p>
        </div>
      </div>
      <div className="single-featured-author">
        <div className="author-img">
          <img
            src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="author-info">
          <h4>Sharif</h4>
          <p>1M Views</p>
        </div>
      </div>
      <div className="single-featured-author">
        <div className="author-img">
          <img
            src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="author-info">
          <h4>Royeler</h4>
          <p>2M Views</p>
        </div>
      </div>
      <div className="single-featured-author">
        <div className="author-img">
          <img
            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="author-info">
          <h4>John Doe</h4>
          <p>5M Views</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAuthor;
