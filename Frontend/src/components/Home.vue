<template>
    <!-- UserName From Store -->
    <h1 class="font-extrabold text-3xl mb-6">Home</h1>
    <p class="mb-6">Store Name :- {{ getName }}</p>
    <input
        type="text"
        v-model="newName"
        class="p-2 mr-4 border border-gray-600 rounded"
        name="name"
        id="txtName"
        autocomplete="off"
    />
    <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">
        Submit
    </button>
    <!-- Random String -->
    <h1 class="mt-6 font-extrabold text-3xl mb-6">Random String</h1>
    <p class="mt-5 mb-6">String :- {{ $store.state.user.rdmString }}</p>
    <button
        @click="saveRandomString"
        class="p-2 text-white bg-indigo-600 rounded"
    >
        Random String
    </button>

    <!-- Change theme String -->
    <h1 class="mt-6 font-extrabold text-3xl mb-6">Change theme color</h1>
    <p class="mt-5 mb-6">String :- {{ $store.state.appSettings.themeColor }}</p>
    <input
        type="text"
        v-model="colorName"
        class="p-2 mr-4 border border-gray-600 rounded"
        name="name"
        id="txtName"
        autocomplete="off"
    />
    <button @click="changeColor" class="p-2 text-white bg-indigo-600 rounded">
        Change Color
    </button>
</template>

<script>
export default {
    name: 'EmptyView',
    data() {
        return {
            newName: '',
            colorName: '',
        }
    },
    methods: {
        saveName() {
            this.$store.dispatch('saveName', this.newName)
            this.newName = ''
            this.$router.push('/about')
        },
        saveRandomString() {
            var rdm = this.randomString(10)
            this.$store.dispatch('saveRandomString', rdm)
        },
        changeColor() {
            var color = this.colorName
            this.$store.dispatch('changeThemecolor', color)
        },
    },
    computed: {
        getName: function () {
            return this.$store.state.user.name
        },
        getRandomString() {
            return this.$store.state.user.rdmString
        },
    },
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
