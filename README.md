# Lockheed Inventory Manager

A web application to manage Lockheed Martin's jet inventory, including adding, updating, and deleting jets. Features user authentication, a dashboard to view jets, and a form to add new jets.

## Technologies Used
- **Node.js**: Backend runtime
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: MongoDB ORM
- **bcrypt**: Password hashing
- **express-session**: Session management
- **HTML/CSS/JavaScript**: Frontend

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps to Run
1. Clone the repository:
https://github.com/lockheed886/lockheed-inventory-manager.git


2. Navigate to the project folder:
cd lockheed-inventory-manager



3. Install dependencies:
npm install




4. Create a `.env` file in the root directory and add:
DB_URL=mongodb://localhost:27017/lockheed
SESSION_SECRET=your-secret-key
PORT=3000



5. Seed the database with initial jet data:
node seed.js



6. Start the MongoDB server (in a separate terminal):
mongod



7. Start the application:
node server.js



8. Open your browser and go to:
http://localhost:3000/login




9. Log in with:
- Email: `admin@lockheed.com`
- Password: `password123`

## Project Structure
- `public/`: Static files (CSS, images)
- `views/`: HTML templates (login, dashboard, add-jet)
- `routes/`: Route handlers (authRoutes.js, jetRoutes.js)
- `models/`: Mongoose models (User.js, Jet.js)
- `middleware/`: Authentication middleware (auth.js)
- `server.js`: Main server file
- `seed.js`: Database seeding script

## Features
- User authentication with session management
- Dashboard to view, update, and delete jets
- Form to add new jets
- Responsive UI with a background image
- Placeholder image for missing jet images

## Notes
- Ensure MongoDB is running before starting the app.
- Add jet images to `public/images/` for display on the dashboard (e.g., `f-35-lightning.png`).
- A `placeholder-jet.webp` image is used if a jet image is missing.



