import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import Category from "../Category/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import "./TopCategories.scss";
import Loading from "../Loading/Loading";
import { Navigation } from "swiper";

const TopCategories = ({ setSearch }) => {
  const { data, isLoading } = useQuery("GET_TOP_CATEGORIES", async () =>
    fetchData(`/collections/featured`)
  );

  if (isLoading) return <Loading />;

  return (
    <div className="top-categories">
      <h2 className="heading_top">Top Categories</h2>

      <div className="slider">
        <Swiper
          spaceBetween={10}
          modules={[Navigation]}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2,
            },

            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 5,
            },
            1024: {
              width: 1024,
              slidesPerView: 5,
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
            },
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          className="mySwiper"
        >
          {data?.data?.collections?.map((cc) => (
            <SwiperSlide key={cc.id}>
              {" "}
              <Category collection={cc} setSearch={setSearch} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="next-btn">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default TopCategories;
