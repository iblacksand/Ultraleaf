# Git.js

Git.js is an interface deployed in Ultraleaf that you can use in your electron projects.

## Installation

Just download git.js and put it in your /js folder(or where ever you put your javascript).

## Usage

### Setup

First you need to require git.js

```javascript
var git = require('./assets/js/git/git.js') // ./assets/js/git/git.js is the location where you put git.js
```

Then you need to set the directory of the repo

```javascript
git.setRepo("C:/examplerepo")
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
git.sync()
```