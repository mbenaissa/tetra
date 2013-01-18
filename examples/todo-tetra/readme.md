![todomvc logo](https://raw.github.com/addyosmani/todomvc/gh-pages/media/logo.png) ![travis](https://secure.travis-ci.org/viadeo/tetra.png)  
=====

## TODOMVC with Tetra, a clean MVC javascript framework

Tetra aims to help developers build faster, more maintainable and better structured code.

Tetra is a complete MVC (Model, View, Controller) framework, normalizing all implementations through a simple structure that splits the code into 3 different layers :
   * [View](/viadeo/tetra/wiki/View-layer): DOM access and UX behaviors 
   * [Controller](/viadeo/tetra/wiki/Controller-layer): Programmatic logic
   * [Model](/viadeo/tetra/wiki/Model-layer): Structured data and Ajax requests
   
Each layer has access to a communication pipe linked to a potential listener, allowing asynchronous communication between each part of the application.

The Tetra.js framework is also Object-oriented, encouraging the developer to better separate and organise structured data and its associated logic. An [ORM &#40;Object-Relational Mapping&#41;](/viadeo/tetra/wiki/ORM:-Object-Relational-Mapping) encapsulates Ajax transactions and ensures data consistency between front- and back-end.

Additionnally, the "[bootnode](/viadeo/tetra/wiki/Bootnode)" feature allows JavaScript resources to be loaded dynamically, either through data attributes set on DOM nodes or via a dependency management system.

Slides about Tetra.js & Tetra UI for a quick overview:
<http://viadeo.github.com/tetra-slides/2012-11-20/>

## Applications tree
By default, the Tetra.js framework expects a particular directory tree structure. Following this convention allows you to use the bootnode feature to dynamically load JavaScript resources.

   * **tetramvc**
      * **apps**
		 * _application name_
		    * **controller**: Controller classes of the application
			   * _***.ctrl.js_
		    * **model**: Model classes of the application
			   * _***.class.js_
		    * **view**: View classes of the application
			   * _***.ui.js_
      * **model**: Global model classes

## More informations
<https://github.com/viadeo/tetra/>

## Licence
(The MIT License)

Copyright (c) Viadeo/APVO Corp., Olivier Hory and other Tetra contributors.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
