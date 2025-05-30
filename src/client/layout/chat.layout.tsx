import React from 'react';
import '../style/chat.css';

export const ChatLayout = ({
    children,
}: {
    children: React.ReactElement[];
}) => {
    return (
        <div className="chat-root">
            <div className="chat-container">
                {children}
            </div>
        </div>
    );
};