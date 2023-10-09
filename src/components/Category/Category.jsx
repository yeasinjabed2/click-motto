import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import Loading from "../Loading/Loading";
import "./Category.scss";

const Category = ({ collection, setSearch }) => {
  const fetchName = `GET_COLLECTION_${collection.id}`;
  const { data, isLoading } = useQuery(fetchName, async () =>
    fetchData(`/collections/${collection.id}?per_page=1`)
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <div
        onClick={() => setSearch(collection.title)}
        className="categoryCard"
        style={{
          backgroundImage: `url(${data?.data?.media[0]?.src?.landscape})`,
        }}
      >
        <h2>{collection.title}</h2>
        <div className="cover"></div>
      </div>
    </>
  );
};

export default Category;
