// services/notesService.js
const BASE_URL = "http://localhost:4001"; // change if using mobile emulator

// GET notes for a recipe
export const getNotes = async (recipeId) => {
  const res = await fetch(`${BASE_URL}/recipes/${recipeId}/notes`);
  return res.json();
};

// ADD a note
export const addNote = async ({ recipeId, note }) => {
  const res = await fetch(`${BASE_URL}/recipes/${recipeId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

// UPDATE a note
export const updateNote = async (note) => {
  const res = await fetch(`${BASE_URL}/notes/${note.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

// DELETE a note
export const deleteNote = async (id) => {
  await fetch(`${BASE_URL}/notes/${id}`, { method: "DELETE" });
  return id;
};
