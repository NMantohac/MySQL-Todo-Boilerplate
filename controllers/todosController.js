const connection = require('../config/connection');
const todoQueries = require('../models/todos/todoQueries');

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const [todos] = await connection.query(todoQueries.findAllTodos);
      return res.status(200).json(todos);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  getAllCompleted: async (req, res) => {
    try {
      const [todos] = await connection.query(todoQueries.findAllCompleted);
      return res.json(todos);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  getAllIncomplete: async (req, res) => {
    try {
      const [todos] = await connection.query(todoQueries.findAllIncomplete);
      return res.json(todos);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.json({ error: 'You must provide text for todos' });
    }

    try {
      const [response] = await connection.query(todoQueries.addTodo, text);
      const [todos] = await connection.query(todoQueries.findTodoById, response.insertId);
      return res.json(todos[0]);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      return res.status(200).json(todos[0]);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  // PATCH is for updating 1 piece of some data
  patchTodo: async (req, res) => {
    // You will pull out the id from req.params
    const { id } = req.params;
    // You will pull out the text from req.body
    const { text } = req.body;
    // Query your database to update that specific todo by it's id
    try {
      // You will update the text of that todo into what the user is updating it to
      await connection.query(todoQueries.updateTodoTextById, [text, id]);
      // After you update the data, send back that newly updated data as a response
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      return res.json(todos[0]);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  patchTodoCompleted: async (req, res) => {
    const { id } = req.params;

    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      const foundTodo = todos[0];
      await connection.query(todoQueries.updateTodoCompletedById, [!foundTodo.completed, id]);
      const [allTodos] = await connection.query(todoQueries.findAllTodos);
      return res.json(allTodos);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  // PUT is for updating multiple properties of some data
  putTodo: async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      const foundTodo = todos[0];
      await connection.query(todoQueries.updateTodoBothById, [text, !foundTodo.completed, id]);
      const [todosUpdated] = await connection.query(todoQueries.findTodoById, id);
      return res.json(todosUpdated[0]);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  deleteTodoById: async (req, res) => {
    // Should delete a todo with that specific id from params AND
    // Should return to me all of the todos from the database as a response
    const { id } = req.params;
    try {
      await connection.query(todoQueries.deleteTodoById, id);
      const [todos] = await connection.query(todoQueries.findAllTodos);
      return res.json(todos);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },

  patchTodoTextById: async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
      await connection.query(todoQueries.updateTodoTextById, [text, id]);
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      return res.json(todos[0]);
    } catch (err) {
      return res.status(403).json({ err });
    }
  },
};
