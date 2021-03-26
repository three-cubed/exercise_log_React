This application is functional. There are, however, various improvements that I wish to make, and various features that I wish to introduce, and in that sense it is an on-going project.

### Project overview
This is a simple "MERN stack" application, 
i.e. a full-stack application using **M**ongoDB + **E**xpress + **R**eact + **N**odeJS. 
The application's basic concept is to allow a user to record the exercise they have done as 'exercise events'. 

Users can create records saved on the database, display records from the database, and delete records. 

### General notes
During development, various dummy features (data/pages/components etc.) will be used for purposes of development and experimentation.

The initial set-up uses the standard create-react-app package from NPM in the client sub-directory (including the various boilerplates!)

### Usage notes
The command `npm start` must be used on both the root directory and the client directory.

Port 5005 is indicated as proxy in /client/package.json 
The proxy indicates the URL for server.js, to be changed if appropriate. 
