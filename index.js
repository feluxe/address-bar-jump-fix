/**
 * Mobile Browser Address-bar Resize Jump Fix.
 * Prevent elements from jumping if the mobile browser address bar appears/disappears.
 */

class JumpFix {

  constructor() {
    this.items = null;
    this.isScrolling = false;
    this.timeoutScroll = null;
  }

  // This sets 'isScrolling' to true each time it fires and keeps it true for a certain amount of
  // time. Then it sets back to false.
  setScrollingStatus() {
    if (this.timeoutScroll)
      clearTimeout(this.timeoutScroll);
    this.isScrolling = true;
    this.timeoutScroll = setTimeout(() => {
      this.isScrolling = false;
    }, 100);
  }

  // Save current element heights
  saveHeights() {
    this.items.forEach((item, i) => {
      this.items[i].savedHeight = item.clientHeight;
    });
  }

  // On resize: if user is scrolling use initially saved heights.
  // if user is NOT scrolling save new height of each element after resize.
  handleResize() {
    if (this.isScrolling === true) {
      this.items.forEach((item, i) => {
        this.items[i].style.height = `${this.items[i].savedHeight}px`;
      });
    } else {
      this.items.forEach((item, i) => {
        this.items[i].style.height = '';
      });
    }
  }

  // If user starts scrolling save initial heights
  // Update scrolling status
  handleScroll() {
    if (this.isScrolling === false)
      this.saveHeights();
    this.setScrollingStatus();
  }

  addListeners() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('touchmove', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  init() {
    this.items = document.querySelectorAll('[data-jump-fix="true"]');
    this.addListeners();
  }
}

module.exports = new JumpFix();
