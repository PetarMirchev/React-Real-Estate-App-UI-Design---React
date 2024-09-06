import React from 'react';
import "./profilePage.scss";
import List from '../../components/List/List';


const profilePage = () => {
  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></span>
                    <span>Username: <b>Petar Mir</b></span>
                    <span>Email: <b>petar_g@abv.bg</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Save List</h1>
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper"></div>
        </div>
    </div>
  )
}

export default profilePage;