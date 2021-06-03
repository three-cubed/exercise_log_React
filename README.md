This application is fully functional and ready to use. There are, however, various improvements that I wish to make, and various features that I wish to introduce, so this is an on-going project.

### Project overview
This is a relatively simple "MERN stack" application, 
i.e. a full-stack application using **M**ongoDB + **E**xpress + **R**eact + **N**ode.js. 

The basic concept of the application is to allow a user to record the exercise they have done.
Users can create records of their exercise as 'exercise events' which are saved on the database. 
The application displays existing records from the database. 
The user can also delete any existing records. 

### Usage notes
To use this application, you must have installed Node.js.

Before first use, the command `npm install` must be used on both the root directory and the client directory.

The application uses MongoDB. 
A `.env` file will need to created in the root directory, containing `DATABASE_URL=` followed by a valid MongoDB URL.
For example, if MongoDB is installed locally, `DATABASE_URL=mongodb://localhost/my_exercise_log` could be used.
If you are using MongoDB in the cloud, your account will provide a connection string to use here.

To run the application, the command `npm start` must be used on both the root directory and the client directory.

Port 5005 is indicated as proxy in `/client/package.json`. 
The proxy indicates the URL for server.js, to be changed if appropriate/desired. 

### Tests 
The application is not particularly complicated, but I have been writing tests which can be found in `/client/src/components/__tests__` and in `/client/src/App.test.js`. They can be run in the *client* directory by using `npm test`, or, for a more verbose version, `npm test -- --verbose`.

### Other notes
During development phases, various dummy features (data/pages/components etc.) are/were used for purposes of development and experimentation.

The initial set-up uses the standard create-react-app package from NPM in the client directory.
