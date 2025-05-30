import React from 'react';
import { Room, User } from '../../server/shared/interfaces/chat.interfaces';
import "../../client/style/header.css";
export const Header = ({
  isConnected,
  users,
  handleUsersClick,
  handleLeaveRoom,
  roomName,
}: {
  isConnected: boolean;
  users: User[];
  handleUsersClick: () => void;
  handleLeaveRoom: () => void;
  roomName: Room['name'];
}) => {
  return (
    <header className="chat-header">
      <div className="chat-header-row">
        <div className="chat-header-room">
          <span className="chat-header-status">{isConnected ? '🟢' : '🔴'}</span>
          <span className="chat-header-slash">{'/'}</span>
          <span className="chat-header-roomname">{roomName}</span>
        </div>
        <div className="chat-header-actions">
          <button
            onClick={handleUsersClick}
            className="chat-header-btn"
          >
            <span className="chat-header-btn-icon">{'👨‍💻'}</span>
            <span className="chat-header-btn-count">{users.length}</span>
          </button>
          <button
            onClick={handleLeaveRoom}
            className="chat-header-btn"
          >
            <span className="chat-header-btn-leave">{'Leave'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};