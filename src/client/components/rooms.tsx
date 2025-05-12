import React, { useEffect, useState } from 'react';
import { Room } from '../../server/shared/interfaces/chat.interfaces';
import { Loading } from './loading';

export const Rooms = ({
  rooms,
  selectionHandler,
  selectedRoom,
  isLoading,
}: {
  rooms: Room[];
  selectionHandler: (roomName: Room['name']) => void;
  selectedRoom?: Room['name'];
  isLoading: boolean;
}) => {
  const [isDelay, setIsDelay] = useState<boolean>(true);
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDelay(false);
    }, 1000);
    return () => {
      clearTimeout(delayTimer);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded-lg border border-slate-400 bg-gray-800 shadow-lg">
        <div className="flex justify-between rounded-t-md border-b border-slate-400 bg-slate-400 p-4">
          <span className="font-bold text-gray-900">Join Existing Rooms</span>
          {selectedRoom && (
            <button
              onClick={() => selectionHandler('')}
              className="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="w-full">
          {!isLoading &&
            !isDelay &&
            rooms.map((room, index) => (
              <button
                key={index}
                className={`w-full p-2 text-left ${selectedRoom === room.name
                    ? 'bg-slate-900 text-gray-200'
                    : 'text-gray-400 hover:bg-slate-700'
                  }`}
                onClick={() => selectionHandler(room.name)}
              >
                {room.name}
              </button>
            ))}
          {(isLoading || isDelay) && (
            <div className="p-4 text-center text-gray-400">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};