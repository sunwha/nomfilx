import React from "react";
import PropTypes from "prop-types";
import Wrapper from "Components/Wrapper";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";


const TVPresenter = ({topRated, airingToday, popular, error, loading}) => loading ?  <Loader /> : (
    <Wrapper>
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
                {topRated.map(show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        isMovie={false}
                    />
                ))}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular Shows">
                {popular.map(show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        isMovie={false}
                    />
                ))}
            </Section>
        )}
        {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
                {airingToday.map(show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        isMovie={false}
                    />
                ))}
            </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
    </Wrapper>
);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;