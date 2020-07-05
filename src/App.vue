<template>
<div>
  <LikeHeader >
     <h3>初めまして</h3>
  </LikeHeader>

  <h2>{{number}}</h2>
  <LikeNumber :totalNumber='number' v-on:my-click="number=$event"></LikeNumber>
 <button @click="currentComponent='Home'">Home</button>
 <button @click="currentComponent='About'">About</button>
 <keep-alive>
   <component :is="currentComponent"></component>
 </keep-alive>

 <div>
   <h2>form</h2>
   <label for="maxNumber">タイトル人数</label>
   <input id=" maxNumber" 
          type="number"
          v-model.number="eventData.maxNumber"

          >
          <P>{{typeof eventData.maxNumber}}</P>
 </div>

  <!-- <input type="checkbox"
           id="isPrivate"
           v-model="isPrivate"
           >
          <label for="isPrivate">非公開</label>
          <p>{{event.isPrivate}}
          </p> -->

 <label for="host">タイトル人数</label>
   <input id="host" 
          type="text"
          v-model.trim="eventData.host">

          <P>{{eventData.host}}</P>

          <label for="detail"></label>
          <textarea id="detail" cols="30" v-model="eventData.detail"></textarea>
          <p style="white-space: pre;">{{eventData.detail}}
          </p>

           <input type="checkbox"
           id="isPrivate"
           v-model="eventData.isPrivate"
           >
          <label for="isPrivate">非公開</label>
          <p>{{eventData.isPrivate}}
          </p>
          <p>参加女権</p>
          <input type="checkbox" id="10"
          value="10大"
          v-model="eventData.target">
          <label for="10">10第</label>
          <input type="checkbox" id="20"
          value="20大"
          v-model="eventData.target">
          <label for="20">20第</label>
          <input type="checkbox" id="30"
          value="30大"
          v-model="eventData.target">
          <label for="30">30第</label>
          <P>{{eventData.target}}</P>

         
 <!-- <About v-if="currentComponent === 'About'"></About>
 <Home v-if="currentComponent === 'Home'"></Home> -->
</div>
</template>

<script>

import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
export default{
    data(){
      return {
        number: 15,
        currentComponent: 'Home',
        eventData: {
          title: "",
          maxNumber: 0,
          host:'',
          detail:"",
          isPrivate: false,
          target: []
        }
    };
    },
      components: {
        LikeHeader,
        About,
        Home   //本来ならkey vlue えs６で省略
      } 
    }
</script>



//普通にファイル指定ミスるとコンパイルできない
