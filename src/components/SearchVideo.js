import React, { useEffect, useState } from 'react'
// import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import SearchVideoResults from './SearchVideoResults';
import { useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../utils/constants';

const SearchVideo = () => {
    const videoResult = useSelector((store) => store.video);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        SearchResults();
    },[])

    const SearchResults = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${videoResult}&key=${GOOGLE_API_KEY}`);
        const json = await data.json();
        console.log(json.items);
        setSearchResult(json.items);
    }

  return (
    <div>
        {
            searchResult.map((s) => <SearchVideoResults key={s.id} info = {s}/>)
        }
    </div>
  )
}

export default SearchVideo