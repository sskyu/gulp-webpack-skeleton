(function () {
    'use strict';

    var Hello = require('./components/Hello');

    var hello = new Hello();

    document.write(hello.message);
})();