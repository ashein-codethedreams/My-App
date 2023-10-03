<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-student-table v-bind:headers="headers" v-bind:items="students"></app-student-table>
    <app-post v-for="post in posts" :key="post">
      <template v-slot:titleSlot>
      <h3>{{post.title}}</h3>
      </template>
      <template v-slot:bodySlot>
      <p>{{post.body}}</p>
      </template>
    </app-post>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import StudentTable from './components/StudentTable.vue'
import Navbar from './components/Navbar.vue'
import Post from './components/Post.vue'

export default {
  name: 'app',
  components: {
    "app-footer":Footer,
    "app-student-table":StudentTable,
    "app-navbar":Navbar,
    "app-post":Post
  },
  data(){
    return{
      headers:["Student Name","Email","City"],
      students:[
        {name:"Su Su",email:"susu@yahoo.com",city:"Mdy"},
        {name:"Aye Aye",email:"ayeaye@gmail.com",city:"Ygn"},
        {name:"Ko Ko",email:"koko@gmail.com",city:"Bago"}
      ],
      posts:[
         {title:"First Post",body:"First Title"},
         {title:"Second Post",body:"Second Title"},
         {title:"Third Post",body:"Third Title"},

      ]
    }
  }
}
</script>

<style>

</style>
