---
title: JavaScript Interview Questions Part 2
category: js
tags:
 - js
 - interviews
 - professional development
layout: post
published: true
---

These questions came from a recent technical phone interview from a company that is known for particularly difficult interviews.

#### Problem 1

The problem was to write a function that would remove duplicates from an array. Below was the most straight forward approach, although not very efficient.

```js
function removeDuplicates(list) {

 for (let i = 0; i < list.length; i++) {
  // n
  for (let j = i+1; j < list.length; j++) {
   // n - 1
   if (list[i] === list[j]) {
     list.splice(list[j], 1);
   }
  }
 }
 return list;
}

function removeDuplicates(list) {
  let found = {}
  list.forEach(item => found[item]))
  return Object.keys(found)
}

// Second

function removeDuplicates(list) {
 let found = {};
 //let result = [];
 return list.forEach((i) => {
  found[i] = null;
  if (!(i in found)) {
   // result.push(i);
   // list.splice(i, 1);
  }
 })
}

let list = [0, 1, 1]

 found[0] null
 found[1] null
 i in found

```

#### Problem 2


The second problem was to take a class, `function Widget() {}`, with a method, `Widget.prototype.foo = function() {}`. There is an array full of widgets,  `var widgets = [ \*... an array of widgets ...*\]`, that the goal was to take that array and call the `.foo()` method on the ith widget after i seconds.

```js
widgets.forEach(function (widget, i) {
  (function(i, widget) {
   window.setTimeout(widget.foo, i * 1000);
   })(i, widget);
});
```

#### Problem 3
QQ:
Describe how prototypal inheritance works. Achieve the same code-reuse in JS as this example in classical OOP:
In OOP:
A - constructor, initializes a,b and has two methods foo, bar.
B extends A - own constructor that calls in super constructor, inits c, overrides foo and has access to bar.

```js
function A (a, b) {
 this.a = a;
 this.b = b;
}

A.prototype = {
 foo: function() {},
 bar: function() {}
};

function B (a, b, c) {
  A.apply(this, arguments);
  this.c = c;
}

B.prototype = Object.create(A.prototype);
B.prototype.foo = function anotherFoo() {};
```
