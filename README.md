

Mobile Browser Address-bar Resize Jump Fix.
===========================================

Prevent elements from jumping if the mobile browser address bar appears/disappears.
See this Stackoverflow question for a detailed explanation of the problem:

http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome

###What it does: (simplified)
* When the user starts scrolling save the initial height of each item that has a certain data-attribute. (data-jump-fix='true')
* While the user is scrolling and the viewport is resizing: do not change height values of selected elements, instead continue to use initial heights.


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


###Options:

**offsetTimeout**

default value = `100`

```javascript
addressBarJumpFix.init({ offsetTimeout: 250 });
```

Define how long the browser shall be blocked from resizing jumping elements after scrolling-event has stopped.
If you use a very low value, there is the chance that the resize-jump-blocker is released before scrolling event is over and you get a jump.



###Developer info:
The source is written in ES6/ES2015 and compiled to ES5 using Babel.
Run 'npm start' to compile the source file from ES6 into ES5.
