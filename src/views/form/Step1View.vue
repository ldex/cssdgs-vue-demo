<template>
  <div>
    <h3>Step 1</h3>
    <p>
      <input type="checkbox" name="valid" id="valid" v-model="IsValid" />
      <label for="valid">Valide ?</label>
    </p>
    <button @click="nextStep">Suivant</button>
  </div>
</template>

<script>
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
        this.$router.push({ name: "step2" });
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>