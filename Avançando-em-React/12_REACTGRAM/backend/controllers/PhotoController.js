const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Create photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    username: user.name,
  });

  // If photo was created successfully,return date
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente mais tarde!"],
    });
  }

  res.status(201).json(newPhoto);
};

module.exports = {
  insertPhoto,
};
