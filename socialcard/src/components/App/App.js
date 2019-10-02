import React from 'react';
import './App.css';

import SocialCard from '../SocialCard/SocialCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {
        user: {
          avatar: 'http://turboclinic.co.za/wp-content/uploads/2014/02/facebook-avatar.jpg',
          firstName: 'Patryk',
          lastName: 'Krajewski'
        },
        post: {
          article: 'So cute dogs i got there. ;*',
          photos: [
            'https://www.rspcansw.org.au/wp-content/uploads/2017/08/50_a-feature_dogs-and-puppies_mobile.jpg',
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
            'https://joemonster.org/i/k/dogss_01.jpg',
            'https://psy-pies.com/pliki/image/artykuly/201202/duze/1329235521_slodki-szczeniak.jpg'
          ],
          date: {
            day: '24',
            month: '09',
            year: '2019'
          }
        }
      }
    }
  }
  
  render() {
    return (
      <div className="grid">
        <SocialCard
          post={this.state.posts}
          handleSlide={this.handlePhotoSlide}
          handleLike={this.handleLikeAdd} />
      </div>
    )
  }
}

export default App;
