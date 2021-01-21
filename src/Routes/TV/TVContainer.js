import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api"

export default class extends React.Component{
    state = {
        topRated: null,
        airingToday: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try {
            const { data: { result: topRated } } = await tvApi.topRated();
            const { data: { result: popular } } = await tvApi.popular();
            const { data: { result: airingToday } } = await tvApi.airingToday();
            this.setState({ topRated, popular, airingToday });
        } catch {
            this.setState({
                error: "Can't find TV information."
            });
        } finally {
            this.setState({
                loading:false
            });
        }
    }

    render(){
        const { topRated, airingToday, popular, error, loading } = this.state;
        return (
            <TVPresenter
            topRated={topRated}
            airingToday={airingToday}
            popular={popular}
            error={error}
            loading={loading} />
        );
    }
}