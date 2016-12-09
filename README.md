# CG Admin Template

An AngularJS template based on the AdminLTE

*This template is  based on the famous [Almsaeed Studio's AdminLTE](https://github.com/almasaeed2010/AdminLTE) and the SCSS vesrion of [aguegu's AdminLTE](https://github.com/aguegu/AdminLTE)*

- Some angularjs directives were created in order to be jQuery-free
- A few more sass components where included

# Installation

Start with installing the package
```
npm install --save cg-admin
```

Include the files in your html

```html
<head>
  <link rel="stylesheet" href="/node_modules/cg-admin/dist/cg-admin.min.css">
<head>
<body>
  <script src="/node_modules/cg-admin/dist/cg-admin.min.js"></script>
</body>
```

After include it to your angular application

```js
angular
    .module('app', [
        'cg.admin',
    ]);
```

You make check the demo/starter file for how to use it


# The MIT License (MIT)

Copyright (c) 2014-2016 Christos Georgiou

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
