const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    comment: {
      type: String,
      required: [true, "Content is required."],
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    recipe: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
