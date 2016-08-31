'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Mobile Browser Address-bar Resize Jump Fix.
 * Prevent elements from jumping if the mobile browser address bar appears/disappears.
 */

var JumpFix = function () {
  function JumpFix() {
    _classCallCheck(this, JumpFix);

    this.items = null;
    this.isScrolling = false;
    this.timeoutScroll = null;
  }

  // This sets 'isScrolling' to true each time it fires and keeps it true for a certain amount of
  // time. Then it sets back to false.


  _createClass(JumpFix, [{
    key: 'setScrollingStatus',
    value: function setScrollingStatus() {
      var _this = this;

      if (this.timeoutScroll) clearTimeout(this.timeoutScroll);
      this.isScrolling = true;
      this.timeoutScroll = setTimeout(function () {
        _this.isScrolling = false;
      }, 100);
    }

    // Save current element heights

  }, {
    key: 'saveHeights',
    value: function saveHeights() {
      var _this2 = this;

      this.items.forEach(function (item, i) {
        _this2.items[i].savedHeight = item.clientHeight;
      });
    }

    // On resize: if user is scrolling use initially saved heights.
    // if user is NOT scrolling save new height of each element after resize.

  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this3 = this;

      if (this.isScrolling === true) {
        this.items.forEach(function (item, i) {
          _this3.items[i].style.height = _this3.items[i].savedHeight + 'px';
        });
      } else {
        this.items.forEach(function (item, i) {
          _this3.items[i].style.height = '';
        });
      }
    }

    // If user starts scrolling save initial heights
    // Update scrolling status

  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (this.isScrolling === false) this.saveHeights();
      this.setScrollingStatus();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      window.addEventListener('touchmove', this.handleScroll.bind(this));
      window.addEventListener('resize', this.handleResize.bind(this));
    }
  }, {
    key: 'init',
    value: function init() {
      this.items = document.querySelectorAll('[data-jump-fix="true"]');
      this.addListeners();
    }
  }]);

  return JumpFix;
}();

module.exports = new JumpFix();

//# sourceMappingURL=index.js.map