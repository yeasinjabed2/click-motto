import {
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineDownload,
  AiFillPlayCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./VideoCard.scss";

const VideoCard = ({ photo }) => {
  return (
    <>
      <div className="photoCard">
        <div className="cover"></div>

        <img src={photo.image} alt="" />

        <div className="top_right">
          <button className="circle_icon">
            <AiFillHeart />
          </button>
          <button className="circle_icon">
            <AiOutlinePlus />
          </button>
        </div>

        <div className="video_icon">
          <AiFillPlayCircle />
        </div>

        <div className="footer">
          <div className="footer_left">
            <p>
              <span>{photo.photographer}</span>
            </p>
          </div>

          <div className="footer_right">
            <Link
              to={photo.video_files[0].link}
              className="circle_icon bg_green"
            >
              <AiOutlineDownload />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
