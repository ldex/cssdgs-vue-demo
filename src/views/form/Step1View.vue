<template>
    <div>
        <h3>Step 1</h3>

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
                    this.$router.push({ name: "step2" });
                }
            }
        },
        created () {
        },
    }
</script>

<style lang="scss" scoped>

</style>