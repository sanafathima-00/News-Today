import React, { Component } from 'react';
import './News.css';
import top from './top.png';

export class TopNews extends Component {
    render() {
        let { title, description, imgUrl, newsurl } = this.props;
        return (
            <div className="top-news-container">
                {/* Centered Image */}
                <div className="top-news-image">
                    <img src={top} alt="Top News" />
                </div>

                {/* News Card Below the Image */}
                <div className="top-news-card">
                    <img src={imgUrl} className="top-news-card-img" alt="News Thumbnail" />
                    <div className="top-news-card-body">
                        <h3 className="top-news-card-title">{title}</h3>
                        <p className="top-news-card-text">{description} <span>
                            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                                Read More
                            </a>
                        </span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNews;
