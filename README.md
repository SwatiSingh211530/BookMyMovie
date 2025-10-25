# 🎬 BookMyMovie - MERN Stack Movie Ticket Booking Application

A comprehensive full-stack web application for movie ticket booking built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, role-based access control, and modern UI/UX design.

## � Features

### 👤 User Features
- **🔐 Secure Authentication**: JWT-based registration and login system
- **🎭 Browse Movies**: View available movies with detailed information
- **🏢 Theatre Selection**: Choose from available theatres and showtimes
- **💺 Interactive Seat Booking**: Real-time seat selection and booking
- **📜 Booking History**: View past and upcoming bookings with details
- **👤 Profile Management**: Update user profile and preferences

### 👨‍💼 Admin Features
- **🎬 Movie Management**: Add, edit, delete, and manage movie catalog
- **🏢 Theatre Management**: Complete theatre information and seating management
- **📅 Show Management**: Create and manage movie shows, timings, and schedules
- **👥 User Management**: View and manage user accounts and permissions
- **📊 Analytics Dashboard**: Comprehensive booking and revenue analytics

### 🏪 Theatre Owner Features
- **🏢 Theatre Registration**: Register and manage theatre details
- **⏰ Show Scheduling**: Create shows for movies with flexible timing
- **📊 Booking Analytics**: View detailed booking statistics and reports
- **💰 Revenue Tracking**: Monitor earnings and performance metrics

## 🛠️ Tech Stack

### **Frontend:**
- **React 18** - Modern JavaScript library for building user interfaces
- **Redux Toolkit** - State management with predictable state container
- **Ant Design (antd)** - Professional UI component library
- **React Router v6** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client for API calls
- **Moment.js** - Parse, validate, manipulate, and display dates

### **Backend:**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose ODM** - Elegant MongoDB object modeling for Node.js
- **JWT (jsonwebtoken)** - Secure authentication with JSON Web Tokens
- **bcrypt.js** - Library for hashing passwords
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
mern-bookmymovie-application/
├── 📄 README.md
├── 📄 package.json
├── 📄 nodemon.json
├── 📁 client/                          # React Frontend Application
│   ├── 📄 package.json
│   ├── 📄 vercel.json                  # Vercel deployment configuration
│   ├── 📁 public/
│   │   ├── 📄 index.html
│   │   ├── 📄 manifest.json
│   │   └── 📄 robots.txt
│   └── 📁 src/
│       ├── 📄 App.js                   # Main App component
│       ├── 📄 index.js                 # React DOM entry point
│       ├── 📄 index.css                # Global styles
│       ├── 📁 apicalls/                # API service functions
│       │   ├── 📄 index.js             # Axios configuration
│       │   ├── 📄 movies.jsx           # Movie-related API calls
│       │   ├── 📄 theatres.jsx         # Theatre-related API calls
│       │   └── 📄 users.js             # User-related API calls
│       ├── 📁 components/              # Reusable React components
│       │   ├── 📄 Button.jsx           # Custom button component
│       │   ├── 📄 MovieDetailsModal.jsx # Movie details modal
│       │   ├── 📄 PageTitle.jsx        # Page title component
│       │   └── 📄 ProtectedRoute.jsx   # Route protection component
│       ├── 📁 pages/                   # Page components
│       │   ├── 📁 Admin/               # Admin panel pages
│       │   │   ├── 📄 index.jsx        # Admin dashboard
│       │   │   ├── 📄 MovieForm.jsx    # Add/Edit movie form
│       │   │   ├── 📄 MoviesList.jsx   # Movies management
│       │   │   └── 📄 TheatresList.jsx # Theatres management
│       │   ├── 📁 BookShow/            # Show booking functionality
│       │   │   └── 📄 index.jsx        # Seat selection and booking
│       │   ├── 📁 Home/                # Home page
│       │   │   └── 📄 index.jsx        # Movies catalog display
│       │   ├── 📁 Login/               # Authentication
│       │   │   └── 📄 index.jsx        # Login form
│       │   ├── 📁 Profile/             # User profile management
│       │   │   ├── 📄 index.jsx        # Profile dashboard
│       │   │   ├── 📄 TheatreForm.jsx  # Theatre owner forms
│       │   │   ├── 📄 TheatresList.jsx # Theatre owner theatres
│       │   │   └── 📁 Shows/           # Show management
│       │   │       └── 📄 index.jsx    # Shows list and creation
│       │   ├── 📁 Register/            # User registration
│       │   │   └── 📄 index.jsx        # Registration form
│       │   └── 📁 TheatresForMovie/    # Theatre selection
│       │       └── 📄 index.jsx        # Theatre list for selected movie
│       ├── 📁 redux/                   # State management
│       │   ├── 📄 store.jsx            # Redux store configuration
│       │   ├── 📄 loadersSlice.jsx     # Loading states management
│       │   └── 📄 usersSlice.jsx       # User state management
│       ├── 📁 stylesheets/             # CSS styling
│       │   ├── 📄 alignments.css       # Layout and alignment styles
│       │   ├── 📄 custom.css           # Custom component styles
│       │   ├── 📄 form-elements.css    # Form styling
│       │   ├── 📄 sizes.css            # Size utilities
│       │   └── 📄 theme.css            # Theme and color variables
│       └── 📁 utils/                   # Utility functions
│           └── 📄 tokenCleanup.js      # JWT token management
└── 📁 server/                          # Node.js Backend Application
    ├── 📄 package.json
    ├── 📄 server.js                    # Express server entry point
    ├── 📄 seedUsers.js                 # Database seeding script
    ├── 📄 updateAdminPassword.js       # Admin password update utility
    ├── 📄 .env.template                # Environment variables template
    ├── 📁 config/                      # Configuration files
    │   └── 📄 dbConfig.js              # MongoDB connection configuration
    ├── 📁 middlewares/                 # Express middlewares
    │   └── 📄 authMiddleware.js        # JWT authentication middleware
    ├── 📁 models/                      # Mongoose data models
    │   ├── 📄 userModel.js             # User schema and model
    │   ├── 📄 movieModel.js            # Movie schema and model
    │   ├── 📄 theatreModel.js          # Theatre schema and model
    │   └── 📄 showModel.js             # Show schema and model
    └── � routes/                      # API route handlers
        ├── 📄 userRoute.js             # User authentication and profile routes
        ├── 📄 moviesRoute.js           # Movie management routes
        └── 📄 theatresRoute.js         # Theatre and show management routes
