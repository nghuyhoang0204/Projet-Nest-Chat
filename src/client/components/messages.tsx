import React from 'react';
import { Message, User } from '../../server/shared/interfaces/chat.interfaces';
export type ClientMessage = Message & { delivered: boolean };

const determineMessageStyle = (
  user: Pick<User, 'userId' | 'userName'>,
  messageUserId: Message['user']['userId'],
) => {
  if (user && messageUserId === user.userId) {
    return {
      message: 'message-bubble message-own',
      sender: 'message-sender message-own-sender',
    };
  } else {
    return {
      message: 'message-bubble message-other',
      sender: 'message-sender message-other-sender',
    };
  }
};

export const Messages = ({
  user,
  messages,
}: {
  user: Pick<User, 'userId' | 'userName'>;
  messages: ClientMessage[];
}) => {
  return (
    <div className="messages-list">
      {messages?.map((message, index) => {
        return (
          <div key={index + message.timeSent} className="message-wrapper">
            <div
              className={
                determineMessageStyle(user, message.user.userId).sender
              }
            >
              <span className="message-username">
                {message.user.userName}
              </span>
              <span className="message-dot">{' • '}</span>
              <span className="message-time">
                {new Date(message.timeSent).toLocaleString()}
              </span>
            </div>
            <div
              className={
                determineMessageStyle(user, message.user.userId).message
              }
            >
              <p className="message-text">{message.message}</p>
            </div>
            {user && message.user.userId === user.userId && (
              <p className="message-status">
                {message.delivered ? 'Delivered' : 'Not delivered'}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};