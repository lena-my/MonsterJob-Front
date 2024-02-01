<template>
    <div>
      <p>tete</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        MyMonster: Object,
    },
    created(){
      console.log('tete ' + this.MyMonster.GETColor());
    }
  };
  </script>
  