# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within route handlers.  The `bug.js` file shows the problematic code.  Unhandled rejections can lead to crashes or silent failures, making debugging difficult.

The solution, in `bugSolution.js`, addresses this by using a centralized error handler to gracefully catch and handle these rejections, preventing unexpected application behavior.