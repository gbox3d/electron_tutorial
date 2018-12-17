import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Meteor.startup(() => {
  // code to run on server at startup
  console.log('start up')
});


// const {fs} = require('fs');
// const { readFileSync } = require('fs')

window.readConfig = function () {

  //console.log(readFileSync)
  //const data = readFileSync('./config.json')
  //return data
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  //console.log(readFileSync)
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
