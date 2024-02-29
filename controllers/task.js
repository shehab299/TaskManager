const Task = require("../src/models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({
    tasks,
  });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.status(200).json({ task });
  } catch (err) {
    res.status(404).json({ success: false, message: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTaskData = req.body; // Assuming update data is in request body

    const task = await Task.findByIdAndUpdate(id, updatedTaskData, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json({ task });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(404).json({ success: false, message: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
