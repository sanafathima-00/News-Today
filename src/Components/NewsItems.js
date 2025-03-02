import React, { Component } from 'react';
import './News.css';

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsurl } = this.props;
    return (
      <div className="news-card">
        <img src={imgUrl} className="news-card-img" alt="News Thumbnail" />
        <div className="news-card-body">
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="news-card-title">
            {title}
          </a>
          <p className="news-card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default NewsItems;
