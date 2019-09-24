import React from 'react';
import './SocialCard.css';

import User from '../User/User';

class SocialCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <User user={this.props.post.user} date={this.props.post.post.date} />
      </div>
    )
  }
}

export default SocialCard;