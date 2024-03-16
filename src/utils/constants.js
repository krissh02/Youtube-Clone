export const HAMBURGER_ICON = "https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png";

export const YOUTUBE_LOGO = "https://ongpng.com/wp-content/uploads/2023/04/3-13.png";

export const USER_ICON = "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png";

export const GOOGLE_API_KEY = "AIzaSyCQFDno5s6Gp_OEmfCTT2I7f2tW7Mt_-OY"; 

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=ipl&key=${GOOGLE_API_KEY}`

export const YOUTUBE_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_COMMENT_DETAILS = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${GOOGLE_API_KEY}&videoId=`;

export const valueConvertor = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value>=1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}

export const LIVE_CHAT_COUNT = 20;