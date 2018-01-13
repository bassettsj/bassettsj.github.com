---
title: Forward JS
layout: post
tagline: Not a confernce, a rally!?
tags:
 - conferneces
 - js
 - San Francisco
categories:
 - conferences
 - js
coverimage:
  src: "/assets/img/conferences/forward-js-2.jpeg"
  alt: Forward JS 2014
---

[Forward JS](http://forwardjs.com/) was a one day conference in San Francisco. I won the tickets at SF JS. I have been looking forward to
to this for a while. Let's talk about frameworks, node and everything in between.



## Choosing a front-end framework...

What the blogs aren't telling us.

We make decisions at every scale, from language to framework, to library to a variable name. Most of our decision come from intuition.


## NodeJS for Everything

by [@swigby](http://twitter.com/swigby)


Let your application crash.

Debug with [node-inspector](https://github.com/node-inspector/node-inspector).

Modlous is using node for everything except for just SSL decription.

_Do no use astricks_ for your pacakages on NPM. Use proper versioning, as a package contributor.

Stateless, keep your application as stateless as possible. It allows you to scale. If you need to use state, use redis to keep state.

Express is a great tool for building APIs. Fast  unopionated, inimalist web framework.

Hapi is a HTTP Server frameworks from the minds at walmart labs.

Restify REST framework.

Horizontal scalablility -> be able to have multiple instances and be able to scale it that way.

Don't reinvent the wheel, don't start from scratch. That is why there is NPM.

Start testing early! Pick a testing frameworks and start writing tests.

If your not using streams, get familiar.

KISS stupid.


## Introduction to Generators in ES6

Great for writting co-routines that are synchronous.

Callback hell can quickly happen in node land. Promises promise some relief to callbacks. You can never return to the original stack.

```
var Gen = function *() {
  var val = field 6;
  return val + 3;
};

var gen = gen();
var val = gen.next().value // val == 6
val = gen.next().value // val == 9
```

Coroutines is a stak of code that runs independently of the main thread.

For realworld applications, try using [co](https://www.npmjs.org/package/co).

Koa is a middleware focused framework that allows you to transverse the stack.

Shen, a toolbox for composing generators.


## Choose your own Adventure

Kyle Simpson [@getify](http://twitter.com/getify)

[Slides available](https://speakerdeck.com/getify/js-adventure)

What if your team could get over using spaces vs. tabs or using semi-colons  vs. not. Configurable 2-way code formatting. Smarter tools make for better developers.

Sweet.js adds simple macros to the language.

Build tools that gets around the short falls of javascript.
[FoilScript: a list of tools](https://github.com/getify/FoilScript).

Have javascript your way.

* espima/acorn (parser)
* escodegen (code generator)
* escope/eslevels (scope analyzer)
* istanbul (code coverage)
* estraverse (analyze AST)
* eslint (plugable linting tool)
* plato/jscomplexity.org (complexity)


## State of Mobile HTML5

> Half full or half empty?

Tomomi Imura [@girlie_mac](http://twitter.com/girlie_mac)

Open web advocate, mobile geek, worked at Yahoo! Mobile, Palm, Nokia.

2012 was the first year of mobile chrome. Firefox has been in the game for a long time. Opera was in presto, then webkit and joined the blink engine. iOS' safari is only every year. Microsoft has released IE 10 and finally.

Disrupt App Store.

> I am tired of hearing native's better.

Distributing outside of app store.

Coremob Camera

HTML Media Capture

FileReader()

drawImage()

getImageData()

upload with XHR2


Touch Events v.1

## React and Flux

> unidirectional data binding to clean up our code.

[Flux: An Application Architecture for React](http://facebook.github.io/react/blog/2014/05/06/flux.html)

[Slides](https://speakerdeck.com/fisherwebdev/fluxchat)



## Embracing Failure on the Frontend

* Montior change with services.
* Phantomas
* [chaos-monkey-browser](https://www.npmjs.org/package/chaos-monkey-browser)
* Monitor key performance metrics over time.
* Bad performance = failure.
