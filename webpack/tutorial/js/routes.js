/*global app, Router */

var printHello = require('./example').printHello;
printHello();

// node module import: ES6
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import minions from '../giphy.gif';



// normal style
// require('../node_modules/todomvc-common/base.css');
// var ccc = require('../node_modules/todomvc-app-css/index.css');


var img = document.createElement("img");
img.setAttribute("src", minions);
img.setAttribute("alt", "Minions");
document.getElementById("image").append(img);



var app = require('./app');

var router = new Router();

['all', 'active', 'completed'].forEach(function (visibility) {
	router.on(visibility, function () {
		app.visibility = visibility;
	});
});

router.configure({
	notfound: function () {
		window.location.hash = '';
		app.visibility = 'all';
	}
});

router.init();