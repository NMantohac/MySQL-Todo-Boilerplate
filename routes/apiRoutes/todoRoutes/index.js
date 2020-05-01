const router = require('express').Router();
const todosController = require('../../../controllers/todosController');
// /api/todos prepended to every route inside of here

// /api/todos
router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo);

// /api/todos/completed
router.route('/completed')
  .get(todosController.getAllCompleted);

// /api/todos/incomplete
router.route('/incomplete')
  .get(todosController.getAllIncomplete);

router.route('/:id/updatetext')
  .patch(todosController.patchTodoTextById);

// /api/todos/id
router.route('/:id')
  .get(todosController.getTodoById)
  // .patch(todosController.patchTodo)
  .patch(todosController.patchTodoCompleted)
  .put(todosController.putTodo)
  .delete(todosController.deleteTodoById);

module.exports = router;
