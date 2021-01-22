import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const {location: { pathname }} = this.props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount(){
        const {
            match: { 
                params: { id } 
            },
            history: { push },
        } = this.props;
        const parseId = parseInt(id);
        const { isMovie } = this.state;
        if(isNaN(parseId)){
            return push("/");
        }
        let result = null;
        try {
            if(isMovie){
                ({ data: result } = await moviesApi.moiveDetail(parseId));
            } else {
                ({ data: result } = await tvApi.showDetail(parseId));
            }
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result});
        }
    }

    render(){
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
            result={result}
            error={error}
            loading={loading} />
        );
    }
}