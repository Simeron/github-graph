const express = require("express");
const router = express.Router();
const showController = require("../controllers/showController");

router.post("/fetch-Users", showController.getUsers);
router.post("/set-repo", showController.getRepos);
router.post("/set-commits", showController.getCommits);
router.get('/commits', showController.returnCommits);


module.exports = router;