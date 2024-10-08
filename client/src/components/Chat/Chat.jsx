import React, { useState } from 'react';
import "./chat.scss";

const Chat = () => {

    const [chat, setChat] = useState(true);


  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message" onClick={() => setChat(true)}>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Random UserX</span>
                <p>Lorem ipsum dolor sit amet .....</p>
            </div>
        </div>
        { chat && (
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        User X
                    </div>
                    <span className="close-btn" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage owner">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage owner">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage owner">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, placeat.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Chat;