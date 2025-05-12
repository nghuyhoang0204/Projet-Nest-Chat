import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  RoomNameSchema,
  UserNameSchema,
  RoomNameSchemaRegex,
} from '../../server/shared/schemas/chat.schema';
import { generateUserId, setUser } from '../lib/user';
import { User } from '../../server/shared/interfaces/chat.interfaces';
import '../style/LoginForm.css';

const formSchema = z.object({
  userName: UserNameSchema,
  roomName: RoomNameSchema.or(z.string().length(0))
    .optional()
    .transform((name) => (name === '' ? undefined : name)),
});

export type LoginFormInputs = z.infer<typeof formSchema>;

export const LoginForm = ({
  onSubmitSecondary,
  disableNewRoom,
  defaultUser,
}: {
  onSubmitSecondary: (data: LoginFormInputs) => void;
  disableNewRoom: boolean;
  defaultUser?: User['userName'];
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormInputs) => {
    const newUser = {
      userId: generateUserId(data.userName),
      userName: data.userName,
    };
    setUser(newUser);
    onSubmitSecondary(data);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Join a Room</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="login">Name</label>
          <input
            type="text"
            id="login"
            placeholder="Enter your name"
            defaultValue={defaultUser && defaultUser}
            required={true}
            minLength={UserNameSchema.minLength ?? undefined}
            maxLength={UserNameSchema.maxLength ?? undefined}
            {...register('userName')}
          />
          <p className="error">{errors.userName?.message}</p>

          <label htmlFor="room">New Room</label>
          <input
            type="text"
            id="room"
            required={!disableNewRoom}
            disabled={disableNewRoom}
            minLength={RoomNameSchema?.minLength ?? undefined}
            maxLength={RoomNameSchema?.maxLength ?? undefined}
            pattern={RoomNameSchemaRegex.source.toString()}
            placeholder="Enter room name"
            {...register('roomName')}
          />
          <p className="error">{errors.roomName?.message}</p>

          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
};
