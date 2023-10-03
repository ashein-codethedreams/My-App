<template>
  <div>
      <table class="table">
          <thead>
              <tr>
                  <th v-for="header in headers" :key="header">{{header}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in items" :key="item">
                  <td>{{item.name}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.city}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
     props:{
         headers:Array,items:Array
     }
}
</script>

<style>

</style>