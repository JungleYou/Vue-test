<template>
  <div>
    <Sum />
    <Person />
  </div>
</template>

<script>
import Sum from "./components/sum.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Sum, Person },
  data() {
    return {};
  },
};
</script>

<style>
</style>