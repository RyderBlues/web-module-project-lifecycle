import './App.css';
import React from 'react';
import axios from 'axios';
import Followers from './Followers';

class App extends React.Component {
  state = {
    user: [],
  }
  componentDidMount() { //axios for User Card
    axios.get('https://api.github.com/users/RyderBlues')
         .then(res => {
            this.setState({
              user:res.data
            })
            console.log(this.state);
          })
         .catch(err => {
            console.log(err);
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
        <Followers userData={this.state.user.followers_url} />
      </div>
    );
  }
}




export default App;
