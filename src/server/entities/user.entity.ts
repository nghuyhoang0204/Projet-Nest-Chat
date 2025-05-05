import {
    SocketId,
    User as UserType,
    UserId,
    UserName,
} from '../../server/shared/interfaces/chat.interfaces';

export class User implements UserType {
    constructor(attrs: UserType) {
        Object.assign(this, attrs);
    }
    userId: UserId;
    userName: UserName;
    socketId: SocketId;
}
