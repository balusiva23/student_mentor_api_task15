

# Mentor-Student API

This repository contains a simple Express.js-based API for managing mentors and students. The API allows you to create mentors and students, assign students to mentors, change mentors for students, and retrieve student information for a particular mentor.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/balusiva23/student_mentor_api_task15.git
   cd student_mentor_api_task15
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection URI:

   ```
   MONGODB_URI=your_mongodb_uri_here
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Documentation

Refer to the [Postman Documentation](https://documenter.getpostman.com/view/24014367/2s9Y5YR2hE) for detailed information on using the API endpoints.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---