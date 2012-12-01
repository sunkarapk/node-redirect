# node-redirect

Creates a server which redirects incoming traffic to another domain.

# Requirements

- node
- npm

# Installation

```
    npm install redirect
```

# Configuration

In order to run the `redirect` application, you will need to modify the `config.json` with your redirection options.


```js
{
  "port": 80,
  "redirects": {
    "localhost": {
      "host": "http://pksunkara.github.com",
      "code": 302
    },
    "*": {
      "host": "http://www.google.com",
      "code": 302
    }
  }
}
```

The "*" config is the catch all, every host not specified in the config will be redirected there.

# Usage

### Starting locally

    node bin/server

*Now you can visit http://localhost to be redirected*

Or specify a custom port on wich to run the server:

    node bin/server --port=3000

# License

(The MIT License)

Copyright (c) 2011 Pavan Kumar Sunkara

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
