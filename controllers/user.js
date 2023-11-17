import Class from "../models/user.js";

export const getAllUser = async (req, res) => {
  const users = await Class.find();

  console.log(users);

  res.json({
    sucess: true,
    users,
  });
};

export const newUser = async (req, res) => {
  const user1 = await Class.create({
    roll_no: req.body.roll_no,
    name: req.body.name,
    subject: req.body.subject,
  });

  res.status(201).json({
    sucess: true,
    message: "registered successfully",
    id: user1.id,
  });
};

export const specialUser = (req, res) => {
  res.json({
    success: true,
    message: "just joking",
  });
};

export const getById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = await Class.findById({ _id: id });

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await Class.findById({ _id: id });

  res.json({
    success: true,
    message: "updated",
    user,
  });
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await Class.findById({ _id: id });

  await user.deleteOne({ id });

  res.json({
    success: true,
    message: "deleted",
  });
};
