var user = require('../controllers/user.controller');

module.exports = function(app) {

    app.route('/users')
        .get(user.list);

    app.route('/users/:userID')
        .get(user.read);

    app.param('userID', user.getUserByID);
};
