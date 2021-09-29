import React from 'react';
import "../Video/Video.scss";
import { AiFillEye } from 'react-icons/ai';
import { useEffect } from 'react';
import request from '../../api';
import { useState } from 'react';
import moment from "moment";
import numeral from "numeral";

const Video = ({ video }) => {


    const { id, snippet: {
        channelId, channelTitle, title, publishedAt,
        thumbnails: { medium }, } } = video


    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)


    const seconds = moment.duration(duration).asSeconds()
    const getDuration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId=id?.videoId || id ;

    useEffect(() => {

        const getVideoDetails = async () => {
            const {
                data: { items }, } = await request("/videos", {
                    params: {
                        part: "contentDetails,statistics",
                        id: _videoId,
                    },
                })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        getVideoDetails()

    }, [_videoId])


    useEffect(() => {

        const getChannelIcon = async () => {
            const {
                data: { items }, } = await request("/channels", {
                    params: {
                        part: "snippet",
                        id: channelId,
                    },
                })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        getChannelIcon()

    }, [channelId])

    return (
       
            <div className="videos">
                <div className="videos__top">
                    <img src={medium.url} alt="" />
                    <span>{getDuration}</span>
                </div>

                <div className="videos__title">
                    {title}
                </div>



                <div className="videos__channel">
                    <img src={channelIcon?.url} alt="" />
                    <p>{channelTitle}</p>
                </div>
        
                <div className="videos__details">
                    <span>
                        <AiFillEye /> {numeral(views).format('0.a')} Views&nbsp;•&nbsp;
                    </span>
                    <span>
                        {moment(publishedAt).fromNow()}
                    </span>
                </div>
            </div>
    )
}

export default Video;
