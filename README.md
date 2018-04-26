# tacebook

This project is created for educational purposes. Lecturer of web development at the University assigned us to write front end of facebook copy. We had to write html/css project using a little bit of js for effects, but the project is a bit ahead with js usage. By the way, 'tacebook' because the only difference (Among what really is copied, otherwise project misses many things from fb) is 180 degrees rotated logo, which makes it t, so tacebook.

## Getting Started

All files in this project are front-end items and nothing else.

### Dependencies

Project doesn't use any dependencies, because it was demand from university not to use any front end frame works or libraries (To undestand html/css/js principles itself) so it doesn't even need internet connection.

### Build

As already mentioned, project doesn't have neither backend, nor any frameworks that needs to be compiled or translated to anything, since everything is written in plain html/css/js, all project needs to run is to open index.html in browser.

## Project structure

Project structure was fully implemented spontaneously, when I started writing js codes to change dom elements, just thought that this kind of structure would give me easier experience.

### Views

As seen in the index.html, there is written almost nothing, only head components and js includes and app tag, which is main thing to mention.

The app tag is used to place everything inside of it, its name doesn't matter, I just chose it because it did nothing in html.

After site.js is included it starts to render whole app, by appending application view to app. starting from here, project uses new js templatings/literals and adds variables or other views using literal placeholders.

This kind of structure helps code to be clean, every time any object needs to be added/changed/removed object's view is called on object and view function generates needed string to insert into dom.

### Data Bases

Since the project was intended to be only front end web site, there is on real db, instead there is some dummy data in db folder, stored as json, which can be used to read or write everything before the page is reloaded, then everything starts anew.

### Services

To make code more modular, I created services folder and logically split services files, which is used to take or insert anything in the database. This can be used in future to connect to server and make changes there easily.

Since I couldn't use import/exports of modules everything seen in there is really just an abstraction, db/vars/functions can be accesed from any place of code, but still as an abstraction service 'methods' are stored in its nameService variables.
