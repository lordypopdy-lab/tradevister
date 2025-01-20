const express = require("express");
const router = express.Router();
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  };

  //https://tradevister.vercel.app
  
  router.use(cors(corsOptions));
  router.options('*', cors(corsOptions)); 

const { test, loginUser, createUser, loginAdmin, chatSend, getUser, getUsers, addBalance , withdrawBank, getAdminChat, withdrawCrypto, AdminGetCrypto, AdminGetBankR, getBankRecords, getCryptoRecords} = require("../controllers/authController");

router.get('/test', test);
router.post("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post('/login', loginUser);
router.post("/chatSend", chatSend);
router.post('/register', createUser);
router.post('/adminAuth', loginAdmin);
router.post('/addBalance', addBalance);
router.post("/getAdminChat", getAdminChat);
router.post("/withdrawBank", withdrawBank);
router.post("/AdminGetBankR", AdminGetBankR);
router.post("/AdminGetCrypto", AdminGetCrypto);
router.post("/withdrawCrypto", withdrawCrypto);
router.post("/getBankRecords", getBankRecords);
router.post("/getCryptoRecords", getCryptoRecords);


module.exports = router;