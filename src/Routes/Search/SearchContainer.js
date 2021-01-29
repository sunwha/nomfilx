import { moviesApi, tvApi, searchApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        showResults: null,
        keyWordResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }
    
    updateTerm = (event) => {
        const { target: { value } } = event;
        this.setState({
            searchTerm: value,
        }, () => {
            this.searchByKeyword();
            this.searchByTerm();
        });
    }

    clickKeyword = (event) => {
        event.preventDefault();
        const { target: {innerText} } = event;
        this.setState({
            searchTerm: innerText,
        }, this.searchByTerm);
    }

    searchByKeyword = async () => {
        try {
            const { searchTerm } = this.state;
            const { data: { results: keyWordResults } } = await searchApi.keyword(searchTerm);
            if (keyWordResults !== null) {
                this.setState({ keyWordResults });
            }
        } catch {
        } finally {
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const { data: { results: movieResults } } = await moviesApi.search(searchTerm);
            const { data: { results: showResults } } = await tvApi.search(searchTerm);
            this.setState({ movieResults, showResults });
        } catch {
            this.setState({ error: "Can't find results." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render(){
        const { movieResults, showResults, keyWordResults, searchTerm, updateTerm, clickKeyword, loading, error } = this.state;
        return (
            <SearchPresenter
            movieResults={movieResults}
            showResults={showResults}
            keyWordResults={keyWordResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            clickKeyword={this.clickKeyword}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm} />
        );
    }
}