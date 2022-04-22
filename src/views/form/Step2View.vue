<template>
  <div>
    <h3>Step 2</h3>
    <p>
      <input type="checkbox" name="valid" id="valid" v-model="IsValid" />
      <label for="valid">Valide ?</label>
    </p>
    <button @click="addStep">Ajout dynamique de step 4</button>

    <button @click="nextStep">Suivant</button>
  </div>
</template>

<script>
import Step4ViewVue from './Step4View.vue';

export default {
  data() {
    return {
      IsValid: false,
    };
  },
  methods: {
    isStepValid() {
      return this.IsValid;
    },
    nextStep() {
      if (this.isStepValid()) {
        this.$store.dispatch("form/moveToNextStep");
        this.$router.push({ name: "step3" });
      }
    },
    addStep() {
        let newRoute = { path: 'step4', name: 'step4', component: Step4ViewVue };
        this.$router.addRoute('form', newRoute);
        console.log(this.$router.getRoutes());
    }
  },
};
</script>

<style lang="scss" scoped>
</style>