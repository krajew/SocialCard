import React from 'react';
import './User.css';

class User extends React.Component {
  render() {
    return (
      <div className='user'>
        <img className='avatar' src={this.props.user.avatar} />
        <div className='xd'>
          <p className='name'>{this.props.user.firstName} {this.props.user.lastName}</p>
          <p className='date'>{this.props.date.day}.{this.props.date.month}.{this.props.date.year}</p>
        </div>

      </div>
    )
  }
}

export default User;