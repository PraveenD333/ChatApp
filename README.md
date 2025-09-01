# Real-Time Chat Application - MERN Fullstack (Frontend + Backend)

A modern real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO.

## Features

- 🔐 User authentication and authorization
- 💬 Real-time messaging
- 🖼️ Image sharing support
- 👤 User profile customization
- 🟢 Online status indicators
- 👀 Message seen status
- 🎨 Modern UI with Tailwind CSS

## Tech Stack



### Frontend
- React.js
- TailwindCSS
- Socket.IO Client
- React Router DOM
- Axios
- React Hot Toast

![My Skills](https://skillicons.dev/icons?i=html,tailwindcss,react,socket&theme=light&perline=3) 
### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT Authentication
- Cloudinary
- Bcrypt.js
  
![My Skills](https://skillicons.dev/icons?i=nodejs,express,mongodb,&theme=light&perline=3)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatapp.git
cd chatapp
```

2. Install Backend Dependencies:
```bash
cd Backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd Frontend
npm install
```

4. Configure Environment Variables:

Backend (.env):
```env
PORT=...
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Frontend (.env):
```env
VITE_BACKEND_URL="......"
```

5. Run the Application:

Backend:
```bash
cd Backend
npm run dev
```

Frontend:
```bash
cd Frontend
npm run dev
```

## Project Structure

```
chatapp/
├── Backend/
│   ├── Controllers/
│   ├── Database/
│   ├── Lib/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   ├── app.js
│   └── server.js
└── Frontend/
    ├── context/
    ├── src/
    │   ├── assets/
    │   ├── Components/
    │   ├── lib/
    │   ├── Pages/
    │   ├── App.jsx
    │   └── main.jsx
    └── index.html
```

## API Documentation

For detailed API documentation:
- [Backend API Documentation](Backend/ReadMe.md)
- [Frontend Documentation](Frontend/ReadMe.md)


## Key Features Explained

### Authentication
- JWT-based authentication system
- Secure password hashing with bcrypt
- Protected routes and middleware

### Real-time Communication
- Socket.IO for instant messaging
- Online/offline status tracking
- Message seen status
- Unread message counter

### File Handling
- Image upload and sharing
- Cloudinary integration for media storage
- Base64 image processing

### User Experience
- Responsive design for all devices
- Real-time updates and notifications
- Modern UI with Tailwind CSS
- Search functionality
- Profile customization


## Acknowledgments

- Socket.IO for real-time capabilities
- Cloudinary for image hosting
- MongoDB Atlas for database hosting
