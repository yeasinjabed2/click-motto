import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchData } from "../../utils/fetchData";
import PhotoCard from "../Photocard/PhotoCard";

import FeaturedAuthor from "../FeaturedAuthor/FeaturedAuthor";
import Loading from "../Loading/Loading";

const SearchResult = ({ search }) => {
  const searchQuery = `/search?query=${search}`;
  const popularQuery = `/popular?per_page=15`;
  const url = search ? searchQuery : popularQuery;

  const { data, isLoading } = useQuery(
    "searchResult" + search,
    async () => await fetchData(url)
  );

  if (isLoading && !data) return <Loading />;

  if (data.data.photos.length === 0)
    return <h1 style={{ paddingBottom: "500px" }}>No result found</h1>;

  return (
    <div className="container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          <PhotoCard photo={data?.data?.photos[0]} />
          <PhotoCard photo={data?.data?.photos[1]} />
          <FeaturedAuthor />
          {data?.data?.photos
            ?.slice(2, data?.data?.photos?.length - 1)
            .map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default SearchResult;
