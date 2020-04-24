const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

// /api prepended to every route inside of here

router.use('/todos', todoRoutes);

module.exports = router;
