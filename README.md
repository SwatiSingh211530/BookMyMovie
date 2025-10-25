# BookMyMovie - MERN Stack Movie Ticket Booking Application# BookMyMovie - MERN Stack Movie Ticket Booking Application



A comprehensive full-stack web application for movie ticket booking built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, role-based access control, and modern UI/UX design.A comprehensive full-stack web application for movie ticket booking built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, role-based access control, and modern UI/UX design.



## Features## Features



### User Features### User Features



- **Secure Authentication**: JWT-based registration and login system- **Secure Authentication**: JWT-based registration and login system

- **Browse Movies**: View available movies with detailed information- **Browse Movies**: View available movies with detailed information  

- **Theatre Selection**: Choose from available theatres and showtimes- **Theatre Selection**: Choose from available theatres and showtimes

- **Interactive Seat Booking**: Real-time seat selection and booking- **Interactive Seat Booking**: Real-time seat selection and booking

- **Booking History**: View past and upcoming bookings with details- **Booking History**: View past and upcoming bookings with details

- **Profile Management**: Update user profile and preferences- **Profile Management**: Update user profile and preferences



### Admin Features### Admin Features  



- **Movie Management**: Add, edit, delete, and manage movie catalog- **Movie Management**: Add, edit, delete, and manage movie catalog

- **Theatre Management**: Complete theatre information and seating management- **Theatre Management**: Complete theatre information and seating management

- **Show Management**: Create and manage movie shows, timings, and schedules- **Show Management**: Create and manage movie shows, timings, and schedules

- **User Management**: View and manage user accounts and permissions- **User Management**: View and manage user accounts and permissions

- **Analytics Dashboard**: Comprehensive booking and revenue analytics- **Analytics Dashboard**: Comprehensive booking and revenue analytics



### Theatre Owner Features### Theatre Owner Features



- **Theatre Registration**: Register and manage theatre details- **Theatre Registration**: Register and manage theatre details

- **Show Scheduling**: Create shows for movies with flexible timing- **Show Scheduling**: Create shows for movies with flexible timing  

- **Booking Analytics**: View detailed booking statistics and reports- **Booking Analytics**: View detailed booking statistics and reports

- **Revenue Tracking**: Monitor earnings and performance metrics- **Revenue Tracking**: Monitor earnings and performance metrics



## Tech Stack## Tech Stack



### Frontend### Frontend:



- **React 18** - Modern JavaScript library for building user interfaces- **React 18** - Modern JavaScript library for building user interfaces

- **Redux Toolkit** - State management with predictable state container- **Redux Toolkit** - State management with predictable state container  

- **Ant Design (antd)** - Professional UI component library- **Ant Design (antd)** - Professional UI component library

- **React Router v6** - Declarative routing for React applications- **React Router v6** - Declarative routing for React applications

- **Axios** - Promise-based HTTP client for API calls- **Axios** - Promise-based HTTP client for API calls

- **Moment.js** - Parse, validate, manipulate, and display dates- **Moment.js** - Parse, validate, manipulate, and display dates



### Backend### Backend:



- **Node.js** - JavaScript runtime for server-side development- **Node.js** - JavaScript runtime for server-side development

- **Express.js** - Fast, unopinionated web framework for Node.js- **Express.js** - Fast, unopinionated web framework for Node.js

- **MongoDB** - NoSQL database for flexible data storage- **MongoDB** - NoSQL database for flexible data storage

- **Mongoose ODM** - Elegant MongoDB object modeling for Node.js- **Mongoose ODM** - Elegant MongoDB object modeling for Node.js

- **JWT (jsonwebtoken)** - Secure authentication with JSON Web Tokens- **JWT (jsonwebtoken)** - Secure authentication with JSON Web Tokens

- **bcrypt.js** - Library for hashing passwords- **bcrypt.js** - Library for hashing passwords

- **cors** - Cross-Origin Resource Sharing middleware- **cors** - Cross-Origin Resource Sharing middleware

- **dotenv** - Environment variable management- **dotenv** - Environment variable management



