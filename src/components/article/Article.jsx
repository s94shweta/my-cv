import React from 'react';
import './article.css';

const Article = ({imgUrl, date, text}) => {
  return (
    <div className="mycv__blog-conatiner_article">
      <div className='mycv__blog-container_article-image'>
      <img src={imgUrl} alt="blog image"/>
      </div>
      <div className="mycv__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full Article</p>
        </div></div>
  )
}

export default Article