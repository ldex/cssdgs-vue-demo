<template>
    <div>
        <h2>Formulaire</h2>
        <nav>
            <router-link to="/form/step1">Step 1</router-link> |
            <router-link to="/form/step2">Step 2</router-link> |
            <router-link to="/form/step3">Step 3</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>