## Project Structure## Project Structure



``````

mern-bookmymovie-application/mern-bookmymovie-application/

├── README.md├── README.md

├── package.json├── package.json  

├── nodemon.json├── nodemon.json

├── client/                           # React Frontend Application├── client/                           # React Frontend Application

│   ├── package.json│   ├── package.json

│   ├── vercel.json                   # Vercel deployment configuration│   ├── vercel.json                   # Vercel deployment configuration

│   ├── public/│   ├── public/

│   │   ├── index.html│   │   ├── index.html

│   │   ├── manifest.json│   │   ├── manifest.json

│   │   └── robots.txt│   │   └── robots.txt

│   └── src/│   └── src/

│       ├── App.js                    # Main App component│       ├── App.js                    # Main App component

│       ├── index.js                  # React DOM entry point│       ├── index.js                  # React DOM entry point

│       ├── index.css                 # Global styles│       ├── index.css                 # Global styles

│       ├── apicalls/                 # API service functions│       ├── apicalls/                 # API service functions

│       │   ├── index.js              # Axios configuration│       │   ├── index.js              # Axios configuration

│       │   ├── movies.jsx            # Movie-related API calls│       │   ├── movies.jsx            # Movie-related API calls

│       │   ├── theatres.jsx          # Theatre-related API calls│       │   ├── theatres.jsx          # Theatre-related API calls

│       │   └── users.js              # User-related API calls│       │   └── users.js              # User-related API calls

│       ├── components/               # Reusable React components│       ├── components/               # Reusable React components

│       │   ├── Button.jsx            # Custom button component│       │   ├── Button.jsx            # Custom button component

│       │   ├── MovieDetailsModal.jsx # Movie details modal│       │   ├── MovieDetailsModal.jsx # Movie details modal

│       │   ├── PageTitle.jsx         # Page title component│       │   ├── PageTitle.jsx         # Page title component

│       │   └── ProtectedRoute.jsx    # Route protection component│       │   └── ProtectedRoute.jsx    # Route protection component

│       ├── pages/                    # Page components│       ├── pages/                    # Page components

│       │   ├── Admin/                # Admin panel pages│       │   ├── Admin/                # Admin panel pages

│       │   │   ├── index.jsx         # Admin dashboard│       │   │   ├── index.jsx         # Admin dashboard

│       │   │   ├── MovieForm.jsx     # Add/Edit movie form│       │   │   ├── MovieForm.jsx     # Add/Edit movie form

│       │   │   ├── MoviesList.jsx    # Movies management│       │   │   ├── MoviesList.jsx    # Movies management

│       │   │   └── TheatresList.jsx  # Theatres management│       │   │   └── TheatresList.jsx  # Theatres management

│       │   ├── BookShow/             # Show booking functionality│       │   ├── BookShow/             # Show booking functionality

│       │   │   └── index.jsx         # Seat selection and booking│       │   │   └── index.jsx         # Seat selection and booking

│       │   ├── Home/                 # Home page│       │   ├── Home/                 # Home page

│       │   │   └── index.jsx         # Movies catalog display│       │   │   └── index.jsx         # Movies catalog display

│       │   ├── Login/                # Authentication│       │   ├── Login/                # Authentication

│       │   │   └── index.jsx         # Login form│       │   │   └── index.jsx         # Login form

│       │   ├── Profile/              # User profile management│       │   ├── Profile/              # User profile management

│       │   │   ├── index.jsx         # Profile dashboard│       │   │   ├── index.jsx         # Profile dashboard

│       │   │   ├── TheatreForm.jsx   # Theatre owner forms│       │   │   ├── TheatreForm.jsx   # Theatre owner forms

│       │   │   ├── TheatresList.jsx  # Theatre owner theatres│       │   │   ├── TheatresList.jsx  # Theatre owner theatres

│       │   │   └── Shows/            # Show management│       │   │   └── Shows/            # Show management

│       │   │       └── index.jsx     # Shows list and creation│       │   │       └── index.jsx     # Shows list and creation

