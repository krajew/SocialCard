import React from 'react';
import './App.css';

import SocialCard from '../SocialCard/SocialCard'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          user: {
            avatar: 'http://turboclinic.co.za/wp-content/uploads/2014/02/facebook-avatar.jpg',
            firstName: 'Patryk',
            lastName: 'Krajewski'
          },
          post: {
            article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.',
            photos: [
              'https://www.rspcansw.org.au/wp-content/uploads/2017/08/50_a-feature_dogs-and-puppies_mobile.jpg',
              'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
            ],
            date: {
              day: '24',
              month: '09',
              year: '2019'
            }
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="grid">
        {
          this.state.posts.map(post => {
            return <SocialCard post={post} />
          })
        }
      </div>
    )
  }
}

export default App;
