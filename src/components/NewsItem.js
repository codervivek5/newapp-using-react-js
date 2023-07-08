import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning ">
                        {source}
                    </span>

                    <img src={!imageUrl ? "https://assamtribune.com/h-upload/2022/10/28/1430258-garena-free-fire-max.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body text- ">

                        <h5 className="card-title">{title}

                        </h5>
                        <p className="card-text">{description}...</p>

                        <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>

                </div>
            </div>

        )
    }
}

export default NewsItem
