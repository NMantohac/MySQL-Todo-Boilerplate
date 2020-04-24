// Get Todos
const findAllTodos = 'SELECT * FROM Todos;';
const findAllCompleted = 'SELECT * FROM Todos WHERE completed = true;';
const findAllIncomplete = 'SELECT * FROM Todos WHERE completed = false;';
const findTodoById = 'SELECT * FROM Todos WHERE id = ?;';

// Adding Todos
const addTodo = 'INSERT INTO Todos SET text = ?;';

// Deleting Todos
const deleteTodoById = 'DELETE FROM Todos WHERE id = ?;';

// Updating Todos
const updateTodoTextById = 'UPDATE Todos SET text = ? WHERE id = ?;';

const updateTodoBothById = 'UPDATE Todos SET text = ?, completed = ? WHERE id = ?;';

module.exports = {
  findAllTodos,
  findAllCompleted,
  findAllIncomplete,
  findTodoById,
  addTodo,
  deleteTodoById,
  updateTodoTextById,
  updateTodoBothById,
};
