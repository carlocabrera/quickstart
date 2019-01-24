webpackJsonp([0],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(99);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Carlo'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'Aligner' },
          _react2.default.createElement(
            'div',
            { className: 'Aligner-item' },
            _react2.default.createElement('img', { src: '/img/logo.png' }),
            _react2.default.createElement(
              'h1',
              null,
              'New Project Quick Start'
            ),
            _react2.default.createElement(
              'div',
              { className: 'menu' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'https://github.com/carlocabrera/quickstart', target: 'new' },
                    'Documentation'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'https://www.carlo.codes', target: 'new' },
                    'CARLO.CODES'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'version-num' },
              'version 2.0.19'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'a',
              { className: 'github-button', href: 'https://github.com/carlocabrera/quickstart', 'data-icon': 'octicon-star', 'data-style': 'mega', 'data-count-href': '/carlocabrera/quickstart/stargazers', 'data-count-api': '/repos/carlocabrera/quickstart#stargazers_count', 'data-count-aria-label': '# stargazers on GitHub', 'aria-label': 'Star carlocabrera/quickstart on GitHub' },
              'Star'
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[233]);