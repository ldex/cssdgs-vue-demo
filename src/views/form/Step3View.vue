<template>
  <div>
    <h3>Step 3</h3>
    <li v-for="option in options" :key="option.name">
        <input :id="option.name" :value="option" name="option" type="checkbox" v-model="checkedOptions" />
        <label :for="option.name">{{option.name}}</label>
    </li>
    <button @click="addComponent()">Ajout composant(s)</button>
    <template v-for="(comp, index) in components">
      <component :is="comp" :key="index"></component>
    </template>
    <br />
    <button @click="nextStep">Suivant</button>
  </div>
</template>

<script>
import Opt1View from '@/views/form/options/Opt1View.vue';
import Opt2View from '@/views/form/options/Opt2View.vue';
import Opt3View from '@/views/form/options/Opt3View.vue';

export default {
  data() {
    return {
      components: [],
      options: [],
      checkedOptions:[]
    };
  },
  created () {
      this.options.push(Opt1View);
      this.options.push(Opt2View);
      this.options.push(Opt3View);
  },
  methods: {
    isStepValid() {
      return true;
    },
    nextStep() {
      if (this.isStepValid()) {
        this.$store.dispatch("form/moveToNextStep");
        this.$router.push({ name: "step4" });
      }
    },
    addComponent() {
        this.checkedOptions.forEach(option => {
            this.components.push(option);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>