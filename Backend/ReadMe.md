# Chat App Backend API Documentation

## Authentication Endpoints

### 1. Sign Up
```http
POST /api/auth/signup
```

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "bio": "string"
}
```

**Response:**
```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "newUser": {
    "_id": "string",
    "fullName": "string",
    "email": "string",
    "bio": "string",
    "profilePic": "string",
    "createdAt": "date",
    "updatedAt": "date"
  },
  "message": "Account Created Successfully"
}
```

### 2. Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "_id": "string",
    "fullName": "string",
    "email": "string",
    "bio": "string",
    "profilePic": "string"
  },
  "message": "Login Successfully"
}
```

### 3. Update Profile
```http
PUT /api/auth/update-profile
```

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Request Body:**
```json
{
  "fullName": "string",
  "bio": "string",
  "profilePic": "base64_string" // Optional
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "string",
    "fullName": "string",
    "email": "string",
    "bio": "string",
    "profilePic": "string"
  }
}
```

## Message Endpoints

### 1. Get Users for Sidebar
```http
GET /api/messages/users
```

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response:**
```json
{
  "success": true,
  "users": [
    {
      "_id": "string",
      "fullName": "string",
      "email": "string",
      "profilePic": "string",
      "bio": "string"
    }
  ],
  "unseenMessages": {
    "userId": "number"
  }
}
```

### 2. Get Messages with User
```http
GET /api/messages/:id
```

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response:**
```json
{
  "success": true,
  "messages": [
    {
      "_id": "string",
      "senderId": "string",
      "receiverId": "string",
      "text": "string",
      "image": "string",
      "seen": boolean,
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

### 3. Send Message
```http
POST /api/messages/send/:id
```

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Request Body:**
```json
{
  "text": "string",
  "image": "base64_string" // Optional
}
```

**Response:**
```json
{
  "success": true,
  "newMessage": {
    "_id": "string",
    "senderId": "string",
    "receiverId": "string",
    "text": "string",
    "image": "string",
    "seen": false,
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

### 4. Mark Message as Seen
```http
PUT /api/messages/mark/:id
```

**Headers:**
```
Authorization: Bearer JWT_TOKEN
```

**Response:**
```json
{
  "success": true
}
```

## Error Responses
All endpoints may return the following error response:

```json