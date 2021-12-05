<template>
    <h1 class="font-extrabold text-3xl mb-6">Home</h1>
    <p class="mb-6">Store Name :- {{ name }}</p>
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
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const name = computed(() => {
    return store.state.user.name
})

const newName = ref('')

function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/about')
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
