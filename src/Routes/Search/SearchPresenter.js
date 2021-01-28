import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Wrapper from "Components/Wrapper";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const SearchContainer = styled.div`
    display:flex; min-height:60vh;
`;
const Form = styled.form`
    width:25%;
`;

const Input = styled.input`
    all: unset; line-height:50px; font-size:28px; width:100%; padding:0 20px;
    border-bottom:2px solid rgba(255, 255, 255, .3); box-sizing:border-box
`;

const TypingText = styled.ul`
    padding:20px 20px 0; font-size:25px; color:rgba(255, 255, 255, .3);
    li {line-height:2; font-weight:400;}
`;
 const Keyword = styled.a`
    cursor:pointer;
    &:hover {color:rgba(255, 255, 255, .7)}
 `;

 const SearchResult = styled.div`
    width:75%; padding-left:50px;
`;

const SearchPresenter = ({movieResults, showResults, keyWordResults, searchTerm, updateTerm, handleSubmit, clickKeyword, error, loading}) =>(
    <>
    <Helmet>
        <title>Search | Nomfilx Official</title>
    </Helmet>
    <Wrapper>
        <SearchContainer>
            <Form onSubmit={handleSubmit}>
                <>
                    <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
                    <TypingText>
                        {keyWordResults && keyWordResults.length > 0 && (
                            keyWordResults.map((keyword, index) => {
                                if(index < 13){
                                    return <li key={index}><Keyword onClick={clickKeyword}>{keyword.name}</Keyword></li>
                                }
                            })
                        )}
                    </TypingText>
                </>
            </Form>
            <SearchResult>
                {loading ? <Loader /> : (
                    <>
                        <Section title="Movie Results">
                            {movieResults && movieResults.length > 0 && (
                                movieResults.map(movie => {
                                    return (
                                        <Poster 
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.original_title} 
                                        imageUrl={movie.poster_path}
                                        rating={movie.vote_average}
                                        year={movie.release_date && movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                        />
                                    )
                                })
                            )}
                        </Section>
                        <Section title="TV Show Results">
                            {showResults && showResults.length > 0 && (
                                showResults.map(show => {
                                    return (
                                        <Poster 
                                        key={show.id}
                                        id={show.id}
                                        title={show.original_name} 
                                        imageUrl={show.poster_path}
                                        rating={show.vote_average}
                                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                        isMovie={false}
                                        />
                                    )
                                })
                            )}
                        </Section>
                        {error && <Message text={error} color="#e74c3c" />}
                        {   showResults &&
                            movieResults &&
                            showResults.length === 0 &&
                            movieResults.length === 0 && (
                            <Message text="Nothing found" color="#95a5A6" />
                        )}
                    </>
                )}
            </SearchResult>
        </SearchContainer>
    </Wrapper>
    </>
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