```

## 🚀 Installation & Setup

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
# Navigate to server directory and install dependencies
cd server
npm install
```

### 3. Install Client Dependencies

```bash
# Navigate to client directory and install dependencies  
cd ../client
npm install
cd ..
```

### 4. Environment Configuration

#### Server Environment Setup
Create a `.env` file in the `server/` directory:

```env
# Database Configuration
mongodb_url=mongodb://localhost:27017/bookmymovie

# JWT Configuration
jwt_secret=4b703f964249d38df92f493a3e2413eb3bf947e90111c3ae41405869509d2908531b7e12e09bfd482d450d341be0f48fa87d17c709c18e19d3a2b16c18efbe95

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

#### Client Environment Setup
Create a `.env` file in the `client/` directory:

```env
# API Configuration
REACT_APP_SERVER_URL=http://localhost:5000
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### 5. Database Setup

#### Option 1: Local MongoDB
- Ensure MongoDB is running on your system
- The application will automatically create the database and collections
- Default connection: `mongodb://localhost:27017/bookmymovie`

#### Option 2: MongoDB Atlas (Cloud)
- Create a MongoDB Atlas account
- Create a new cluster
- Update the `mongodb_url` in your `.env` file with your Atlas connection string

### 6. Initialize Database (Optional)
Run the seed script to populate initial data:

```bash
cd server
node seedUsers.js
```

## 🎯 Running the Application

### Development Mode

#### Start the Backend Server
```bash
cd server
npm run dev
# or
npm start
```
Server will start on: `http://localhost:5000`

#### Start the Frontend Development Server
```bash
cd client  
npm start
```
Client will start on: `http://localhost:3000`

### Production Mode

#### Build the Client
```bash
cd client
npm run build
```

#### Start Production Server
```bash
cd server
npm run prod
```

## 🔑 Default Users & Authentication

The application includes pre-configured users for testing:

### Admin User
- **Email:** `admin@bookmymovie.com`
- **Password:** `admin123`
- **Role:** Administrator
- **Permissions:** Full access to all features

### Theatre Owner
- **Email:** `theatre@bookmymovie.com`  
- **Password:** `theatre123`
- **Role:** Theatre Owner
- **Permissions:** Theatre and show management

### Regular User
- **Email:** `user@bookmymovie.com`
- **Password:** `user123`
- **Role:** User
- **Permissions:** Browse and book tickets

## 🌐 API Documentation

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

### Booking Endpoints
```http
POST   /api/bookings/book-show              # Book show tickets
GET    /api/bookings/get-bookings-by-user   # Get user bookings
```

## 🎨 UI/UX Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎯 Intuitive Navigation**: Easy-to-use interface with clear navigation
- **💫 Modern UI**: Built with Ant Design for professional appearance
- **🔄 Real-time Updates**: Dynamic content updates without page refresh
- **📊 Interactive Components**: Engaging user interactions and feedback
- **🎭 Movie Cards**: Beautiful movie display with posters and details
- **💺 Seat Selection**: Interactive theatre seating layout
- **📅 Date/Time Selection**: Easy show timing selection interface

## 🔧 Configuration Files

