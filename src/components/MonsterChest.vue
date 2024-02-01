<template>
    <div class="chest" :style="{ top: y + 'px', left: x}">
      <img src="../assets/PNG/Default/body_blueC.png" alt="chest" > 
    </div>
  </template>
  
  <script>
  export default {
    props: {
        MyMonster: Object,
    },
    created(){
      console.log('buste ' + this.MyMonster.GETColor());
    },
    computed:{
      name(){
        return this.MyMonster.GETName();
      },
      x(){
        return this.MyMonster.GETX();
      },
      y(){
        return this.MyMonster.GETY();
      },
      width(){
        return this.MyMonster.GETWidth();
      },
      height(){
        return this.MyMonster.GETHeight();
      }
    }
  };
  </script> 
  <style lang="scss">
  .chest{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    img{
      margin: auto;
    }
    
  }
  </style>
  