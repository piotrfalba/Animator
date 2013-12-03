Animator
========

## jQuery sprite animation plugin

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### JavaScript code:
```javascript
var animator = $('#monster').animator();
animator.define({
  name: 'roar',
	addClass: null,
	start: 1,
	end: 24,
	step: 1,
	interval: 45
});
	
animator.roar.play();
```

### Styles
```css
#monster {
	width: 192px;
	height: 192px;
	background-image: url(../images/monster.png);
	background-repeat: no-repeat;
}

#monster.frame-1 { background-position: 0 0; }
#monster.frame-2 { background-position: -192px 0; }
#monster.frame-3 { background-position: -384px 0; }
#monster.frame-4 { background-position: -576px 0; }

#monster.frame-5 { background-position: 0 -192px; }
#monster.frame-6 { background-position: -192px -192px; }
#monster.frame-7 { background-position: -384px -192px; }
#monster.frame-8 { background-position: -576px -192px; }

#monster.frame-9 { background-position: 0 -384px; }
#monster.frame-10 { background-position: -192px -384px; }
#monster.frame-11 { background-position: -384px -384px; }
#monster.frame-12 { background-position: -576px -384px; }

#monster.frame-13 { background-position: 0 -576px; }
#monster.frame-14 { background-position: -192px -576px; }
#monster.frame-15 { background-position: -384px -576px; }
#monster.frame-16 { background-position: -576px -576px; }

#monster.frame-17 { background-position: 0 -768px; }
#monster.frame-18 { background-position: -192px -768px; }
#monster.frame-19 { background-position: -384px -768px; }
#monster.frame-20 { background-position: -576px -768px; }

#monster.frame-21 { background-position: 0 -960px; }
#monster.frame-22 { background-position: -192px -960px; }
#monster.frame-23 { background-position: -384px -960px; }
#monster.frame-24 { background-position: -576px -960px; }
```