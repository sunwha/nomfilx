import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Wrapper from "Components/Wrapper";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Form = styled.form`
    width:100%; margin-top:50px
`;

const Input = styled.input`
    all: unset; font-size:28px; width:100%;
`;

const SearchPresenter = ({movieResults, showResults, searchTerm, updateTerm, handleSubmit, error, loading}) => (
    <Wrapper>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
        </Form>
        {loading ? <Loader /> : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
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
                {showResults && showResults.length > 0 && (
                    <Section title="TV Show Results">
                        {showResults.map(show => (
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
                {showResults &&
                    movieResults &&
                    showResults.length === 0 &&
                    movieResults.length === 0 && (
                        <Message text="Nothing found" color="#95a5A6" />
                    )}
            </>
        )}
    </Wrapper>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    showResults: PropTypes.array,
    searchTerm: PropTypes.string,
    updateTerm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default SearchPresenter;