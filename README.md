# Angular Basics

In this project I demonstrate the use of the basic functionalities of Angular (6).
The project has two parts:
- A store
- A country presenter

## The store
The store draws its data from a back-end JavaSpringBoot persistence API (that I wrote), persisting to an apache derby local server. I'm hoping to upload the code for theDB as well. You can see the get/post calls being made to the API in the services\product-rest.service.ts service file.

In the store I present the following functionalities:
- Correct modeling of an Angular app
- Using the router module
- Creating a search functionality using a setter
- Passing input down to a child component
- Firing an EventEmitter once an event occurs in a child component

## The country preseter

  The CountriesService creates a get request to restcountries.eu and then presents the flags of the country retuned.
