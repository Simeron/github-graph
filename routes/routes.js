const express = require("express");
const router = express.Router();
const layoutController = require("../controllers/layoutController");

router.get("/", layoutController.showLayout);
router.get("/users", layoutController.showUserNames);
router.get("/repos", layoutController.showRepos);
router.get("/graph", layoutController.showCommits);

module.exports = router;