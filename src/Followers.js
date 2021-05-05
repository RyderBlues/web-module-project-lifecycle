import React from 'react';
import './App.css';

class Followers extends React.Component {

    render(){
      return (
        <div className="follower-container">
          {/* <Searchbar /> */}
          <h3>Follower List:</h3>
            {this.props.userData.map(item => {

              const name = item.login.toUpperCase();

              return (<div key={item.id}>
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