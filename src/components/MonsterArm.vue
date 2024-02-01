<template>
    <div>
      <p>bras</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        MyMonster: Object,
    },
    created(){
      console.log('bras ' + this.MyMonster.GETColor());
    }
  };
  </script>
  