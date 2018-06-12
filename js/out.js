/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\nvar game = new Game();\ngame.showPlayer();\ngame.showItem();\ngame.startGame();\n\ndocument.addEventListener(\"keydown\", function (event) {\n    game.turnPlayer(event);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Player = __webpack_require__(/*! ./player.js */ \"./js/player.js\");\nvar Item = __webpack_require__(/*! ./item.js */ \"./js/item.js\");\n\nfunction Game() {\n    var self = this;\n    var counter = 1;\n\n    this.board = document.querySelectorAll(\"#board div\");\n    this.score = document.querySelector(\".score .result\");\n    this.player = new Player();\n    this.item = new Item();\n    this.score = 0;\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    this.showPlayer = function () {\n        this.hideVisiblePlayer();\n        this.board[this.index(this.player.x, this.player.y)].classList.add(\"player\");\n    };\n\n    this.showItem = function () {\n        this.board[this.index(this.item.x, this.item.y)].classList.add('item');\n    };\n\n    this.startGame = function () {\n        this.idSetInterval = setInterval(function () {\n            self.movePlayer();\n        }, 350);\n    };\n\n    this.movePlayer = function () {\n        if (this.player.direction === \"right\") {\n            this.player.x = this.player.x + 1;\n        } else if (this.player.direction === \"left\") {\n            this.player.x = this.player.x - 1;\n        } else if (this.player.direction === \"up\") {\n            this.player.y = this.player.y - 1;\n        } else if (this.player.direction === \"down\") {\n            this.player.y = this.player.y + 1;\n        }\n\n        this.gameOver();\n        this.checkItemCollision();\n        this.showPlayer();\n    };\n\n    this.hideVisiblePlayer = function () {\n        var divPlayer = document.querySelector(\".player\");\n        divPlayer.classList.remove(\"player\");\n    };\n\n    this.turnPlayer = function (event) {\n        switch (event.which) {\n            case 37:\n                this.player.direction = 'left';\n                break;\n            case 38:\n                this.player.direction = 'up';\n                break;\n            case 39:\n                this.player.direction = 'right';\n                break;\n            case 40:\n                this.player.direction = 'down';\n                break;\n        }\n    };\n\n    this.checkItemCollision = function () {\n        if (this.player.x === this.item.x && this.player.y === this.item.y) {\n            var divItem = document.querySelector(\".item\");\n            divItem.classList.remove(\"item\");\n            var score = document.querySelector(\".score .result\");\n            score.innerText = counter++;\n            this.item = new Item();\n            this.showItem();\n        }\n    };\n\n    this.gameOver = function () {\n\n        if (this.player.x < 0 || this.player.x > 9 || this.player.y < 0 || this.player.y > 9) {\n\n            clearInterval(this.idSetInterval);\n            this.hideVisiblePlayer();\n\n            var over = document.querySelector(\"#over\");\n            over.classList.remove(\"invisible\");\n            var scoreGameOver = document.querySelector(\"#over .score .result\");\n            scoreGameOver.innerText = counter++ - 1;\n            return true;\n        }\n        return false;\n    };\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/item.js":
/*!********************!*\
  !*** ./js/item.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Item() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\nmodule.exports = Item;\n\n//# sourceURL=webpack:///./js/item.js?");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Player() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n    this.direction = \"direction\";\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./js/player.js?");

/***/ })

/******/ });