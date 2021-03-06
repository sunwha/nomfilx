import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    line-height:1.4; font-size:12px
`;

const Image = styled.div`
    height:400px;
    border-radius:4px;
    background-image:url(${props => props.bgUrl});
    background-size:cover;
    background-position:center center;
    transition: opacity 0.1s ease-in-out
`;

const Rating = styled.span`
    position:absolute; right:5px; bottom:5px; opacity:0; transition: opacity 0.1s ease-in-out
`;

const ImageContainer = styled.div`
    position:relative;
    margin-bottom:10px;
    &:hover {
        ${Image} { opacity:0.3 }
        ${Rating} { opacity:1 }
    }
`;

const Title = styled.strong`
    display:block; font-size:16px; margin-bottom:3px
`;
const Year = styled.span`
    font-size:12px; color:rgba(255, 255, 255, 0.5)
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require("../assets/noPosterSmall.png").default} />
                <Rating>
                    <span role="img" aria-label="rating">⭐</span>{" "}{rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)


Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool.isRequired
}

export default Poster;