const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// / prepend to every route

// router.get('/', (req, res) => {
//   res.send('Hello');
// });

router.use('/api', apiRoutes);

module.exports = router;
