import React from 'react';
import './Article.css';

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <article>{this.props.post.article}</article>
        
      </div>
    )
  }
}

export default Article;