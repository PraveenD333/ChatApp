# Chat Application Frontend

A modern real-time chat application built with React, Socket.IO, and TailwindCSS.

## Features

- 🔐 Authentication (Login/Signup)
- 👤 User Profile Management
- 💬 Real-time Messaging
- 🖼️ Image Sharing Support
- 🔴 Online Status Indicators
- 🔍 User Search
- 📱 Responsive Design

## Tech Stack

- **React** - Frontend Framework
- **Socket.IO-Client** - Real-time Communication
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP Client
- **React Hot Toast** - Notifications

## Project Structure

```
Frontend/
├── context/
│   ├── AuthContext.jsx    # Authentication context
│   └── ChatContext.jsx    # Chat management context
├── src/
│   ├── assets/           # Images and icons
│   ├── Components/       # Reusable components
│   ├── lib/             # Utility functions
│   ├── Pages/           # Page components
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
```

## Key Components

- **HomePage** - Main chat interface
- **LoginPage** - Authentication interface
- **ProfilePage** - User profile management
- **ChatContainer** - Message display and input
- **Sidebar** - User list and search
- **RightSidebar** - Selected user info and media

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_BACKEND_URL=your_backend_url
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

- `VITE_BACKEND_URL` - URL of the backend server

## Features Explained

### Authentication
- JWT-based authentication
- Profile picture upload
- Bio update functionality

### Real-time Chat
- Instant message delivery
- Online/offline status
- Image sharing
- Message seen status
- Unread message counter

### UI/UX
- Responsive design for all devices
- Search functionality for users
- Loading states and animations
- Toast notifications
- Image preview