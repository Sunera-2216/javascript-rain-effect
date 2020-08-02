# Javascript Rain Effect

## Simple rain effect using HTML, CSS and javascript

`style.css` file contains styles for html document and water drop. For water drop here i used a linear-gradient.

`waterDrop.js` file contain the code for one water drop. WaterDrop class have constructor, show() and fall() methods. show() method creates element for one water drop and shows it on `drops-section` div in html file. fall() method controlling the random falling of water drops.

`rain.js` file contains code for the actual rain effect. It will randomly generates numbers for X, Y coordinates, drop speed, drop width and drop height. Then according to the user input of drops number it will display rain effect. Default number of drops are 100.