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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ItemDeal.js":
/*!*********************!*\
  !*** ./ItemDeal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemDeal; });\nclass ItemDeal{\n    /*\n    класс конструктор, собирает \n    нам объект todo с текстом, \n    цветом срочности, временем\n\n    */\n    constructor(text, color){\n        this.text = text;\n        this.color = color;\n        this.now = new Date;\n    }\n}\n\n//# sourceURL=webpack:///./ItemDeal.js?");

/***/ }),

/***/ "./code.js":
/*!*****************!*\
  !*** ./code.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDeal */ \"./ItemDeal.js\");\n/* harmony import */ var _nordic_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nordic_random */ \"./nordic_random.js\");\n\n\n\n\n// я тут комментарий написал\nconst {\n  motivation_array,\n  important_color,\n  animation_in,\n  animation_out,\n  Month_Array,\n} = _nordic_random__WEBPACK_IMPORTED_MODULE_1__[\"json\"];\n\nconsole.log(motivation_array.__proto__);\n\nconst mot_speech = document.querySelector(\".Mot_speech\");\nconsole.log(mot_speech.__proto__);\n\nconst select = document.getElementById(\"important\");\n\nconst field = document.querySelector(\"input\");\n\nconst button = document.querySelector(\".button_plus\");\n\nconst deals = document.getElementById(\"deals\");\n\n//пишем смену наших цитат\nsetInterval(() => {\n  mot_speech.innerHTML = motivation_array[Object(_nordic_random__WEBPACK_IMPORTED_MODULE_1__[\"getUniq\"])()];\n}, 5000);\n\n//получает из объект localStorage данные по ключу\n//ключ - время создания в Unix - времени\n// значение - экземпляр класса ItemDeal\n//getItem(key) – получить данные по ключу key\n//key(index) – получить ключ на заданной позиции.\n//setItem - в localStorage назначить значение\n\n//функция добавления дела\n// addTask - имя функции\n// Прочитать значние field, если не пустой input - проверка ввода\n// создаем объект todo\n// сохранение в JSON\n//сохраняем это в localStorage\n// вызвали функцию создания HTML\n//очистить field\n\nfunction addTask() {\n  let content = field.value;\n  if (!content) {\n    // если content == пустой строке\n    //то пустая строка + ! = true\n    //тогда логическое выражения выполнится и функция прервет работу\n    return;\n  }\n  let todo = new _ItemDeal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, select.value - 1);\n  let todo_to_JSON = JSON.stringify(todo);\n  localStorage.setItem(+todo.now, todo_to_JSON);\n  GenerateDOM(todo);\n  field.value = \"\";\n}\n\nbutton.addEventListener(\"click\", addTask);\n//дальше вешаем события на Enter\ndocument.addEventListener(\"keypress\", (event) => {\n  console.log(event);\n  if (event.key == \"Enter\") {\n    addTask();\n    //https://keycode.info/\n  }\n});\n//показать сохраненные дела - общая задача\n//подзадачи\n//нужно взять дела из localStorage - for\n//парсим из JSON\n//заново генерируем Date\n//отобразить GenerateDOM\nfunction drawOnLoad() {\n  for (let i = 0; i < localStorage.length; i++) {\n    //Приняв число i, метод вернёт имя по номеру ключа в localStorage\n    let lk_ley = localStorage.key(i);\n    let content = localStorage.getItem(lk_ley);\n    let todo = JSON.parse(content);\n    let tempo_data = Date.parse(todo.now);\n    todo.now = new Date(tempo_data);\n    GenerateDOM(todo);\n  }\n}\ndrawOnLoad();\n\nfunction GenerateDOM(obj) {\n  // todo удалить pen\n  deals.insertAdjacentHTML(\n    \"afterbegin\",\n    `\n  <div class=\"wrap_task ${important_color[obj.color]} \" id=${+obj.now}> \n\n  <p class=\"todo_text\"> ${obj.text} </p>\n  <p>  ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]} </p>\n\n  <div> \n   <!-- <i class=\"material-icons icon_edit\">edit</i> -->\n   \n   <i class=\"material-icons icon_delete\">delete</i> \n   </div>\n  </div>`\n  );\n}\n\ndeals.addEventListener(\"click\", (e) => {\n  //  удаление дела\n  let trash = e.target.closest(\".icon_delete\");\n  let wrap_task = trash.parentNode.parentNode;\n  wrap_task.remove();\n  localStorage.removeItem(wrap_task.getAttribute(\"id\"));\n});\n\ndeals.addEventListener(\"click\", (e) => {\n  // редактирование дела\n  // let pen = e.target.closest(\".icon_edit\");\n  let todo_text = e.target.closest(\".todo_text\");\n  let wrap_task = todo_text.parentNode;\n  todo_text.contentEditable = \"true\";\n\n  //получения выделения или положения курсора\n\n  /*\n  let selection = window.getSelection();\n  // Вариант с полным выделением текста\n  let range = document.createRange();\n  // создание пространства символов\n  range.selectNodeContents(todo_text);\n  // создание пространства, которое ровно содержимому переданного узла\n\n\n  selection.removeAllRanges();\n  selection.addRange(range);\n  todo_text.focus();\n  */\n\n  let selection = window.getSelection();\n  selection.collapse(todo_text, 1);\n\n  // вариант, где курсор в конце текста\n\n  // вызываем объект, который был выделен\n  // let selection = window.getSelection();\n  /*\n    показывает пространство выбранного текста\n   */\n  // let range = document.createRange(); // создать определенного рода range, т.е. некоторое пространство\n  // range.selectNodeContents(todo_text); //получаем содержимое узла\n  // selection.removeAllRanges(); // вырубаем все остальные выделения\n  // selection.addRange(range); // накидываем выбор узла\n  // selection.deleteFromDocument(); -- удалить выделенное\n  // selection.collapse(todo_text, 1);\n\n  wrap_task.addEventListener(\"keypress\", (e) => {\n    console.log(e);\n    if (e.key == \"Enter\") {\n      let data = localStorage.getItem(wrap_task.id);\n      let obj = JSON.parse(data);\n      obj.text = todo_text.textContent;\n      let obj_to_JSON = JSON.stringify(obj);\n      localStorage.setItem(wrap_task.id, obj_to_JSON);\n      todo_text.contentEditable = \"false\";\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./code.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: motivation_array, important_color, animation_in, animation_out, Month_Array, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"motivation_array\\\":[\\\"кто с утра рано встает, то не выспался\\\",\\\"кто с утра встает, другим спать не дает\\\",\\\"в силикиновой долине недвижимость подешевела\\\",\\\"без труда не выловишь JS из пруда\\\",\\\"мотивация не приходит одна\\\"],\\\"important_color\\\":[\\\"has-background-danger has-text-white is-size-3\\\",\\\"has-background-warning has-text-black is-size-3\\\",\\\"has-background-link has-text-white is-size-3\\\"],\\\"animation_in\\\":[\\\"animate__bounceInLeft\\\",\\\"animate__fadeIn\\\",\\\"animate__zoomIn\\\"],\\\"animation_out\\\":[\\\"animate__zoomOut\\\",\\\"animate__zoomOutLeft\\\",\\\"animate__flipOutX\\\"],\\\"Month_Array\\\":[\\\"Января\\\",\\\"Февраля\\\",\\\"Марта\\\",\\\"Апреля\\\",\\\"Мая\\\",\\\"Июня\\\",\\\"Июля\\\",\\\"Августа\\\",\\\"Сентября\\\",\\\"Октября\\\",\\\"Ноября\\\",\\\"Декабря\\\"]}\");\n\n//# sourceURL=webpack:///./data.json?");

