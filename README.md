

Mobile Browser Address-bar Resize Jump Fix.
===========================================

Prevent elements from jumping if the mobile browser address bar appears/disappears.
See this Stackoverflow question for a detailed explanation.

What this script does in short:
* When the user starts scrolling save the heights of each jumping element.
* While the user is scrolling and the viewport is resizing at the same time use the saved heights for the selected elements.

###Usage:

import the script like this:

```javascript
import jumpFix from 'address-bar-jump-fix';
```
    
or like this:

```javascript
var jumpFix = require('address-bar-jump-fix');
```

then call this function after all elements are finished loading:

```javascript
addressBarJumpFix.init();
```

Now put the following data attribute on each html element that is jumping: 

`data-jump-fix='true'`

That's it :)