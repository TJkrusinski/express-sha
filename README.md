## express-sha

An express middleware the responds with the current git sha of HEAD.

### Installation

```bash
$ npm install express-sha
```

### Usage

```javascript

var app = require('express')();
var sha = require('express-sha');

app.use(sha(opts));

// ...

app.listen(PORT);
```

#### Options

* `url String` - The url to match against, ie: `/sha` or `/git-sha`.
* `[errorHandler Function(req, res)]` - Will be called in the event the package is unable to get the sha of HEAD. By default the package will repsond with a status of `500` with a content encoding of `text/plain` and an empty reponse body.
* `[responseHandler Function(req, res, sha)]` - By default the package will respond with a `200 OK` with a content encoding of `text/plain` and the response body will be the sha of HEAD, otherwise it will call the supplied middlware.

## License

(The MIT License)

Copyright (c) 2014 TJ Krusinski &lt;tj@shoflo.tv&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
