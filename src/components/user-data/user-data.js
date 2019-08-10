import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-data.css';

export class User extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <span>
        {!userInfo && <p>No results.</p>}
        {userInfo && (
          <div className='user-info'>
            <img src={userInfo.avatar_url} alt='User avatar' width='96' height='96' />
            <div>
              <p className='no-margin'>
                Name:{' '}
                <a href={userInfo.html_url} target='_blank' rel='noopener noreferrer'>
                  {userInfo.name}
                </a>
              </p>
              <p className='no-margin'>Location: {userInfo.location}</p>
              {userInfo.email && <p className='no-margin'>Email:{userInfo.email}</p>}
            </div>
          </div>
        )}
      </span>
    );
  }
}

const mapStateToProps = state => {
  const userInfo = state.userInfo;
  return { userInfo };
};

export default connect(mapStateToProps)(User);
