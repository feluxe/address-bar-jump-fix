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

  // This sets 'isScrolling' to true for a certain amount of time.
  setScrollingStatus() {
    if (this.timeoutScroll)
      clearTimeout(this.timeoutScroll);
    this.isScrolling = true;
    this.timeoutScroll = setTimeout(() => {
      this.isScrolling = false;
    }, 100);
  }

  // Save actual heights
  saveHeights() {
    this.items.forEach((item, i) => {
      this.items[i].savedHeight = item.clientHeight;
    });
  }

  // On resize: if user is scrolling use the saved height.
// if user is NOT scrolling save the new nativ height after resize.
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

  handleScroll() {
    if (this.isScrolling === false)
      this.saveHeights();
    this.setScrollingStatus();
  }

// Bind Events
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

export default new JumpFix();