/***/ }),

/***/ "./nordic_random.js":
/*!**************************!*\
  !*** ./nordic_random.js ***!
  \**************************/
/*! exports provided: getRandom, getUniq, json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUniq\", function() { return getUniq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return json; });\nconst json = __webpack_require__(/*! ./data.json */ \"./data.json\");\n\nfunction getRandom(min, max) {\n  let rand = min - 0.5 + Math.random() * (max - min + 1);\n  return Math.round(rand);\n}\n\nlet pool = []; // имеет вид 0,1,2 ...n\nfunction generatePool() {\n  for (let i = 0; i < json.motivation_array.length; i++) {\n    pool[i] = i;\n  }\n  return pool;\n}\npool = generatePool();\n\nfunction getUniq() {\n  /* возвращает уникальные значения\n        для массива motivation_array,\n         по принципу исключения\n     */\n  function getUniqRandom() {\n    if (pool.length == 0) {\n      pool = generatePool();\n      // console.log(\"Перезапуск цепочки\");\n    }\n    let index = Math.floor(pool.length * Math.random());\n    let delete_item = pool.splice(index, 1);\n    // console.log(pool);\n    return delete_item[0];\n  }\n  return getUniqRandom();\n}\n\n\n// Prettier\n\n\n//# sourceURL=webpack:///./nordic_random.js?");

/***/ })

/******/ });