const router = require('express').Router();
const todosController = require('../../../controllers/todosController');
// /api/todos prepended to every route inside of here

// /api/todos
router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo);

router.route('/completed')
  .get(todosController.getAllCompleted);

router.route('/incomplete')
  .get(todosController.getAllIncomplete);

router.route('/:id')
  .get(todosController.getTodoById)
  .patch(todosController.patchTodo)
  .put(todosController.putTodo)
  .delete(todosController.deleteTodoById);

module.exports = router;
