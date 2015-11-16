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

# Options

## files *Required*

Type: `Array`  

## backup

Type: `Boolean`  
Default: `true`  

## bump_from_pom

Type: `Boolean`  
Default: `true`  

Should we bump the version that is in the files given?

## bump_from_package

Type: `Boolean`  
Default: `false`  

Should we bump the version in the files given from `package.json`?

## xmlSettings

Type: `Boolean`  
Default: 

    {
      ignoreComments                : false,
      ignoreProcessingInstructions  : false,
      createMainDocument            : true,
      prettyIndent                  : 4
    }

Extra options for the xml to json parser. See [node-jsxml](https://npmjs.org/package/node-jsxml/) for more information.

### use_snapshot

Type: `Boolean`  
Default: `false`  

Should we replace prelease versions with 'SNAPSHOT'?  
Example:  1.2.3-0 becomes 1.2.3-SNAPSHOT
___________
