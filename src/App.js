import './App.css';
import React from 'react';
import axios from 'axios';
import Followers from './Followers';

class App extends React.Component {
  state = {
    user: {
      avatar_url: '',
      name: '',
      login: '',
      followers_url: '',
      html_url: '',
    },

    followers: [],
  }

  componentDidMount() { //axios for User Card
    axios.get('https://api.github.com/users/RyderBlues')
         .then(res => {
            this.setState({
              user: {
                avatar_url: res.data.avatar_url,
                name: res.data.name,
                login: res.data.login,
                followers_url: res.data.followers_url,
                html_url: res.data.html_url,
              }
            })
            axios.get(this.state.user.followers_url)
            .then(res => {
              this.setState({
                followers: res.data
              });
            })
            .catch(err => {
              console.log('ERROR', err);
            })
          })
         .catch(err => {
            console.log('ERROR', err);
          })
  };
  

  render() {
    return (
      <div className="App">
        <div className="user-container">
          <img className="avatar" src={this.state.user.avatar_url} alt='user avatar' />
          <h1 className='username'>{this.state.user.name}</h1>
          <a href={this.state.user.html_url}>
            <div className='user-text'>{`@${this.state.user.login} on Github`}</div>
          </a>
        </div>
        <Followers userData={this.state.followers} />
      </div>
    );
  }
}




export default App;
