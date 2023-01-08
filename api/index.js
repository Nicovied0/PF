const dbConnect = require("./config/mongo");
const print = require("./utils/myConsole"); 
const app = require("./app");
const dotenv = require ('dotenv');

dotenv.config();

// const pushDatabase = require("./utils/pushDatabase");
// const pushDBusers = require("./utils/pushDBusers");
// const { pushDBvolunteers } = require("./utils/pushDBvolunteers");
// const pushDBpress = require("./utils/pushDBpress");


const BACK_URL = process.env.BACK_URL || 3001;



dbConnect().then((res) => {

  // pushDatabase();
  // pushDBusers();
  // pushDBvolunteers();
  // pushDBpress();

  app.listen(`${BACK_URL}`, () => {
    print.succe("Successfully connected");
    print.listen(`${BACK_URL}`);
  });
},

  (error) => {
    print.error("Connection error");
  }
);


