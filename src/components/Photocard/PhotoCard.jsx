import { AiOutlineDownload, AiOutlinePlus } from "react-icons/ai";
import { IoBookmarksOutline } from "react-icons/io5";
import avator from "../../assets/avator.png";
import "./PhotoCard.scss";

const PhotoCard = ({ photo }) => {
  const download = (e, name) => {
    fetch(e, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${name}.jpg`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="photoCard">
        <div className="cover"></div>
        <img src={photo.src.medium} alt="" />
        <div className="top_right">
          <button className="circle_icon">
            <IoBookmarksOutline />
          </button>
          <button className="circle_icon">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="footer">
          <div className="footer_left">
            <img src={avator} alt="" />
            <p>
              <span>{photo.photographer}</span>
            </p>
          </div>
          <div className="footer_right">
            <button
              onClick={() => download(photo.src.original, photo.alt)}
              className="circle_icon bg_green"
            >
              <AiOutlineDownload />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
