const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const { verifyToken } = require("../controllers/authController");

router
  .route("/")
  .get(recipeController.getAllRecipes)
  .post(verifyToken, recipeController.createRecipe);

router
  .route("/:recipeId")
  .get(recipeController.getRecipe)
  .patch(verifyToken, recipeController.updateRecipe)
  .delete(verifyToken, recipeController.deleteRecipe);

router.get("/me/:user", recipeController.getRecipeByUSer);
router.patch(
  "/:recipeId/toggle",
  verifyToken,
  recipeController.toggleLikeRecipe
);

module.exports = router;
