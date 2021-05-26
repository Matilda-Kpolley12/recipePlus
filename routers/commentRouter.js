const router = require("express").Router();
const commentController = require("../controllers/commentController");
const { verifyToken } = require("../controllers/authController");

router.get("/", commentController.getAllComment);
router.get("/:id", verifyToken, commentController.getComment);
router.post("/", verifyToken, commentController.createComment);
router.patch("/:id", verifyToken, commentController.updateComment);
router.delete("/:id", verifyToken, commentController.deleteComment);

module.exports = router;
