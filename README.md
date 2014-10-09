# grunt-bump-nexus - version 0.0.1-2
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/phun-ky/grunt-bump-nexus.png)](https://travis-ci.org/phun-ky/grunt-bump-nexus)
[![Dependency Status](https://gemnasium.com/phun-ky/grunt-bump-nexus.png)](https://gemnasium.com/phun-ky/grunt-bump-nexus)
[![NPM version](https://badge.fury.io/js/grunt-bump-nexus.png)](http://badge.fury.io/js/grunt-bump-nexus)

> A grunt plugin to bump the deploy version in your nexus deployment file(s)

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

    npm install grunt-bump-nexus --save-dev

To remove it:

    npm uninstall grunt-bump-nexus --save-dev

Then add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks('grunt-bump-nexus');


## API
Add something like this in your gruntfile:

    bumpnexus : {
      options : {
        files : [
          'test/inc/test_before.txt'
        ],
        backup : true,
        project : 'projectx',
        version_identifier : 'resource.maven.war.version'
      }
    },

## Options

### files *Required*

Type: `Array`

### backup

Type: `Boolean`
Default: `true`

### project *Required*

Type : `String`

### version_identifier *Required*

Type : `String`



___________


## Documentation
The client code is ment to be self documented. Feel free to [browse the code.](https://github.com/phun-ky/grunt-bump-nexus)


## Development
#### Getting started

Download and install the module

    $ mkdir grunt-bump-nexus
    $ cd grunt-bump-nexus
    $ git clone git@github.com:phun-ky/grunt-bump-nexus.git .
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
Found a bug? Have a feature request? Please create an [issue](https://github.com/phun-ky/grunt-bump-nexus/issues).

#### Code-contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

If you runt `grunt`, tests will be run automagically when you save a file. If you want to run tests manually use:

    grunt test


## Release history
**DATE**       **VERSION**   **CHANGES**                               
* 2014-10-07   b14306d       Merge branch 'develop'                    
* 2014-10-07   ceb7494       Updated readme and gruntfile              
* 2014-10-07   8c65058       Merge branch 'hotfix/0.0.1-1' into develop
* 2014-10-07   44f6929       Merge branch 'hotfix/0.0.1-1'             
* 2014-10-07   a0a989a       Fixed bump                                
* 2014-10-07   0bfea98       Merge branch 'release/0.0.1' into develop 
* 2014-10-07   f0235f4       Merge branch 'release/0.0.1'              
* 2014-10-07   3eadb8b       Initial build before first release        
* 2014-10-07   fef335c       Added files and tasks                     
* 2014-10-07   8e1db9d       Added bak files                           
* 2014-10-07   c8f0702       Initial commit                            

## License and Copyright
Copyright (c) 2014 Alexander Vassbotn Røyne-Helgesen, contributors.  
Released under the ,  licenses


---
_README generated 2014-10-07_

