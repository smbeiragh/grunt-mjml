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
