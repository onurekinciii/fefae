<template>
  <div id="chart">
    <h1 class="title">{{Title}}</h1>
    <h3 class="miniDes"><bold style="color:red!important;line-height:1.5em;">Safak okullari</bold> icin hazirlanmistir.</h3>
    <ul class="menud">
      <li @click="blabla='esma'">Esma K.</li>
      <li @click="blabla='yusuf'">Yusuf Y.</li>
      <li @click="blabla='onur'">Onur E.</li>
    </ul>
    <component :id="blabla" :is="blabla"></component>
</div>
</template>

<script>
import yusuf from './yusuf.vue'
import esma from './esma.vue'
import onur from './onur.vue'
export default {
  name: 'HelloWorld',
  components: {
    yusuf,
    esma,
    onur
  },
  data(){
    return {
      Title : "Teknoloji'nin Zararli Yonleri",
      blabla : "onur",
    }
  }
}
</script>

<!-- Add "scoped" attribute  limit CSS to this component only -->
<style>
.menud{
  list-style: none;
  text-decoration: none;
  margin:0px 0px 75px 0px;
  padding:0;
}
.menud li{
  float: left;
  margin-left: 0px;
  text-align: center;
  border: 2px solid black;
  padding: 5px;
  font-family: NeogreyRegular, Fallback, sans-serif;
}
.menud li:hover{
  padding-right: 30px;
  padding-left: 10px;
  transition: 0.4s ease-in padding;
}
.menud li:not( :hover ){
  transition: 0.4s ease-in padding;
}
@font-face {
    font-family: GraublauWeb;
    src: url("../assets/neuropolitical/HornetsFilled.ttf") format("opentype");
}
@font-face {
    font-family: NeogreyRegular;
    src: url("../assets/neuropolitical/neogrey/NeogreyMedium.otf") format("opentype");
}
@font-face {
    font-family: accid;
    src: url("../assets/neuropolitical/accidental_presiden/accid___.ttf") format("opentype");
}

.title{
  font-size: 40px;
  text-align: left;
  color: black;
  line-height: 1.3em;
  font-weight: 400;
  font-family: 'GraublauWeb', Fallback, sans-serif;
  margin-bottom: -32px;
}
.point{
  text-align: left;
  font-family: NeogreyRegular, Fallback, sans-serif;
  margin: 50px 0px 0px 0px;
}
.article{
  text-align: left;
  margin: 50px 0px 0px 0px;
  font-family: Georgia, serif;
  max-width: 800px;
}
.miniDes{
  text-align: left;
  margin-left: 0px;
  color: black;
  line-height: 1.3em;
  font-weight: 400;
   font-family: 'GraublauWeb', Fallback, sans-serif;
}
</style>
