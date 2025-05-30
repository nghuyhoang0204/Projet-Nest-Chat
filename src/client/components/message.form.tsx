import React, { useRef } from 'react';
import { Message } from '../../server/shared/interfaces/chat.interfaces';
import { MessageSchema } from '../../server/shared/schemas/chat.schema';
import '../style/chat.css';
export const MessageForm = ({
  sendMessage,
}: {
  sendMessage: (message: Message['message']) => void;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = textAreaRef?.current?.value;
    if (value) {
      sendMessage(value);
      textAreaRef.current.value = '';
    }
  };

  interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLTextAreaElement> { }
  const handleKeyDown = (e: HandleKeyDownEvent) => {
    if (e.key === 'Enter') {
      submit(e);
    }
  };

  return (
    <div className="message-form-container">
      <form className="message-form">
        <textarea
          ref={textAreaRef}
          onKeyDown={(e) => handleKeyDown(e)}
          id="minput"
          placeholder="Message"
          maxLength={MessageSchema?.maxLength ?? undefined}
          className="message-form-textarea"
        ></textarea>
        <button
          onClick={(e) => submit(e)}
          className="message-form-send"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="message-form-send-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};