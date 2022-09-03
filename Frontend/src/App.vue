<template>
    <div class="root-container">
        <ReloadPWA />
        <Spinner :start="spin.value" />
        <div class="header">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/request">Send Request</router-link>
        </div>
        <div class="p-4">
            <router-view />
        </div>
    </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import ReloadPWA from './components/ReloadPWA.vue'

export default {
    data() {
        return {
            spin: {
                value: false,
            },
        }
    },
    components: {
        Spinner,
        ReloadPWA,
    },
    provide() {
        return {
            mySpinner: this.spin,
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.root-container {
    height: 100vh;
    background-color: lightgreen;
}

.header {
    height: 26px;
    background-color: lightblue;
}
</style>
