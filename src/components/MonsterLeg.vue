<template>
    <div>
      <p>jambe</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        MyMonster: Object,
    },
    created(){
      console.log('jambe ' + this.MyMonster.GETColor());
    }
  };
  </script>
  