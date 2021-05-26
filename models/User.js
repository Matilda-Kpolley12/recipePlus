const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "FirstName is required."],
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      select: false,
    },
    gender: {
      type: String,
      // required: [true, "Select gender"]
    },
    phoneNumber: {
      type: String,
    },
    photo: {
      type: String,
    },
    // location: {
    //   type: String,
    //   required: [true, "Location is required"],
    // },
    category: {
      type: String,
      enumeration: ["User", "Administrator"],
      default: "User",
      required: [true, "Users is required"],
    },
    numberOfFollowers: {
      default: 0,
    },
    followedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "Follow",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "Follow",
      },
    ],
    recipe: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  { timestamps: true }
);

// userSchema.virtual("recipe", {
//   ref: "Recipe", //The Model to use
//   localField: "_id", //Find in Model, where localField
//   foreignField: "postBy", // is equal to foreignField
// });

// // Set Object and Json property to true. Default is set to false
// userSchema.set("toObject", { virtuals: true });
// userSchema.set("toJSON", { virtuals: true });

module.exports = model("User", userSchema);
