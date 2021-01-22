import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
    padding:0 10px;
`;

const HomePresenter = ({nowPlaying, upComing, popular, error, loading}) => loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
        {upComing && upComing.length > 0 && (
            <Section title="Upcoming Movies">
                {upComing.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular Movies">
                {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcomfing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};
export default HomePresenter;