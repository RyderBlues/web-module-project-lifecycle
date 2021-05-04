import React from 'react';
import axios from 'axios';
import './App.css';

class Followers extends React.Component {
  state = {
    followers_Url: this.props.userData,
    followers: [],
  }
  
  componentDidMount() {
    axios
      .get(this.state.followers_Url)
      .then(res => {
        this.setState({
          followers:res.data
        });
        console.log(this.state.followers);
      })
      .catch(err => {
        console.log(err);
      })
  }




  render(){
    return (
      <div className="follower-container">
        <h3>Follower List:</h3>
          {this.state.followers.map(item => {

            const name = item.login.toUpperCase();

            return (<div key={item.id} >
                      <a href={item.html_url}>
                        <h2 className='follower-name'>{`@${name} on Github`}</h2>
                      </a>  
                      <img className='follower-img' src={item.avatar_url} alt='avatar url'/>
                    </div>
            )
          })}
      </div>
    )
  }
}

export default Followers;