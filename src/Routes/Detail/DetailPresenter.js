import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Link } from "react-router-dom";

const Container = styled.div`
    height:100vh; padding-left:50px;
`;

const HeadContent = styled.div`
    position:relative; height:70vh; width:100%
`;

const Backdrop = styled.div`
    position:absolute; top:0; right:0; z-index:0; width:100%; height:100vh;
    background-image:url(${props => props.bgImage});
    background-position:right top;
    background-size:100% auto;
    background-repeat:no-repeat;
`;

const Data = styled.div`
    position:relative; z-index:1; width:70%; height:100vh; padding:0 8%; background:linear-gradient(to right, #000 0%, transparent 100%);
    &:before {
        content:""; display:inline-block; width:0; height:100%; vertical-align:middle;
    }    
`;

const DataInner = styled.div`
    display:inline-block; vertical-align:middle;
`;

const Title = styled.h3`
    display:inline-block; margin-bottom:2.6042vw; font-weight:700; font-size:4.6875vw; color:#fff; text-shadow:3px 3px 6px rgba(0, 0, 0, .3);
`;

const ItemContainer = styled.div`
    margin-bottom:20px;
    + div {margin-top:-10px}
`;

const Item = styled.span`
    color:rgba(255, 255, 255, .7);
    ~ span {
        position:relative; display:inline-block; padding-left:20px;
    }
    ~ span:after {
        content:""; position:absolute; top:50%; left:8px; width:3px; height:3px;
        border-radius:100%; background:rgba(255, 255, 255, .7);
        transform:translateY(-50%);
    }
`;

const Overview = styled.p`
    width:60%; line-height:1.7; color:rgba(255, 255, 255, 0.9);
`;

const People = styled.ul`
    margin-top:20px;
    li {

    }
`;

const SubContent = styled.div``;

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
            <HeadContent>
                <Backdrop bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : `https://image.tmdb.org/t/p/original${result.poster_path}`} />
                <Data><DataInner>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                        <Item>{result.runtime ? `${result.runtime} min` : `${result.number_of_seasons} seasons`}</Item>
                        <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</Item>
                    </ItemContainer>
                    <ItemContainer>
                        <Item>{result.production_countries.map((country, index) => index === result.production_countries.length - 1 ? country.name : `${country.name} / `)}</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    <People>
                        <li><strong>Produsor:</strong></li>
                    </People>
                    </DataInner></Data>
            </HeadContent>
            <SubContent>
                "sdlfkjlsdf"
            </SubContent>
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