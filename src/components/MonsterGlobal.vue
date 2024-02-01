<template>
  <div class="monsterGlobal">
    <MonsterHead :MyMonster="MyMonster"></MonsterHead>
  <MonsterChest :MyMonster="MyMonster"></MonsterChest>
  <MonsterArm :MyMonster="MyMonster"></MonsterArm>
  <MonsterArm :MyMonster="MyMonster"></MonsterArm>
  <MonsterLeg :MyMonster="MyMonster"></MonsterLeg>
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
  margin: 5%;
  width: 100%;
}
@media screen and (min-width: 600px){
  .monsterGlobal {
  width: 50%;
  }
}
</style>
  