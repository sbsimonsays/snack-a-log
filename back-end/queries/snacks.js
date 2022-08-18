const db = require("../db/dbConfig.js");

// index
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (err) {
    return err;
  }
};

// show
const getSnack = async (id) => {
  try {
    const oneSnack = await db.oneOrNone("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (err) {
    return err;
  }
};

// create
const createSnack = async (snack) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (err) {
    return err;
  }
};

// delete
const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *", id);
    return deletedSnack;
  } catch (err) {
    return err;
  }
};

// update
const updateSnack = async (snack, id) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, id]
    );
    return updatedSnack;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