│       │   ├── Register/             # User registration│       │   ├── Register/             # User registration

│       │   │   └── index.jsx         # Registration form│       │   │   └── index.jsx         # Registration form

│       │   └── TheatresForMovie/     # Theatre selection│       │   └── TheatresForMovie/     # Theatre selection

│       │       └── index.jsx         # Theatre list for selected movie│       │       └── index.jsx         # Theatre list for selected movie

│       ├── redux/                    # State management│       ├── redux/                    # State management

│       │   ├── store.jsx             # Redux store configuration│       │   ├── store.jsx             # Redux store configuration

│       │   ├── loadersSlice.jsx      # Loading states management│       │   ├── loadersSlice.jsx      # Loading states management

│       │   └── usersSlice.jsx        # User state management│       │   └── usersSlice.jsx        # User state management

│       ├── stylesheets/              # CSS styling│       ├── stylesheets/              # CSS styling

│       │   ├── alignments.css        # Layout and alignment styles│       │   ├── alignments.css        # Layout and alignment styles

│       │   ├── custom.css            # Custom component styles│       │   ├── custom.css            # Custom component styles

│       │   ├── form-elements.css     # Form styling│       │   ├── form-elements.css     # Form styling

│       │   ├── sizes.css             # Size utilities│       │   ├── sizes.css             # Size utilities

│       │   └── theme.css             # Theme and color variables│       │   └── theme.css             # Theme and color variables

│       └── utils/                    # Utility functions│       └── utils/                    # Utility functions

│           └── tokenCleanup.js       # JWT token management│           └── tokenCleanup.js       # JWT token management

└── server/                           # Node.js Backend Application└── server/                           # Node.js Backend Application

    ├── package.json    ├── package.json

    ├── server.js                     # Express server entry point    ├── server.js                     # Express server entry point

    ├── seedUsers.js                  # Database seeding script    ├── seedUsers.js                  # Database seeding script

    ├── updateAdminPassword.js        # Admin password update utility    ├── updateAdminPassword.js        # Admin password update utility

    ├── .env.template                 # Environment variables template    ├── .env.template                 # Environment variables template

    ├── config/                       # Configuration files    ├── config/                       # Configuration files

    │   └── dbConfig.js               # MongoDB connection configuration    │   └── dbConfig.js               # MongoDB connection configuration

    ├── middlewares/                  # Express middlewares    ├── middlewares/                  # Express middlewares

    │   └── authMiddleware.js         # JWT authentication middleware    │   └── authMiddleware.js         # JWT authentication middleware

    ├── models/                       # Mongoose data models    ├── models/                       # Mongoose data models

    │   ├── userModel.js              # User schema and model    │   ├── userModel.js              # User schema and model

    │   ├── movieModel.js             # Movie schema and model    │   ├── movieModel.js             # Movie schema and model

    │   ├── theatreModel.js           # Theatre schema and model    │   ├── theatreModel.js           # Theatre schema and model

    │   └── showModel.js              # Show schema and model    │   └── showModel.js              # Show schema and model

    └── routes/                       # API route handlers    └── routes/                       # API route handlers

        ├── userRoute.js              # User authentication and profile routes        ├── userRoute.js              # User authentication and profile routes

        ├── moviesRoute.js            # Movie management routes        ├── moviesRoute.js            # Movie management routes

        └── theatresRoute.js          # Theatre and show management routes        └── theatresRoute.js          # Theatre and show management routes

``````



## Installation & Setup## Installation & Setup



### Prerequisites### Prerequisites



- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)

