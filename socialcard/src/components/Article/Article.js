import React from 'react';
import './Article.css';

class Article extends React.Component {
  handleRightClick = () => {
    this.props.handleSlide('+');
  }

  handleLeftClick = () => {
    this.props.handleSlide('-');
  }

  render() {
    return (
      <div className="article">
        <article class="article-text">{this.props.post.article}</article>

        <div className="photoContainer">
          <img className="arrow right" src={require('./arrow.png')} onClick={this.handleRightClick} alt="right arrow" />
          <img className="photo" src={this.props.post.photos[this.props.index]} alt="post photos" />
          <img className="arrow left" src={require('./arrow.png')} onClick={this.handleLeftClick} alt="left arrow" />
        </div>
        
      </div>
    )
  }
}

export default Article;