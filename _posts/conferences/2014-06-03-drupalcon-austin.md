---
title: DrupalCon Austin
layout: post
tagline: Drupal 8 Ready!
---

> Sessions, sprints and a reunion.


## Keynote: Dries

If we look at the camera's user journey.

Every iteration of the camera, reduced the number of steps for the user. With the instamatic, we were able to remove processing, digital to remove needing to store. Every itteration reduced the complexity for the user, but caused the complexity of the device to increase.

> Innovation enables experience.

Static Web > Dynamic Web > Assembled Web > ?

#### e-commerce example

How can we eleminate steps in the user journey in buying a t-shirt. If we can add an identity service, that takes care of shipping, payment and size information in the process.


#### Drupal 8

- Semantic
- Entity & Views: complete with RESTapi
- Themeing
- Twig, HTML5, Modernizr
- Deployment: Configuration management

## Browser eyeballing != javascript testing

Jasmine, qunit, blah, blah

Use grunt for CI stuff


### Build a Drupal Free Theme with Drupal 8 's Rest API's and JS

Themeing for Drupal sucks...

[Slides](http://rcaracaus.github.io/dc-austin-dft/)


- What if we could have semantic hmtl? or have scalable CSS?

> RAW DATA PLEASE!?

Web services and REST.

D8 provides:

- HAL
- HTTP Basic Authentication
- Serialization

[POSTman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en)

## OO Render

The theme system in Drupal sucks, again...


The render system is complicated, and it is because it is just an array based system. Drillability is something we cannot do with Drupal 8.

`drupal_render().` = we create a big array of stuff, eat it and return a string of HTML.

It is called a lot, up to 8 recurses and 200 times.

#### What do we need?

I. An abstracted, alterable , consistent me=odel of structured content.
II. A sensible, accessible API for this model.


### Layout design patters.

[@pixel_whip](http://twitter.com/pixel_whip)
