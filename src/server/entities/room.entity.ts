import {
    RoomName,
    Room as RoomType,
    User,
} from '../../server/shared/interfaces/chat.interfaces';

export class Room implements RoomType {
    constructor(attrs: RoomType) {
        Object.assign(this, attrs);
    }
    name: RoomName;
    host: User;
    users: User[];
}
