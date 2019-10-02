import React from 'react';
import './Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }
  }

  handleRightClick = () => {
    let index = this.state.index;
    let length = this.props.post.photos.length;
    
    if (index === (length - 1)) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: index + 1 })
    }
  }

  handleLeftClick = () => {
    let index = this.state.index;
    let length = this.props.post.photos.length;

    if (index === 0) {
      this.setState({ index: length - 1 })
    } else {
      this.setState({ index: index - 1 })
    }
  }

  render() {
    return (
      <div className="article">
        <article class="article-text">{this.props.post.article}</article>

        <div className={this.props.post.photos.length ? 'photoContainer' : 'notVisible'} >
          <img className="arrow right" src={require('./arrow.png')} onClick={this.handleRightClick} alt="right arrow" />
          <img className="photo" src={this.props.post.photos[this.state.index]} alt="post photos" />
          <img className="arrow left" src={require('./arrow.png')} onClick={this.handleLeftClick} alt="left arrow" />
        </div>
      </div>
    )
  }
}

export default Article;