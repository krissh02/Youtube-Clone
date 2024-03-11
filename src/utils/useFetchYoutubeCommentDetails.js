import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENT_DETAILS } from './constants';

const useFetchYoutubeCommentDetails = () => {
    const [commentInfo,setCommentInfo] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        CommentInfo();
    },[])
    const CommentInfo = async () => {
        const data  = await fetch(YOUTUBE_COMMENT_DETAILS+searchParams.get("v"));
        const json = await data.json();
        setCommentInfo(json.items);
    }
  return commentInfo;
}

export default useFetchYoutubeCommentDetails