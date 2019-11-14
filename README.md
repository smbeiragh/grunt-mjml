# grunt-mjml

> Grunt integration for mjml, the email template engine

## Getting Started
This plugin requires Grunt `~1.0.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mjml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mjml');
```

## The "mjml" task

### Options

Object of options that will be passed to the `mjml2html` function. 

option   | unit   | description  | default value
-------------|--------|--------------|---------------
fonts  | object | Default fonts imported in the HTML rendered by HTML | See in [index.js](https://github.com/mjmlio/mjml/blob/master/packages/mjml-core/src/index.js#L36-L44)
keepComments | boolean | Option to keep comments in the HTML output | true
beautify | boolean | Option to beautify the HTML output | false
minify | boolean | Option to minify the HTML output | false
validationLevel | string | Available values for the [validator](https://github.com/mjmlio/mjml/tree/master/packages/mjml-validator#validating-mjml): 'strict', 'soft', 'skip'  | 'soft'
filePath | string | Path of file, used for relative paths in mj-includes | '.'

For more info: https://github.com/mjmlio/mjml/blob/master/README.md#inside-nodejs


### Overview
In your project's Gruntfile, add a section named `mjml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mjml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

#### Example

```js
grunt.initConfig({
  mjml: {
    options: {},
    your_target: {
      files: [{
        expand: true,
        cwd: 'email-templates', // Src matches are relative to this path.
        src: ['**/*'], // Actual pattern(s) to match.
        dest: 'compiled-email-templates/',   // Destination path prefix.
        ext: '.html',   // Dest filepaths will have this extension.
        extDot: 'first'   // Extensions in filenames begin after the first dot
      }]
    }
  },
});
```

## Release History
- make MJML as Peer Dependencie
- upgrade MJML Peer Dependencie to 3.x
- Upgrade MJML peer Dependencie to 4.x
- Support Yarn and npm 5.X
