import React from 'react';
import './User.css';
import { thisExpression } from '@babel/types';

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='user'>
        <img className='avatar' src={'http://turboclinic.co.za/wp-content/uploads/2014/02/facebook-avatar.jpg'} />
        <div className='xd'>
          <p className='name'>{this.props.user.firstName} {this.props.user.lastName}</p>
          <p className='date'>{this.props.date.day}.{this.props.date.month}.{this.props.date.year}</p>
        </div>

      </div>
    )
  }
}

export default User;