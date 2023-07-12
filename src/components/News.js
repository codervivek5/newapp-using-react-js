import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spin from './Spin';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            hasMore: true, // Added hasMore property to track if there are more articles to load
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
            loading: false,
            hasMore: data.articles.length < data.totalResults, // Update hasMore based on whether there are more articles
        });
    }

    componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        if (!this.state.hasMore) return; // No more articles to load, return early

        this.setState({ page: this.state.page + 1 });

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=042dc77e2ca043709e4fc2e063d612af&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false,
            hasMore: this.state.articles.length + data.articles.length < data.totalResults, // Update hasMore based on whether there are more articles
        });
    };

    render() {
        return (
            <>
                <h1 className='text-center my-3'>RabbitNews - Top Headlines</h1>

                {this.state.loading && <Spin />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<Spin />}
                    scrollableTarget='scrollableDiv'
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
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
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
