<template>
    <!-- UserName From Store -->
    <h1 class="font-extrabold text-3xl mb-6">About</h1>
    <p class="mb-6">{{ getName }}</p>
</template>

<script>
export default {
    name: 'EmptyView',
    data() {
        return {
            newName: '',
        }
    },
    computed: {
        getName: function () {
            return this.$store.state.user.name
        },
    },
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
