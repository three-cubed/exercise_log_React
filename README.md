This repository is **work in progress**!

### Project overview
This is a simple "MERN stack" application, 
i.e. a full-stack application using **M**ongoDB + **E**xpress + **R**eact + **N**odeJS. 
The application's basic concept is to allow a user to record the exercise they have done. 

### Current situation
The application's capabilities at the moment:
- Create records on the database: fully functional.
- Read and display records from the database: fully functional.
- Delete records: fully functional.

### General development notes
During development, various dummy features (data/pages/components etc.) will be used for purposes of development and experimentation.

The code will contain various commented-out notes to myself to clarify the React code for future reference. There will be probably some unusual variable names for the same reason.

The initial set-up uses the standard create-react-app package from NPM in the client sub-directory (including the various boilerplates!)

Port 5005 is indicated as proxy in /client/package.json 
The proxy indicates the URL for server.js, to be changed if appropriate. 
