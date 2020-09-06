"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AddUserForm = _interopRequireDefault(require("./AddUserForm"));

require("./AddUser.css");

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var baseUrl = "http://localhost:3001/users";

function AddUser(props) {
  var _useState = (0, _react.useState)({
    user_ID: "",
    user_name: " ",
    name: " ",
    surname: " ",
    user_type: "",
    phone: "",
    date_of_birth: Date,
    created_at: "",
    update_at: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.target.name, event.target.value)));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmitClick = function handleSubmitClick(event) {
    event.preventDefault();

    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError('Passwords do not match');
    }
  };

  var sendDetailsToServer = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var payload;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(state.user_name.length && state.name.length && state.surname.length && state.email.length && state.password.length && state.phone.length && state.date_of_birth.length)) {
                _context2.next = 7;
                break;
              }

              props.showError(null);
              payload = {
                user_ID: 2,
                user_name: state.user_name,
                name: state.name,
                surname: state.surname,
                user_type: "",
                phone: state.phone,
                date_of_birth: state.date_of_birth,
                created_at: "",
                update_at: "",
                email: state.email,
                password: state.password
              };
              _context2.next = 5;
              return _axios.default.post(baseUrl, payload).then(function (response) {
                if (response.status === 200) {
                  setState(function (prevState) {
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                      'successMessage': 'Registration successful. Redirecting to home page..'
                    });
                  });
                  props.showError(null);
                }
              }).catch(function (error) {
                console.log(error);
              });

            case 5:
              _context2.next = 8;
              break;

            case 7:
              props.showError('Please enter valid username and password');

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sendDetailsToServer() {
      return _ref2.apply(this, arguments);
    };
  }();

  var redirectToLogin = function redirectToLogin() {
    props.history.push('/users');
    props.updateTitle('Users');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card col-12 col-lg-4 t-2 hv-center justify-content-center align-items-center container "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "containerAddUsersSecundario"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputUser"
  }, "User Name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    name: "user_name",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputName"
  }, "Name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    name: "name",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputSurname"
  }, "Surname:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    name: "surname",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Email address:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "form-control",
    name: "email",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email",
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleInputPassword1"
  }, "Password:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    name: "password",
    placeholder: "Password",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleInputPassword1"
  }, "Confirm Password:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputName"
  }, "ver user_type:")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputPhone"
  }, "Phone:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputDate"
  }, "Date:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "Date",
    className: "form-control",
    name: "date_of_birth",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputName"
  }, "create_att ver:")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group text-left"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleImputName"
  }, "update_at ver:")), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    onClick: handleSubmitClick
  }, "Register")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Already have an account? "), /*#__PURE__*/_react.default.createElement("span", {
    className: "loginText",
    onClick: redirectToLogin
  }, "Login here"))));
}

var _default = (0, _reactRouterDom.withRouter)(AddUser);

exports.default = _default;