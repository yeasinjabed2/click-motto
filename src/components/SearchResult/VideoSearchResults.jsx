import React from 'react';
import { useQuery } from 'react-query';

import { fetchData } from '../../utils/fetchData';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import VideoCard from '../Videocard/VideoCard';

const VideoSearchResult = ({ search }) => {
    const url = search ? `https://api.pexels.com/videos/search?query=${search}` : `https://api.pexels.com/videos/popular?per_page=15`

    const { data, isLoading } = useQuery('searchResult' + search + "video", async () => {
        return await fetchData(url)
    });


    isLoading && <h1>Loading...</h1>

    return (
        <div className="container">

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="16px">
                    {data?.data?.videos?.map((photo) =>
                        <VideoCard key={photo.id} photo={photo} />
                    )}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default VideoSearchResult;