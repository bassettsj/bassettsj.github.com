---
title: Solr Search Upgrade
tagline: Building a faster and more usable search for an existing production site.
layout: project
tags:
  - Drupal
  - Search API
  - Projects
  - Solr
  - Search API Views
  - Usability
category: projects
published: true
coverimage:
  src: "/assets/img/projects/library-solr-search/library-solr-cover%402x.png"
  alt: "Search API Solr Implemnation, two screenshots of search results pages for searching for nodes and users in a drupal site."
  caption: "Search API Solr Upgrade"
---
Solr is a lucene based search technology that provides full-text searching at incredible speeds. After seeing that our production Drupal site was experiencing problems with the [Search by Page](http://drupal.org/project/search_by_page) minor update and seeing some pretty significant performance issues with a database based search, I purposed and started prototyping a solr based site search tool. 

The upgrade featured spell checking, facet based browsing and flexible result display with the views module. The search site upgrade was going to be deployed using [features](http://drupal.org/project/features); the code block below shows the features breakout of configuration for the different environments the site would be moved to.

    _features 
      _search
        search_api_library #Holds components that are are environment agnostic.
        search_api_production #the other features are specific for environments
        search_api_staging
        search_api_development
