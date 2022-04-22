<template>
    <div>
        <h3>Step 2</h3>

        <button @click="nextStep">Suivant</button>
    </div>
</template>

<script>
    export default {
        methods: {
            isStepValid() {
                return true;
            },
            nextStep() {
                if(this.isStepValid()) {
                    this.$store.dispatch('form/moveToNextStep');
                    this.$router.push({ name: "step3" });
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>