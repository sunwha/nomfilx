import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div``;

const Form = styled.form`
    width:100%; margin-top:50px
`;

const Input = styled.input`
    all: unset; font-size:28px; width:100%;
`;

const SearchPresenter = ({movieResult, showResults, searchTerm, updateTerm, handleSubmit, error, loading}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
        </Form>
        {loading ? <Loader /> : (
            <>
                {movieResult && movieResult.length > 0 && (
                    <Section title="Movie Results">
                        {movieResult.map(movie => <span key={movie.id}>{movie.title}</span>)}
                    </Section>
                )}
                {showResults && showResults.length > 0 && (
                    <Section title="TV Show Results">
                        {showResults.map(show => <span key={show.id}>{show.name}</span>)}
                    </Section>
                )}
                {error && <Message text={error} color="#e74c3c" />}
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResult: PropTypes.array,
    showResults: PropTypes.array,
    searchTerm: PropTypes.string,
    updateTerm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default SearchPresenter;