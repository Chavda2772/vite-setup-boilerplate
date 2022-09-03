<template>
    <div>
        <!-- UserName From Store -->
        <h1 class="font-extrabold text-3xl mb-6">Send Request</h1>
        <p class="mb-6">{{ response }}</p>
        <button
            @click="sendRequest"
            class="p-2 text-white bg-indigo-600 rounded"
        >
            send Request
        </button>
    </div>
</template>

<script>
export default {
    name: 'EmptyView',
    inject: ['mySpinner'],
    data() {
        return {
            response: 'res',
        }
    },
    methods: {
        async sendRequest() {
            var me = this
            var rdmUserName = this.randomString(8)

            this.mySpinner.value = true
            try {
                var response = await this.sendAxiosRequest({
                    url: 'check',
                    method: 'POST',
                    params: {
                        username: rdmUserName,
                    },
                })
                me.mySpinner.value = false
                me.response = response.data
            } catch (e) {
                me.mySpinner.value = false
                console.log('Error:- ', e)
            }
        },
    },
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
