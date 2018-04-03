'use strict';
module.exports = function(app) {
    const xclip = require('../controllers/pubgController')

    // todoList Routes
    app.route('/api')
    .post(xclip.slack_response)
    .get(xclip.get_response)
}