### Server Configuration (`server/server.js`)
- Express.js server setup
- MongoDB connection
- CORS configuration
- JWT authentication middleware
- API route registration

### Client Configuration (`client/src/config/apiConfig.js`)
- Axios instance configuration
- API base URL setup
- Request/response interceptors
- Authentication token management

### Database Models
- **User Model**: User authentication and profile data
- **Movie Model**: Movie information and metadata
- **Theatre Model**: Theatre details and seating configuration
- **Show Model**: Show schedules and pricing information

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect to Vercel:**
   - Link your GitHub repository to Vercel
   - Set the root directory to `client/`

2. **Environment Variables:**
   ```
   REACT_APP_SERVER_URL=https://your-backend-domain.com
   REACT_APP_API_BASE_URL=https://your-backend-domain.com/api
   ```

### Backend Deployment (Railway/Heroku/Render)

1. **Environment Variables:**
   ```
   mongodb_url=your_mongodb_atlas_connection_string
   jwt_secret=your_secure_jwt_secret
   PORT=5000
   CLIENT_URL=https://your-frontend-domain.com
   ```

2. **Build Commands:**
   ```bash
   npm install
   npm start
   ```

## � Security Features

- **🛡️ JWT Authentication**: Secure token-based authentication
- **🔐 Password Hashing**: bcrypt.js for secure password storage
- **🚪 Route Protection**: Protected routes with authentication middleware
- **👥 Role-Based Access**: Different permissions for users, owners, and admins
- **🔄 Token Refresh**: Automatic token validation and refresh
- **🛡️ CORS Protection**: Cross-origin request security
- **🔍 Input Validation**: Server-side validation for all inputs

## 🧪 Testing

### Run Tests
```bash
# Client tests
cd client
npm test

# Server tests  
cd server
npm test
```

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Admin movie management
- [ ] Theatre owner theatre creation
- [ ] Movie browsing and filtering
- [ ] Show selection and seat booking
- [ ] Booking history and profile management

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features
- Ensure responsive design compatibility

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```bash
# Check if MongoDB is running
sudo systemctl status mongod
# Start MongoDB
sudo systemctl start mongod
```

**Port Already in Use:**
```bash
# Kill process on port 5000
sudo kill -9 $(lsof -t -i:5000)
# Or change PORT in .env file
```

**JWT Token Issues:**
- Ensure JWT_SECRET is properly set in environment variables
- Check token expiration in browser developer tools
- Clear browser localStorage if needed

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Swati Singh**
- GitHub: [@SwatiSingh211530](https://github.com/SwatiSingh211530)
- LinkedIn: [Swati Singh](https://linkedin.com/in/swati-singh)
- Email: swatisingh211530@gmail.com

## 🙏 Acknowledgments

- **React Team** for the amazing frontend library
- **Express.js** for the robust backend framework
- **MongoDB** for the flexible database solution
- **Ant Design** for the beautiful UI components
- **Vercel** for seamless frontend deployment
- **Open Source Community** for continuous inspiration

---

⭐ **Star this repository if you found it helpful!**

🎬 **Happy Movie Booking!** 🍿
- `GET /api/users/get-current-user` - Get current user info

### Movies

- `GET /api/movies/get-all-movies` - Get all movies
- `POST /api/movies/add-movie` - Add new movie (Admin only)
- `PUT /api/movies/update-movie` - Update movie (Admin only)
- `DELETE /api/movies/delete-movie` - Delete movie (Admin only)

### Theatres

- `GET /api/theatres/get-all-theatres` - Get all theatres
- `POST /api/theatres/add-theatre` - Add new theatre
- `PUT /api/theatres/update-theatre` - Update theatre
- `DELETE /api/theatres/delete-theatre` - Delete theatre

## 🎨 UI Components

The application uses Ant Design components for a consistent and professional look:

- Forms and inputs
- Tables and data display
- Navigation and layout
- Buttons and actions
- Modals and overlays

## 🔧 Development

### Available Scripts

In the root directory:

- `npm start` - Start the backend server
- `npm test` - Run tests (placeholder)

In the client directory:

- `npm start` - Start React development server
- `npm build` - Build for production
- `npm test` - Run React tests

## 🚀 Deployment

### Backend Deployment

1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection is configured
3. Deploy the root directory

### Frontend Deployment

1. Build the React app: `cd client && npm run build`
2. Deploy the `client/build` folder to a static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Swati Singh**

- GitHub: [SwatiSingh211530](https://github.com/SwatiSingh211530/BookMyMovie.git)

## 🙏 Acknowledgments

- Thanks to the MERN stack community for excellent documentation
- Ant Design team for the beautiful UI components
- MongoDB team for the robust database solution

---

⭐ Star this repository if you found it helpful!
#   B o o k M y M o v i e 
 
 #   B o o k M y M o v i e  
 