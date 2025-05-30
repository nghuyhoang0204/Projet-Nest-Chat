<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Projet-Nest-Chat

A real-time chat application built with NestJS for the backend and React for the frontend.

## Project Setup

### Install Dependencies

```bash
$ npm install
```

### Compile and Run the Project

#### Development Mode

```bash
# Clean and build the project, then start the development server
$ npm run dev (localhost:3000)
```

## Project Structure

```
├── public/                # Static assets (e.g., index.html)
├── src/
│   ├── client/            # Frontend code (React)
│   │   ├── components/    # Reusable React components
│   │   ├── layout/        # Layout components
│   │   ├── lib/           # Utility functions and hooks
│   │   ├── pages/         # Page components
│   │   ├── style/         # CSS files
│   │   └── index.tsx      # React entry point
│   ├── server/            # Backend code (NestJS)
│   │   ├── casl/          # CASL (Access Control) logic
│   │   ├── chat/          # WebSocket gateway and chat logic
│   │   ├── entities/      # Database entities
│   │   ├── pipes/         # Validation pipes
│   │   ├── room/          # Room management logic
│   │   ├── shared/        # Shared schemas and interfaces
│   │   └── main.ts        # NestJS entry point
├── test/                  # End-to-end tests
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── webpack.config.client.js # Webpack configuration for the client
└── README.md              # Project documentation
```

## Features

- Real-time messaging using WebSockets
- Room-based chat functionality
- User authentication and session management
- Role-based access control using CASL
- Responsive UI built with TailwindCSS

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Socket.IO Documentation](https://socket.io/docs/v4/)
- [Zod Documentation](https://zod.dev/)

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).