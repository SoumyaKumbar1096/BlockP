<template>
  <div class="main_app">
    <h1>Hello {{msg}}</h1>
    <button type="button" v-on:click="displayMe">Click me!</button>
  </div>
</template>

<script>
import {getBlockList} from '@/entry/background.js';

export default {
  name: 'popupView',
  data () {
    return {
      msg: 'popup'
    }
  },
  methods: {
    displayMe: function (){
    
      alert("Button clicked");
      console.log(getBlockList());
    
      chrome.tabs.create({
        url: chrome.runtime.getURL(`index.html`)
      })

      // const url = chrome.runtime.getURL(`blockp-extension/dist/index.html`);
      
    }
  }
}

</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
