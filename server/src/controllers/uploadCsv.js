const express = require("express");
const app = express();
const multer = require("multer");
const router = express.Router();


// const upload = multer()

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./csv");
  },

  filename: (req, file, cb) =>{
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/uploadfile", upload.single("csvfile"), function (req, res, next) {
  console.log(req.file);
  res.send("single file uploaded successfully");
  // console.log("file uploaded successfully");
});

module.exports = router;

