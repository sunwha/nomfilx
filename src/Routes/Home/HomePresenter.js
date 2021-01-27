import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Wrapper from "Components/Wrapper";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import PageIntro from "Components/PageIntro";

const HomePresenter = ({nowPlaying, upComing, popular, error, loading}) => (
    <>
    <Helmet>
        <title>Movies | Nomfilx Official</title>
    </Helmet>
    {loading ?  <Loader /> : (
            <Wrapper>
                <PageIntro title="Movie" content="From fear that squeezes the whole body to comedy that makes people laugh, to dramas and romance that evoke empathy. The movie is talking to you. The touching and comfort of countless stories! That's why we watch movies."/>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map(movie => (
                            <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title} 
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title="Upcoming Movies">
                        {upComing.map(movie => (
                            <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title} 
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        {popular.map(movie => (
                            <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title} 
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message text={error} color="#e74c3c" />}
            </Wrapper>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcomfing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};
export default HomePresenter;