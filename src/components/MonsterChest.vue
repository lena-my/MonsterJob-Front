<template>
    <div>
      <p>Buste</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        MyMonster: Object,
    },
    created(){
      console.log('buste ' + this.MyMonster.GETColor());
    }
  };
  </script>
  