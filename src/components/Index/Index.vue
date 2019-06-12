<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "./chidlren/Header";
import vNav from "./chidlren/Nav";
import vContent from "./chidlren/Content";
import vFooter from "./chidlren/Footer";
export default {
  components: {
    vHeader,
    vNav,
    vContent,
    vFooter
  }
};
</script>

<style scoped>
</style>
