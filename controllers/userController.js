const User = require("../models/User");
const multer = require("multer");

let fileName = "";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).array("file");

const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};

const getSingleUser = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You are not authorize to perform this operation" });
  }
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({ user });
};

const getUser = async (req, res) => {
  console.log(req.params)
  const { postBy } = req.params;
  const user = await User.findById(postBy);
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ user });
};

const updateAvatar = async (req, res) => {
  const { id } = req.params;
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }
console.log(fileName)
    try {
      const photo = fileName;

      const user = User.updateOne(id, {photo: photo});
      
      // const user = User.findByIdAndUpdate(id, { photo: photo }, { new: true });
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};

// let id = req.params.id;
const toggleFollow = (reg, res) => {
  User.findOne({ _id: id }, (err, user) => {
    if (err) return res.json(err);
    return res.json(user);
  }).populate([{ path: "following" }, { path: "followers" }]);
}

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  toggleFollow,
  getUser,
  updateAvatar,
};
