<template>
  <div class="monsterGlobal">
      <div class="monster-top">
        <MonsterHead  :MyMonster="MyMonster"></MonsterHead>
        <MonsterArm  :MyMonster="MyMonster"></MonsterArm>
        <MonsterChest class="monster-chest" :MyMonster="MyMonster"></MonsterChest>
      </div>
      <MonsterLeg :MyMonster="MyMonster"></MonsterLeg>
      
  </div>
</template>
  
<script>
import Monster from "../functions/classMonster.js";
import MonsterHead from "./MonsterHead.vue";
import MonsterArm from "./MonsterArm.vue";
import MonsterChest from "./MonsterChest.vue";
import MonsterLeg from "./MonsterLeg.vue";

export default {
  name: 'MonsterGlobal',
  components: {
    MonsterHead,
    MonsterArm,
    MonsterLeg,
    MonsterChest
},
  data() {
    return {
      MyMonster: new Monster(),
    }
  },
  created() {
    this.MyMonster.InitLevel('D');
    let color = this.MyMonster.GETColor();
    console.log(color);
  }
}
</script>
<style lang="scss">
.monsterGlobal {

  border: 3px red solid;
  margin: 5%;
  width: 100%;
  position: relative;
  padding-top: 150px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .monster-top{
    display: flex;
    position: absolute;
    bottom: 15px;
    z-index: 1;
    width: 100%;
    .monster-chest{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }
    .monster-arms{
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .monster-legs{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      padding: 10px;
    }

  }
  img {
    object-fit: contain;
    overflow: hidden;
    min-width: fit-content;
  }
}
@media screen and (min-width: 600px){
  .monsterGlobal {
  width: 50%;
  }
}
</style>
  