import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spin from './Spin';
import PropTypes from 'prop-types'



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=042dc77e2ca043709e4fc2e063d612af&page=${this.state.page}&pageSize=${this.props.pageSize}`;


        this.setState({ loading: true });
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
    }

    componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    };

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    };

    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>RabbitNews - Top Headlines</h1>


                {this.state.loading && <Spin />}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>

                                <NewsItem
                                    title={element.title}
                                    description={element.description ? element.description.slice(0, 100) : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />

                            </div>
                        );
                    })}
                </div>


                {/* next and previous buttons */}
                <div className="container d-flex justify-content-between my-4">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Previous
                    </button>

                    <button
                        disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
