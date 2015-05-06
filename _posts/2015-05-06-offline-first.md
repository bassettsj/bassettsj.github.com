---
published: false
categories: 
  - web
  - offline
tags: 
  - offlinefirst
  - web
---

Working on the mobile web platform for [Upwork](https://www.upwork.com), performance can become the technical bottlekneck that limits the ultimate goal of our success, customer aquisition to the platform. The initial experience with the web page is everything, and if our initial experience takes more than a couple of seconds or doesn't work at all, we have probably lost that person as a customer forever. 

As I commute to and from the office in Mountain View from San Francisco, the center of inovation, I continually experience frustrating or totally broken experiences trying to use the web. Sitting in the caltrain, the LTE signal frequently acts more like pre-edge data services and some sites will refuse to load. My experience is not unique. Around the world, more business is done through a mobile device with limited bandwidth and sometimes no connection at all.

> "Frequently not having any data connection in even the wealthiest and most developed cities of the world has led us to conclude that no, the mobile connectivity/bandwidth issue isn’t just going to solve itself on a global level anywhere in the near future."

-- [_Say Hello To Offline First_](http://hood.ie/blog/say-hello-to-offline-first.html)

People who build the web are overly optimistic about their creations, little thought is paid for handling the less than perfect conditions our users face. We we think about the animations in our web application as it navigates, but don't think about if it would work for low-end smartphones being sold all over the world. The same is true for how we handle network connectivity. We spend only enough time to build a error page when a network request fails. This error page will probably prevent the user from doing anything else. It time we rethink this approach.

> "We can’t keep building apps with the desktop mindset of permanent, fast connectivity, where a temporary disconnection or slow service is regarded as a problem and communicated as an error."

-- [_Say Hello To Offline First_](http://hood.ie/blog/say-hello-to-offline-first.html)

## Business Cost

> "Amazingly, despite the varied power and bandwidth of mobile devices, users expect them to be faster than desktops. Forty-percent of visitors abandon a website that takes more than 3-seconds to load"

If your site doesn't load in less than three seconds on WiFi, the number of visitors who leave on a low-bandwidth celluar connection is far greater than half. A business can't continue to grow with those numbers.

## Offline First

We need to adopt a new approach to application design that is embraces the fact that users frequently face low to no connection enviornmnets. This design will be inheriently more flexible and fault tollerant. We can achieve these goals due to new web standards that are being quickly developed to solve these issues. 

### ServiceWorker API

Allows applications to have control over the caching of static assets, which are particularly important in single page applications.

### Client Sidestorage

Allows browsers to store data within the browser itself. This is important for handling the content fetched from the API. Projects like [LocalForage](https://github.com/mozilla/localForage) by Mozilla, wrap around LocalStorage, IndexedDB and WebSQL.

### User Experience Questions

- Does the app even need to inform the human of the current connection state? Is this information even relevant to the human? If so, how can this best be done?
- Can I give the users more trust in the app, leaving them safe in the knowledge that it won’t forget the last state it was in, and that it won’t lose any data, regardless of what the connectivity situation is?
- How can I communicate to the human that creating data within the app is still possible offline, and that it will be posted/dispatched/properly dealt with in the future?
- How can my interface convey changes that occur in the users’ current view when they reconnect and the server pushes new and changed data? What to do with deleted items, things that can’t be organised in lists, objects that aren’t in themselves immutable (like emails)?
- How can I make the inevitable resolution of conflicts by the human as painless and intuitive as possible?
- Can the app make any preemptive decisions on the part of the human and pre-load any low-overhead data they might need later?
- What metrics (possibly behavioural) are there to base these decisions on?
- How can I word all of these scenarios in a way that doesn’t worry the users, that embraces offline as an unproblematic reality?

