---
title: "Drupalize your  data."
layout: post
category : "Drupal Products"
tags : ["Drupal", "Fedora Commons", "Custom Module"]
tagline : "Lessons so far."
---


After banging my head against the wall trying to figure out how to create content that works with all the wonderful Drupal API hooks, but doesn’t live within the Drupal database and filesystem. The Digital Repository Service at Northeastern University Libraries is a custom project with three components, an RESTful API that sends information about objects in the repository, an Apache Solr search index that allows for advanced search, and then my challenge, creating a Drupal based module to communicate between the two. The objects will need to be available for other modules and functions in the Drupal system. Sounds like a pretty reasonable goal right, well it has become a challenge. So much of the Drupal API is database driven, so creating a module that will utilize little of the database storage has become a challenge.

### Why not use Islandora project?

The University Libraries team has investigated already available systems, and decided they needed greater flexibility than the [Islandora modules](http://islandora.ca/) would provide. The project is already very mature and very complex, so we couldn’t just use a small portion of the project and then extend it from there.

### Sarnia

Looking for advice, I posted a discussion, [“Using Drupal as a Client to External Content from a Fedora Item Repository”](http://groups.drupal.org/node/276033) in the Libraries group on Durpal.org. [krlucas](http://groups.drupal.org/user/19593) suggested the Sarnia module to create entities based on the data available in the Solr index. I have tried many times to get a working test implementation, but continue to have issues using it. It seems like a great project, but debugging someone else’s code in a complicated mature project was not an easy task.

## Now what?

I  think I am just going to have to do it myself using as few contributed modules as I can. I have already started building the scaffolding of the module, but I have a long road ahead. I would like to share my experience, lessons learned and hopefully the final project, that I might be able to release onto Drupal.org / github.com .

Wish me luck!
