# Git.js

Git.js is an interface deployed in Ultraleaf that you can use in your electron projects.

## Installation

Just download git.js and put it in your /js folder(or where ever you put your javascript).

## Usage

### Setup

First you need to require git.js

```javascript
var git = require('path_to_git.js'); // where path_to_git.js is the location where you put git.js (ex './assets/js/git/git.js')
```

Then you need to set the directory of the repo

```javascript
git.setRepo("C:/examplerepo");
```

### Pull

To pull from the repository all you do is

```javascript
git.pull();
```

### Add everything from repo and push it

To add everything in the repository and push it, do

```javascript
git.pushAll();
```

The commit message will just be the date in milliseconds.

### Sync repo

This will pull from the repository and then push the repo

```javascript
git.sync();
```

### Add file

This will add the file given to the next commit

```javascript
var file = "./example.txt";
git.addFile(file);
```

### Add files

This will add the files given to the next commit

```javascript
var files = ["./example.txt", "./readme.md", "main.js";// all files given in a string array
git.addFiles(files);
```

### Commit files

This will commit added files with the given message

```javascript
git.commit("my commit message");
```

### Logging

Git.js will log into the console what git puts out by default. You can disable/enable this feature.

```javascript
git.enableConsoleLogging()// enables console logging

git.disableConsoleLogging()// disables console logging
```

Regardless of the settings set above, you can get the all of the console output from the git object like so:

```javascript
git.getLog()
```