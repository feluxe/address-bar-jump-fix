

Mobile Browser Address-bar Resize Jump Fix.
===========================================

Prevent elements from jumping if the mobile browser address bar appears/disappears.
See this Stackoverflow question for a detailed explanation:

http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome

###What it does: (simplified)
* When the user starts scrolling save the initial height of each item that has a certain data-attribute. (data-jump-fix='true')
* While the user is scrolling and the viewport is resizing: do not change height values of selected elements, instead continue to use initial heights.

###Requirements

The code is written in ES6/ES2015. Use 'Babel' or similar to compile it to ES5 if you want broad browser support. 

###Usage:

First put the following data attribute on each element that is jumping: 

`data-jump-fix='true'`

Then import the script like this:

```javascript
import jumpFix from 'address-bar-jump-fix';
```
    
or like this:

```javascript
var jumpFix = require('address-bar-jump-fix');
```

Finally call this function after all elements have finished loading:

```javascript
addressBarJumpFix.init();
```


That's it :)