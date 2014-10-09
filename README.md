# grunt-bump-pom - version 0.0.1
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/phun-ky/grunt-bump-pom.png)](https://travis-ci.org/phun-ky/grunt-bump-pom)
[![Dependency Status](https://gemnasium.com/phun-ky/grunt-bump-pom.png)](https://gemnasium.com/phun-ky/grunt-bump-pom)
[![NPM version](https://badge.fury.io/js/grunt-bump-pom.png)](http://badge.fury.io/js/grunt-bump-pom)

> A grunt plugin to bump the deploy version in your pom xml file

##Table of Contents
* [Getting started](#getting-started)
* [API](#api)
* [Documentation](#documentation)
* [Development](#development)
* [Howto](#howto)
  * [How to update this readme](#how-to-update-this-readme)
* [Contributing](#contributing)
* [Release history](#release-history)
* [License and Copyright](#license-and-copyright)


## Getting started
Install this grunt plugin next to your project's `Gruntfile.js` with:

    npm install grunt-bump-pom --save-dev

To remove it:

    npm uninstall grunt-bump-pom --save-dev

Then add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks('grunt-bump-pom');


## API
Add something like this in your gruntfile:

    bumppom : {
      options : {
        files : [
          'test/inc/pom.xml'
        ],
        backup : true,
        bump_from_pom : true,
        bump_from_package : false
      }
    },

## Options

### files *Required*

Type: `Array`  

### backup

Type: `Boolean`  
Default: `true`  

### bump_from_pom

Type: `Boolean`  
Default: `true`  

Should we bump the version that is in the files given?

### bump_from_package

Type: `Boolean`  
Default: `false`  

Should we bump the version in the files given from `package.json`?

### xmlSettings

Type: `Boolean`  
Default: 

    {
      ignoreComments                : false,
      ignoreProcessingInstructions  : false,
      createMainDocument            : true,
      prettyIndent                  : 4
    }

Extra options for the xml to json parser. See [node-jsxml](https://npmjs.org/package/node-jsxml/) for more information.
___________


## Documentation
The client code is ment to be self documented. Feel free to [browse the code.](https://github.com/phun-ky/grunt-bump-pom)


## Development
#### Getting started

Download and install the module

    $ mkdir grunt-bump-pom
    $ cd grunt-bump-pom
    $ git clone git@github.com:phun-ky/grunt-bump-pom.git .
    $ git-flow init
    $ npm install
    $ grunt

And happy coding!

#### Deployment

Run

    grunt build-patch

This action will update the bump the `package.json` version, update the changelog and rebuild the readme.

Then

    git commit -am "<commit message>"
    ..
    git push && git push --tags

And you're done!


## Howto
### How to update this readme
If you wish to update this README, edit the relevant `.md`-files in the `docs` directory of the webroot and do:

    grunt readme

This will update the README.


## Contributing
Found a bug? Have a feature request? Please create an [issue](https://github.com/phun-ky/grunt-bump-pom/issues).

#### Code-contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

If you runt `grunt`, tests will be run automagically when you save a file. If you want to run tests manually use:

    grunt test


## Release history
**DATE**       **VERSION**   **CHANGES**                  
* 2014-10-09   5d1ca9a       Reset version in package.json
* 2014-10-09   8f6d87d       Initial commit               

## License and Copyright
Copyright (c) 2014 Alexander Vassbotn Røyne-Helgesen, contributors.  
Released under the ,  licenses


---
_README generated 2014-10-09_

