### Getting started

Download and install the module

    $ mkdir {%= name %}
    $ cd {%= name %}
    $ git clone {%= repository.url %} .
    $ git-flow init
    $ npm install
    $ grunt

And happy coding!

### Deployment

Run

    grunt build-patch

This action will update the bump the `package.json` version, update the changelog and rebuild the readme.

Then

    git commit -am "<commit message>"
    ..
    git push && git push --tags

And you're done!
