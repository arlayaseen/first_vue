
import Vue from "vue";
Vue.filter('shorten',function(value,textlength,suffix){
    return value.substring(0,textlength) + suffix
   });