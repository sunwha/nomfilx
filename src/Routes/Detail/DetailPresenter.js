import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    position:relative; height:100vh; padding:50px 50px 50px 100px
`;

const Content = styled.div`
    display:flex; position:relative; z-index:1; width:100%; height:100%;
`;

const Cover = styled.div`
    width:30%; height:100%;
    background-image:url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    border-radius:5px;
`;

const Backdrop = styled.div`
    position:absolute; top:0; right:0; bottom:0; left:0; z-index:0;
    background-image:url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    filter:blur(3px);
    opacity:0.5
`;

const Data = styled.div`
    width:70%; margin-left:20px
`;

const Title = styled.h3`
    font-size:32px; color:#fff;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span`
    ~ span {position:relative; display:inline-block; padding-left:20px}
    ~ span:after {
        content:""; position:absolute; top:50%; left:8px; width:3px; height:3px;
        border-radius:100%; background:#fff;
        transform:translateY(-50%);
    }
`;

const Overview = styled.p`
    width:80%; line-height:1.5; font-size:12px; color:rgba(255, 255, 255, 0.7);
`;

const DetailPresenter = ({ result, loading, error }) => (
    loading ? (
        <>
        <Helmet>
            <title>Loading | Nomfilx</title>
        </Helmet>
        <Loader />
        </>
    ): (
        error ? <Message text={error} color="#e74c3c" /> : (
        <Container>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name} | Nomfilx</title>
            </Helmet>
            <Backdrop bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : `https://image.tmdb.org/t/p/original${result.poster_path}`} />
            <Content>
                <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png").default} />
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                        <Item>{result.runtime ? result.runtime : result.episode_run_time} min</Item>
                        <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
        </Container>
        )
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;