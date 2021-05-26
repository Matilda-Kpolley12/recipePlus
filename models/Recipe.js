const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
    },
    image: {
      type: String,
      required: [true, "Recipe Image is required"],
    },
    ingredient: {
      type: String,
      required: [true, "Provide list of ingredients"],
    },

    // procedure: [
    //   {
    //     type: String,
    //     required: [true, "Recipe procedure is required"],
    //   },
    // ],
    // timeRequired: {
    //   type: String,
    //   required: [true, "Provide required time for the recipe"],
    // },
    // mainCategory: {
    //   type: String,
    //   enumeration: [
    //     "Pastries",
    //     "Smoothies",
    //     "Sauces",
    //     "Noodles",
    //     "Local dishes",
    //     "Fruit juices",
    //     "DEtox drinks",
    //     "Ice Creams",
    //     "Salads",
    //   ],
    //   required: [true, "Recipe category is required"],
    // },
    // subCategory: {
    //   type: String,
    //   enumeration: ["Pie", "Orange juice"],
    //   required: [true, "Recipe subCategory is required"],
    // },
    // numberOfViews: {
    //   type: Number,
    //   default: 0,
    // },
    postBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
    commentBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
  },
  {
    timestamps: true,
  }
);



module.exports = model("Recipe", recipeSchema);