- **MongoDB** (local installation or MongoDB Atlas) - [Download here](https://www.mongodb.com/try/download/community)- **MongoDB** (local installation or MongoDB Atlas) - [Download here](https://www.mongodb.com/try/download/community)

- **npm** or **yarn** package manager (comes with Node.js)- **npm** or **yarn** package manager (comes with Node.js)

- **Git** for version control - [Download here](https://git-scm.com/)- **Git** for version control - [Download here](https://git-scm.com/)



### 1. Clone the Repository### 1. Clone the Repository



```bash```bash

git clone https://github.com/SwatiSingh211530/BookMyMovie.gitgit clone https://github.com/SwatiSingh211530/BookMyMovie.git

cd BookMyMoviecd BookMyMovie

``````



### 2. Install Server Dependencies### 2. Install Server Dependencies



```bash```bash

# Navigate to server directory and install dependencies# Navigate to server directory and install dependencies

cd servercd server

npm installnpm install

``````



### 3. Install Client Dependencies### 3. Install Client Dependencies



```bash```bash

# Navigate to client directory and install dependencies# Navigate to client directory and install dependencies  

cd ../clientcd ../client

npm installnpm install

cd ..cd ..

``````



### 4. Environment Configuration### 4. Environment Configuration



#### Server Environment Setup#### Server Environment Setup



Create a `.env` file in the `server/` directory:Create a `.env` file in the `server/` directory:



```env```env

# Database Configuration# Database Configuration

mongodb_url=mongodb://localhost:27017/bookmymoviemongodb_url=mongodb://localhost:27017/bookmymovie



# JWT Configuration# JWT Configuration

jwt_secret=4b703f964249d38df92f493a3e2413eb3bf947e90111c3ae41405869509d2908531b7e12e09bfd482d450d341be0f48fa87d17c709c18e19d3a2b16c18efbe95jwt_secret=4b703f964249d38df92f493a3e2413eb3bf947e90111c3ae41405869509d2908531b7e12e09bfd482d450d341be0f48fa87d17c709c18e19d3a2b16c18efbe95



# Server Configuration# Server Configuration

PORT=5000PORT=5000

NODE_ENV=developmentNODE_ENV=development



# CORS Configuration# CORS Configuration

CLIENT_URL=http://localhost:3000CLIENT_URL=http://localhost:3000

``````



#### Client Environment Setup#### Client Environment Setup



Create a `.env` file in the `client/` directory:Create a `.env` file in the `client/` directory:



```env```env

# API Configuration# API Configuration

REACT_APP_SERVER_URL=http://localhost:5000REACT_APP_SERVER_URL=http://localhost:5000

REACT_APP_API_BASE_URL=http://localhost:5000/apiREACT_APP_API_BASE_URL=http://localhost:5000/api

``````



### 5. Database Setup### 5. Database Setup



#### Option 1: Local MongoDB#### Option 1: Local MongoDB



- Ensure MongoDB is running on your system- Ensure MongoDB is running on your system

- The application will automatically create the database and collections- The application will automatically create the database and collections

- Default connection: `mongodb://localhost:27017/bookmymovie`- Default connection: `mongodb://localhost:27017/bookmymovie`



#### Option 2: MongoDB Atlas (Cloud)#### Option 2: MongoDB Atlas (Cloud)



- Create a MongoDB Atlas account- Create a MongoDB Atlas account

- Create a new cluster- Create a new cluster

- Update the `mongodb_url` in your `.env` file with your Atlas connection string- Update the `mongodb_url` in your `.env` file with your Atlas connection string



### 6. Initialize Database (Optional)### 6. Initialize Database (Optional)



Run the seed script to populate initial data:Run the seed script to populate initial data:



```bash```bash

cd servercd server

node seedUsers.jsnode seedUsers.js

``````



## Running the Application## 🎯 Running the Application



### Development Mode### Development Mode



#### Start the Backend Server#### Start the Backend Server



```bash```bash

cd servercd server

npm run devnpm run dev

# or# or

npm startnpm start

``````



Server will start on: `http://localhost:5000`Server will start on: `http://localhost:5000`



#### Start the Frontend Development Server#### Start the Frontend Development Server



```bash```bash

cd clientcd client  

npm startnpm start

``````



Client will start on: `http://localhost:3000`Client will start on: `http://localhost:3000`



### Production Mode### Production Mode



#### Build the Client#### Build the Client



```bash```bash

cd clientcd client

npm run buildnpm run build

``````



#### Start Production Server#### Start Production Server



```bash```bash

cd servercd server

npm run prodnpm run prod

``````



## Default Users & Authentication## 🔑 Default Users & Authentication



The application includes pre-configured users for testing:The application includes pre-configured users for testing:



### Admin User### Admin User



- **Email:** `admin@bookmymovie.com`- **Email:** `admin@bookmymovie.com`

- **Password:** `admin123`- **Password:** `admin123`

- **Role:** Administrator- **Role:** Administrator

- **Permissions:** Full access to all features- **Permissions:** Full access to all features



### Theatre Owner### Theatre Owner



- **Email:** `theatre@bookmymovie.com`- **Email:** `theatre@bookmymovie.com`  

- **Password:** `theatre123`- **Password:** `theatre123`

- **Role:** Theatre Owner- **Role:** Theatre Owner

- **Permissions:** Theatre and show management- **Permissions:** Theatre and show management



### Regular User### Regular User



- **Email:** `user@bookmymovie.com`- **Email:** `user@bookmymovie.com`

- **Password:** `user123`- **Password:** `user123`

- **Role:** User- **Role:** User

- **Permissions:** Browse and book tickets- **Permissions:** Browse and book tickets



## API Documentation## 🌐 API Documentation



### Authentication Endpoints### Authentication Endpoints



```http```http

POST   /api/users/register          # Register new userPOST   /api/users/register          # Register new user

POST   /api/users/login            # User loginPOST   /api/users/login            # User login

GET    /api/users/get-current-user  # Get current user infoGET    /api/users/get-current-user  # Get current user info

``````



### Movie Management Endpoints### Movie Management Endpoints



```http```http

GET    /api/movies/get-all-movies   # Get all moviesGET    /api/movies/get-all-movies   # Get all movies

POST   /api/movies/add-movie        # Add new movie (Admin)POST   /api/movies/add-movie        # Add new movie (Admin)

PUT    /api/movies/update-movie     # Update movie (Admin)PUT    /api/movies/update-movie     # Update movie (Admin)

DELETE /api/movies/delete-movie     # Delete movie (Admin)DELETE /api/movies/delete-movie     # Delete movie (Admin)

GET    /api/movies/get-movie-by-id  # Get movie detailsGET    /api/movies/get-movie-by-id  # Get movie details

``````



### Theatre Management Endpoints### Theatre Management Endpoints



```http```http

GET    /api/theatres/get-all-theatres        # Get all theatresGET    /api/theatres/get-all-theatres        # Get all theatres

POST   /api/theatres/add-theatre             # Add theatre (Owner)POST   /api/theatres/add-theatre             # Add theatre (Owner)

PUT    /api/theatres/update-theatre          # Update theatre (Owner)PUT    /api/theatres/update-theatre          # Update theatre (Owner)

DELETE /api/theatres/delete-theatre          # Delete theatre (Owner)DELETE /api/theatres/delete-theatre          # Delete theatre (Owner)

GET    /api/theatres/get-theatres-by-owner   # Get owner's theatresGET    /api/theatres/get-theatres-by-owner   # Get owner's theatres

``````



### Show Management Endpoints### Show Management Endpoints



```http```http

POST   /api/theatres/add-show               # Add new show (Owner)POST   /api/theatres/add-show               # Add new show (Owner)

GET    /api/theatres/get-all-shows-by-movie # Get shows for movieGET    /api/theatres/get-all-shows-by-movie # Get shows for movie

PUT    /api/theatres/update-show            # Update show (Owner)PUT    /api/theatres/update-show            # Update show (Owner)

DELETE /api/theatres/delete-show            # Delete show (Owner)DELETE /api/theatres/delete-show            # Delete show (Owner)

``````



### Booking Endpoints### Booking Endpoints



```http```http

POST   /api/bookings/book-show              # Book show ticketsPOST   /api/bookings/book-show              # Book show tickets

GET    /api/bookings/get-bookings-by-user   # Get user bookingsGET    /api/bookings/get-bookings-by-user   # Get user bookings

``````



## Key Features in Detail## 🎨 UI/UX Features



### User Interface- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile

- **🎯 Intuitive Navigation**: Easy-to-use interface with clear navigation

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile- **💫 Modern UI**: Built with Ant Design for professional appearance

- **Intuitive Navigation**: Easy-to-use interface with clear navigation- **🔄 Real-time Updates**: Dynamic content updates without page refresh

- **Modern UI**: Built with Ant Design for professional appearance- **📊 Interactive Components**: Engaging user interactions and feedback

- **Real-time Updates**: Dynamic content updates without page refresh- **🎭 Movie Cards**: Beautiful movie display with posters and details

- **Interactive Components**: Engaging user interactions and feedback- **💺 Seat Selection**: Interactive theatre seating layout

- **Movie Cards**: Beautiful movie display with posters and details- **📅 Date/Time Selection**: Easy show timing selection interface

- **Seat Selection**: Interactive theatre seating layout

- **Date/Time Selection**: Easy show timing selection interface## 🔧 Configuration Files



### Security Features### Server Configuration (`server/server.js`)



- **JWT Authentication**: Secure token-based authentication- Express.js server setup

- **Password Hashing**: bcrypt.js for secure password storage- MongoDB connection

- **Route Protection**: Protected routes with authentication middleware- CORS configuration

- **Role-Based Access**: Different permissions for users, owners, and admins- JWT authentication middleware

- **Token Refresh**: Automatic token validation and refresh- API route registration

- **CORS Protection**: Cross-origin request security

- **Input Validation**: Server-side validation for all inputs### Client Configuration (`client/src/config/apiConfig.js`)



## Deployment- Axios instance configuration

- API base URL setup

### Frontend Deployment (Vercel)- Request/response interceptors

- Authentication token management

1. **Connect to Vercel:**

   - Link your GitHub repository to Vercel### Database Models

   - Set the root directory to `client/`

- **User Model**: User authentication and profile data

2. **Environment Variables:**- **Movie Model**: Movie information and metadata

   ```- **Theatre Model**: Theatre details and seating configuration

   REACT_APP_SERVER_URL=https://your-backend-domain.com- **Show Model**: Show schedules and pricing information

   REACT_APP_API_BASE_URL=https://your-backend-domain.com/api

   ```## 🚀 Deployment



### Backend Deployment (Railway/Heroku/Render)### Frontend Deployment (Vercel)



1. **Environment Variables:**1. **Connect to Vercel:**

   ```   - Link your GitHub repository to Vercel

   mongodb_url=your_mongodb_atlas_connection_string   - Set the root directory to `client/`

   jwt_secret=your_secure_jwt_secret

   PORT=50002. **Environment Variables:**

   CLIENT_URL=https://your-frontend-domain.com

   ```   ```

   REACT_APP_SERVER_URL=https://your-backend-domain.com

2. **Build Commands:**   REACT_APP_API_BASE_URL=https://your-backend-domain.com/api

   ```bash   ```

   npm install

   npm start### Backend Deployment (Railway/Heroku/Render)

   ```

1. **Environment Variables:**

## Configuration Files

   ```

### Server Configuration (`server/server.js`)   mongodb_url=your_mongodb_atlas_connection_string

   jwt_secret=your_secure_jwt_secret

- Express.js server setup   PORT=5000

- MongoDB connection   CLIENT_URL=https://your-frontend-domain.com

- CORS configuration   ```

- JWT authentication middleware

- API route registration2. **Build Commands:**



### Client Configuration (`client/src/config/apiConfig.js`)   ```bash

   npm install

- Axios instance configuration   npm start

- API base URL setup   ```

- Request/response interceptors

- Authentication token management## � Security Features



### Database Models- **🛡️ JWT Authentication**: Secure token-based authentication

- **🔐 Password Hashing**: bcrypt.js for secure password storage

- **User Model**: User authentication and profile data- **🚪 Route Protection**: Protected routes with authentication middleware

- **Movie Model**: Movie information and metadata- **👥 Role-Based Access**: Different permissions for users, owners, and admins

- **Theatre Model**: Theatre details and seating configuration- **🔄 Token Refresh**: Automatic token validation and refresh

- **Show Model**: Show schedules and pricing information- **🛡️ CORS Protection**: Cross-origin request security

- **🔍 Input Validation**: Server-side validation for all inputs

## Testing

## 🧪 Testing

### Run Tests

### Run Tests

```bash

# Client tests```bash

cd client# Client tests

npm testcd client

npm test

# Server tests

cd server# Server tests  

npm testcd server

```npm test

```

### Manual Testing Checklist

### Manual Testing Checklist

- [ ] User registration and login

- [ ] Admin movie management- [ ] User registration and login

- [ ] Theatre owner theatre creation- [ ] Admin movie management

- [ ] Movie browsing and filtering- [ ] Theatre owner theatre creation

- [ ] Show selection and seat booking- [ ] Movie browsing and filtering

- [ ] Booking history and profile management- [ ] Show selection and seat booking

- [ ] Booking history and profile management

## Troubleshooting

## 🤝 Contributing

### Common Issues

1. **Fork the repository**

**MongoDB Connection Error:**2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`

3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`

```bash4. **Push to the branch**: `git push origin feature/AmazingFeature`

# Check if MongoDB is running5. **Open a Pull Request**

sudo systemctl status mongod

# Start MongoDB### Development Guidelines

sudo systemctl start mongod

```- Follow existing code style and conventions

- Write meaningful commit messages

**Port Already in Use:**- Add comments for complex logic

- Update documentation for new features

```bash- Ensure responsive design compatibility

# Kill process on port 5000

sudo kill -9 $(lsof -t -i:5000)## 🐛 Troubleshooting

# Or change PORT in .env file

```### Common Issues



**JWT Token Issues:****MongoDB Connection Error:**



- Ensure JWT_SECRET is properly set in environment variables```bash

- Check token expiration in browser developer tools# Check if MongoDB is running

- Clear browser localStorage if neededsudo systemctl status mongod

# Start MongoDB

## Contributingsudo systemctl start mongod

```

1. **Fork the repository**

2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`**Port Already in Use:**

3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`

4. **Push to the branch**: `git push origin feature/AmazingFeature````bash

5. **Open a Pull Request**# Kill process on port 5000

sudo kill -9 $(lsof -t -i:5000)

### Development Guidelines# Or change PORT in .env file

```

- Follow existing code style and conventions

- Write meaningful commit messages**JWT Token Issues:**

- Add comments for complex logic

- Update documentation for new features- Ensure JWT_SECRET is properly set in environment variables

- Ensure responsive design compatibility- Check token expiration in browser developer tools

- Clear browser localStorage if needed

## License

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Author

## 👨‍💻 Author

**Swati Singh**

**Swati Singh**

- GitHub: [@SwatiSingh211530](https://github.com/SwatiSingh211530)

- LinkedIn: [Swati Singh](https://linkedin.com/in/swati-singh)- GitHub: [@SwatiSingh211530](https://github.com/SwatiSingh211530)

- Email: swatisingh211530@gmail.com- LinkedIn: [Swati Singh](https://linkedin.com/in/swati-singh)

- Email: <swatisingh211530@gmail.com>

## Acknowledgments

## 🙏 Acknowledgments

- **React Team** for the amazing frontend library

- **Express.js** for the robust backend framework- **React Team** for the amazing frontend library

- **MongoDB** for the flexible database solution- **Express.js** for the robust backend framework

- **Ant Design** for the beautiful UI components- **MongoDB** for the flexible database solution

- **Vercel** for seamless frontend deployment- **Ant Design** for the beautiful UI components

- **Open Source Community** for continuous inspiration- **Vercel** for seamless frontend deployment

- **Open Source Community** for continuous inspiration

---

---

**Star this repository if you found it helpful!**

⭐ **Star this repository if you found it helpful!**

**Happy Movie Booking!**
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
#    B o o k M y M o v i e 
 
 #   B o o k M y M o v i e 
 
 
