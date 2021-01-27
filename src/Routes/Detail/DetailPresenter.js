import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Link } from "react-router-dom";
import iconImdb from "../../assets/icon-imdb.svg";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Container = styled.div`
    padding:0 0 100px 50px;
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
    line-height:21px; color:rgba(255, 255, 255, .7); vertical-align:top;
    ~ span {
        position:relative; display:inline-block; padding-left:20px;
    }
    ~ span:after {
        content:""; position:absolute; top:50%; left:8px; width:3px; height:3px;
        border-radius:100%; background:rgba(255, 255, 255, .7);
        transform:translateY(-50%);
    }
    &.link-imdb {width:62px}
    &.link-imdb:after {display:none}
    &.link-imdb img {width:100%; vertical-align:top}
`;

const Overview = styled.p`
    width:60%; line-height:1.7; color:rgba(255, 255, 255, 0.9);
`;

const SubContent = styled.div`
    position:relative; z-index:1; padding:100px 8% 0; color:#fff;
    .sub-section {
        ~ .sub-section {margin-top:100px}
    }
`;

const SubTitle = styled.h4`
    padding-bottom:50px; font-size:30px; color:#fff
`;

const Video = styled.div`
    position:relative; padding-bottom:56.25%;
    iframe {position:absolute; top:0; left:0; width:100%; height:100%}
`;

const Creators = styled.div`
    display:flex;
`;

const Creator = styled.strong`
    position:relative; margin-right:50px; padding-left:80px; font-weight:400; font-size:20px;
    &:after {content:""; position:absolute; top:50%; left:0; width:60px; height:60px; border-radius:100%;
    background-color:rgba(255, 255, 255, .5);
    background-image:url(${props => props.profileImage});
    background-position:center center;
    background-size:cover; transform:translateY(-50%)}
`;

const CompanyContainer = styled.div``;
const Companies = styled.ul`
    display:flex; flex-direction:row;
`;
const Company = styled.li`
    position:relative; padding:0 80px 0 40px;
    &:after {content:""; position:absolute; top:50%; left:0; width:30px; height:30px; border-radius:100%;
    background-color:rgba(255, 255, 255, .5);
    background-image:url(${props => props.logoimage});
    background-position:center center;
    background-size:cover; transform:translateY(-50%)}
    span {display:inline-block; position:relative; top:50%; transform:translateY(-50%); line-height:1.4; letter-spacing:0.1em; color:rgba(255, 255, 255, .7)}
`;

const Seasons = styled.ul`
    display:grid; grid-template-columns:repeat(6, minmax(0, 1fr)); grid-column-gap:10px; grid-row-gap:20px;
`;
const Season = styled.li`
    img {width:100%}
    p {padding-top:10px; font-size:16px; color:rgba(255, 255, 255, .6)}
`;

SwiperCore.use([Pagination]);

const DetailPresenter = ({ result, loading, error }) => (
    loading ? (
        <>
        <Helmet>
            <title>Loading | Nomfilx Official</title>
        </Helmet>
        <Loader />
        </>
    ): (
        error ? <Message text={error} color="#e74c3c" /> : (
        <Container>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name} | Nomfilx Official</title>
            </Helmet>
            <HeadContent>
                <Backdrop bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : `https://image.tmdb.org/t/p/original${result.poster_path}`} />
                <Data><DataInner>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0, 4) : `${result.first_air_date.substring(0, 4)}-${result.last_air_date.substring(0, 4)}`}</Item>
                        <Item>{result.runtime ? `${result.runtime} min` : `${result.number_of_seasons} seasons`}</Item>
                        <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</Item>
                        <Item className="link-imdb"><a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank" title="new"><img src={iconImdb}/></a></Item>
                    </ItemContainer>
                    <ItemContainer>
                        <Item>{result.production_countries.map((country, index) => index === result.production_countries.length - 1 ? country.name : `${country.name} / `)}</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    </DataInner></Data>
            </HeadContent>
            <SubContent>
                <div className="sub-section">
                { result.videos.results.length > 0 ? (
                    <>
                    <SubTitle>Videos</SubTitle>
                    <Swiper
                        loop={false}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={true}
                    >
                        {result.videos.results.map((video, index) => (
                            <SwiperSlide key={index}><Video><iframe src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Video></SwiperSlide>
                        ))}
                    </Swiper>
                    </>
                ) : null}
                </div>
                <div className="sub-section">
                { result.created_by.length > 0 ? (
                    <>
                    <SubTitle>Creators</SubTitle>
                    <Creators>
                        {result.created_by.map((creator, index) => (
                            <Creator key={index} profileImage={creator.profile_path ? `https://image.tmdb.org/t/p/original${creator.profile_path}` : require("../../assets/noPosterSmall.png").default}>{creator.name}</Creator>
                        ))}
                    </Creators>
                    </>
                ) : null}
                </div>
                <div className="sub-section">
                { result.production_companies.length > 0 ? (
                    <CompanyContainer>
                        <SubTitle>Production Companies</SubTitle>
                        <Companies>
                            {
                                result.production_companies.map((company, index) => (
                                    <Company key={index} logoimage={company.logo_path ? `https://image.tmdb.org/t/p/original${company.logo_path}` : null}><span>{company.name}</span></Company>
                                ))
                            }
                        </Companies>
                    </CompanyContainer>
                ) : null }
                </div>
                <div className="sub-section">
                { result.seasons ? (
                    <>
                    <SubTitle>Seasons</SubTitle>
                    <Seasons>
                        {result.seasons.map((season, index) => (
                            <Season key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${season.poster_path}`} />
                                <p>{season.name} {season.air_date === null ? `(${season.air_date})` : `(${season.air_date.substring(0, 4)})`}</p>
                            </Season>
                        ))}
                    </Seasons>
                    </>
                ) : null}
                </div>
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