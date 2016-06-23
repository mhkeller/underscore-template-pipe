Underscore template pipe
===

> An underscore mixin (can also be used separately) that allows templates to return json

## What's it do?

adds an additional behavior to Underscore templating called `pipe`, which does everything that the `=` interplator does except it doesn't coerce variables to strings — it returns them as whatever type they are.

```js
var templateSettings = {
  evaluate    : /<%([\s\S]+?)%>/g,
  interpolate : /<%=([\s\S]+?)%>/g,
  escape      : /<%-([\s\S]+?)%>/g,
  pipe        : /<%\|([\s\S]+?)%>/g
};
```

## Usage

##### _.template(templateString[, settings])

#### As an underscore function in NodeJS

```js
var _ = require('underscore')
_.templatePipe = require('underscore-template-pipe')

var templateString = _.templatePipe('<%| data.authors %>')({
  data: {
    authors: [{name: 'mhk'}, {name: 'khm'}]
  }
})

// => [ { name: 'mhk' }, { name: 'khm' } ]
```

#### On its own

```js
var templatePipe = require('underscore-template-pipe')

var templateString = templatePipe('<%| data.authors %>')({
  data: {
    authors: [{name: 'mhk'}, {name: 'khm'}]
  }
})

// => [ { name: 'mhk' }, { name: 'khm' } ]

#### With a custom syntax style

```js
var templatePipe = require('underscore-template-pipe')

var templateSettings = {
  evaluate    : /<%([\s\S]+?)%>/g, 
  interpolate : /<%=([\s\S]+?)%>/g, 
  escape      : /<%-([\s\S]+?)%>/g, 
  pipe        : /<%~([\s\S]+?)%>/g // Use a `~` instead of `|`. The other settings need not be specified if they are not modified. Listed here to show options.
}

var templateString = templatePipe('<%~ data.authors %>', templateSettings)({
  data: {
    authors: [{name: 'mhk'}, {name: 'khm'}]
  }
})

// => [ { name: 'mhk' }, { name: 'khm' } ]

## License

MIT