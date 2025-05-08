import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Room } from '../../server/shared/interfaces/chat.interfaces';

interface UseRoomQueryParams {
    roomName: string;
    isConnected: boolean;
}

export const useRoomQuery = (roomName: UseRoomQueryParams['roomName'], isConnected: UseRoomQueryParams['isConnected']) => {
    const query = useQuery<Room>({
        queryKey: ['rooms', roomName],
        queryFn: (): Promise<Room> =>
            axios.get(`/api/rooms/${roomName}`).then((response) => response.data),
        refetchInterval: 60000,
        enabled: isConnected,
    });
    return query;
};

export const useRoomsQuery = () => {
    const query = useQuery({
        queryKey: ['select_rooms'],
        queryFn: (): Promise<Room[]> =>
            axios.get(`/api/rooms`).then((response) => response.data),
    });
    return query;
};

export const unsetRoom = () => {
    sessionStorage.removeItem('room');
};
