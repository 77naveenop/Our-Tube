import React, { useEffect } from 'react';
import { Col, Container } from "react-bootstrap";
import "../HomeScreen/HomeScreen.scss";
import Video from "../../components/Video/Video";
import Categories from "../../components/Categories bar/Categories";
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { getPopularVideos } from '../../redux/actions/video.action';


const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])


    const { videos } = useSelector(state => state.homeVideos)

    const fetchData = () => {
       dispatch( getPopularVideos())
    }

    return (

        <Container className="homescreen" >
            <Categories />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className="spinner-border text-danger d-block mx-auto "></div>
                }
                className="row" >


                {videos.map((video) => (
                    <Col lg={3} md={4}>
                        <Video video={video} key={video.id} />
                    </Col >
                )
                )
                }

            </InfiniteScroll>
        </Container>

    )
}

export default HomeScreen;
