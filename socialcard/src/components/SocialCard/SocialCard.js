import React from 'react';
import './SocialCard.css';

import User from '../User/User';
import Article from '../Article/Article';

class SocialCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <User user={this.props.post.user} date={this.props.post.post.date} />
        <Article post={this.props.post.post} handleSlide={this.props.handleSlide} index={this.props.index} />
      </div>
    )
  }
}

export default SocialCard;