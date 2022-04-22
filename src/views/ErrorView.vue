<template>
<div>
    <h1>
    Erreur!
    </h1>
    <p>
        {{ message }}
    </p>
</div>
</template>

<script>
export default {
    props: ['message']
}
</script>