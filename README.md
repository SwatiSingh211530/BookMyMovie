# BookMyMovie - MERN Stack Movie Ticket Booking Application

A comprehensive full-stack web application for movie ticket booking built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, role-based access control, and modern UI/UX design.
## 🌐 Live Demo

👉 **[https://book-my-movie23.vercel.app/](https://book-my-movie23.vercel.app/)**

Test the live version of the app and explore user, admin, and theatre owner features in real-time!


## Features

### User Features

- **Secure Authentication**: JWT-based registration and login system
- **Browse Movies**: View available movies with detailed information
- **Theatre Selection**: Choose from available theatres and showtimes
- **Interactive Seat Booking**: Real-time seat selection and booking
- **Booking History**: View past and upcoming bookings with details
- **Profile Management**: Update user profile and preferences

### Admin Features

- **Movie Management**: Add, edit, delete, and manage movie catalog
- **Theatre Management**: Complete theatre information and seating management
- **Show Management**: Create and manage movie shows, timings, and schedules
- **User Management**: View and manage user accounts and permissions
- **Analytics Dashboard**: Comprehensive booking and revenue analytics

### Theatre Owner Features

- **Theatre Registration**: Register and manage theatre details
- **Show Scheduling**: Create shows for movies with flexible timing
- **Booking Analytics**: View detailed booking statistics and reports
- **Revenue Tracking**: Monitor earnings and performance metrics

## Tech Stack

### Frontend

- **React 18** - Modern JavaScript library for building user interfaces
- **Redux Toolkit** - State management with predictable state container
- **Ant Design (antd)** - Professional UI component library
- **React Router v6** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client for API calls
- **Moment.js** - Parse, validate, manipulate, and display dates

### Backend

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose ODM** - Elegant MongoDB object modeling for Node.js
- **JWT (jsonwebtoken)** - Secure authentication with JSON Web Tokens
- **bcrypt.js** - Library for hashing passwords
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## Project Structure

```
mern-bookmymovie-application/
├── README.md
├── package.json
├── nodemon.json
├── client/
│   ├── package.json
│   ├── vercel.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── index.css
│       ├── apicalls/
│       │   ├── index.js
│       │   ├── movies.jsx
│       │   ├── theatres.jsx
│       │   └── users.js
│       ├── components/
│       │   ├── Button.jsx
│       │   ├── MovieDetailsModal.jsx
│       │   ├── PageTitle.jsx
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Admin/
│       │   │   ├── index.jsx
│       │   │   ├── MovieForm.jsx
│       │   │   ├── MoviesList.jsx
│       │   │   └── TheatresList.jsx
│       │   ├── BookShow/
│       │   │   └── index.jsx
│       │   ├── Home/
│       │   │   └── index.jsx
│       │   ├── Login/
│       │   │   └── index.jsx
│       │   ├── Profile/
│       │   │   ├── index.jsx
│       │   │   ├── TheatreForm.jsx
│       │   │   ├── TheatresList.jsx
│       │   │   └── Shows/
│       │   │       └── index.jsx
│       │   ├── Register/
│       │   │   └── index.jsx
│       │   └── TheatresForMovie/
│       │       └── index.jsx
│       ├── redux/
│       │   ├── store.jsx
│       │   ├── loadersSlice.jsx
│       │   └── usersSlice.jsx
│       ├── stylesheets/
│       │   ├── alignments.css
│       │   ├── custom.css
│       │   ├── form-elements.css
│       │   ├── sizes.css
│       │   └── theme.css
│       └── utils/
│           └── tokenCleanup.js
└── server/
    ├── package.json
    ├── server.js
    ├── seedUsers.js
    ├── updateAdminPassword.js
    ├── config/
    │   └── dbConfig.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── models/
    │   ├── userModel.js
    │   ├── movieModel.js
    │   ├── theatreModel.js
    │   └── showModel.js
    └── routes/
        ├── userRoute.js
        ├── moviesRoute.js
        └── theatresRoute.js
```

## Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas) - [Download here](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager (comes with Node.js)
- **Git** for version control - [Download here](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/SwatiSingh211530/BookMyMovie.git
cd BookMyMovie
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd client
npm install
cd ..
```

### 4. Environment Configuration

#### Server Environment Setup

Create a `.env` file in the `server/` directory:

```env
mongodb_url=mongodb://localhost:27017/bookmymovie
jwt_secret=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

#### Client Environment Setup

Create a `.env` file in the `client/` directory:

```env
REACT_APP_SERVER_URL=http://localhost:5000
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### 5. Database Setup

#### Option 1: Local MongoDB

- Ensure MongoDB is running on your system
- The application will automatically create the database and collections

#### Option 2: MongoDB Atlas (Cloud)

- Create a MongoDB Atlas account
- Create a new cluster
- Update the `mongodb_url` in your `.env` file with your Atlas connection string

### 6. Initialize Database (Optional)

```bash
cd server
node seedUsers.js
```

## Running the Application

### Development Mode

#### Start the Backend Server

```bash
cd server
npm start
```

Server will start on: `http://localhost:5000`

#### Start the Frontend Development Server

```bash
cd client
npm start
```

Client will start on: `http://localhost:3000`

## Default Users & Authentication

### Admin User

- **Email:** `admin@bookmymovie.com`
- **Password:** `admin123`
- **Role:** Administrator

### Theatre Owner

- **Email:** `theatre@bookmymovie.com`
- **Password:** `theatre123`
- **Role:** Theatre Owner

### Regular User

- **Email:** `user@bookmymovie.com`
- **Password:** `user123`
- **Role:** User

## API Documentation

### Authentication Endpoints

```http
POST   /api/users/register          # Register new user
POST   /api/users/login            # User login
GET    /api/users/get-current-user  # Get current user info
```

### Movie Management Endpoints

```http
GET    /api/movies/get-all-movies   # Get all movies
POST   /api/movies/add-movie        # Add new movie (Admin)
PUT    /api/movies/update-movie     # Update movie (Admin)
DELETE /api/movies/delete-movie     # Delete movie (Admin)
GET    /api/movies/get-movie-by-id  # Get movie details
```

### Theatre Management Endpoints

```http
GET    /api/theatres/get-all-theatres        # Get all theatres
POST   /api/theatres/add-theatre             # Add theatre (Owner)
PUT    /api/theatres/update-theatre          # Update theatre (Owner)
DELETE /api/theatres/delete-theatre          # Delete theatre (Owner)
GET    /api/theatres/get-theatres-by-owner   # Get owner's theatres
```

### Show Management Endpoints

```http
POST   /api/theatres/add-show               # Add new show (Owner)
GET    /api/theatres/get-all-shows-by-movie # Get shows for movie
PUT    /api/theatres/update-show            # Update show (Owner)
DELETE /api/theatres/delete-show            # Delete show (Owner)
```

## Key Features

### User Interface

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Built with Ant Design for professional appearance
- **Real-time Updates**: Dynamic content updates without page refresh
- **Interactive Components**: Engaging user interactions and feedback

### Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt.js for secure password storage
- **Route Protection**: Protected routes with authentication middleware
- **Role-Based Access**: Different permissions for users, owners, and admins

## Deployment

### Frontend Deployment (Vercel)

1. Link your GitHub repository to Vercel
2. Set the root directory to `client/`
3. Set environment variables:

   ```
   REACT_APP_SERVER_URL=https://your-backend-domain.com
   REACT_APP_API_BASE_URL=https://your-backend-domain.com/api
   ```

### Backend Deployment (Railway/Heroku/Render)

1. Set environment variables:

   ```
   mongodb_url=your_mongodb_atlas_connection_string
   jwt_secret=your_secure_jwt_secret
   PORT=5000
   CLIENT_URL=https://your-frontend-domain.com
   ```

## Testing

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Admin movie management
- [ ] Theatre owner theatre creation
- [ ] Movie browsing and filtering
- [ ] Show selection and seat booking
- [ ] Booking history and profile management

## Troubleshooting

### Common Issues

**MongoDB Connection Error:**

```bash
# Check if MongoDB is running (Linux/Mac)
sudo systemctl status mongod
# Start MongoDB
sudo systemctl start mongod
```

**Port Already in Use:**

```bash
# Kill process on port 5000
sudo kill -9 $(lsof -t -i:5000)
```

**JWT Token Issues:**

- Ensure JWT_SECRET is properly set in environment variables
- Check token expiration in browser developer tools
- Clear browser localStorage if needed

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is licensed under the **MIT License**.

## Author

**Swati Singh**

- GitHub: [@SwatiSingh211530](https://github.com/SwatiSingh211530)
- Email: <swatisingh211530@gmail.com>

## Acknowledgments

- React Team for the amazing frontend library
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- Ant Design for the beautiful UI components
- Open Source Community for continuous inspiration

---

**Star this repository if you found it helpful!**

**Happy Movie Booking!**
