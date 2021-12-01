# Passenger App

### Description of Project

The project contains all the items I need to do in the assessment case study you gave me. I saved the data i used in the project (create data/passenger) using **mock.api**.First of all, i decided to do the project i wanted to do with Vue2 because I couldn't find enough resources to do it using Vue3.I converted the images i used in the project to **Webp** format so that it can be faster on the seo side.Also, the design is **responsive**. i adapted it for all devices using the media screen feature.I got help from the vue2 google maps library in the project and I read a lot of code about this library and examined the project.The link of the component i used is below,

* [Vue2 Google Maps Component](https://www.npmjs.com/package/vue2-google-maps)

I also added a login panel to provide integrity on the frontend side of the project.I provided the user information in the login panel with the structure i created via **mock.api**.

| Username      | Password      | Local                  |
| ------------- |:-------------:|:---------------------: |
| admin         | admin         | http://localhost:8080/ |

![mockapi](https://user-images.githubusercontent.com/24936165/144190714-1e954c0b-7da8-4036-86aa-6e2ad6f753ea.png)

Two mandatory warning messages given in the case document have been added;

* Route duration from start to finish is over 2 hours
* Input has passengers more than 9

#### Google Maps Section

I used 3 api libraries of **Google Maps**.Markings on the map, Distances and to use Google Maps,

* Directions API
* Distance Matrix API
* Maps JavaScript API

![googlemaps](https://user-images.githubusercontent.com/24936165/144190780-d69f66d8-c8e5-4cf8-8411-d18ceb572117.png)

I have 3 parts in my project.These are **Passengers panel**(means main page),**Create new passenger** and **Route details** page.You can see these sections in the header section.

##### Passengers Panel

We can see the user information recorded on this page in a table, and we can sort them by order and travel length. There is also a search bar for filtering by name to search in long lists.Also we can delete or edit passengers in this table.

![PassengersPanel](https://user-images.githubusercontent.com/24936165/144192322-82dfaba6-7cbd-4a39-8cef-7494884be8f3.png)

##### Create New Passenger

On this page, after entering the name and passenger information of the person, we select the destination on the map (with A and B marked) and automatically lat and lng information comes from here. Using this information, it shows the distance between points A and B by using the library of Google Maps. Then we can create a new passenger.

![CreatePassenger](https://user-images.githubusercontent.com/24936165/144192364-3dd37bfd-de4c-43bf-9d0c-5bbc5a9dbbfa.png)

##### Route Details

On this page, we can access the route details of the previously registered passengers. We can also see the **average trip duration** among all passengers on this page.

![RouteDetail](https://user-images.githubusercontent.com/24936165/144190946-1b9d098b-47e3-49b8-b5a4-436af4fd5f71.png)


### Also, below are the resources I used while making this case,

* [Using Api Keys](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [How To Use Google Maps in Vue](https://www.digitalocean.com/community/tutorials/vuejs-vue-google-maps)
* [Create Google Map and Add Markers Direction](https://www.youtube.com/watch?v=r_kLBoBiV_U&ab_channel=BuildRealApp)
* [Draw Navigation Routes on a Map with Vue.js](https://www.youtube.com/watch?v=HMwaLZJ_7ow&t=74s&ab_channel=HERETechnologies)