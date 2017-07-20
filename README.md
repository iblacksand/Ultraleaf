# Ultraleaf

This will be a LaTeX editor that will support Overleaf offline but will enable collaboration in real time.

## Features

- Offline editor is based off [Ace](https://ace.c9.io/). This means syntax highlight, code collapsing, custom syntax highlighting themes, and much more. 
- You can just use the Overleaf website by itself, since Ultraleaf is built on top of chromium. 
- Use git to sync offline with online. This way you don't have to worry about merging online and offline manually.

## Installation for development

<!-- Users will have to first install [git](https://git-scm.com/) **and add it to your PATH** -->

```bash
git clone https://github.com/iblacksand/Ultraleaf.git
cd Ultraleaf
npm install 
npm start
```