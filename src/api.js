import axios from "axios";



const request = axios.create({

    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCTlYN8NyKBODVBZYL-JVRWUt7ArcVwCTA",
    },




})



export default request;