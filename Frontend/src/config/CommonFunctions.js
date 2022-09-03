import axios from 'axios'

export default {
    sendAxiosRequest: function (options, callback) {
        var data = JSON.stringify(options.params)

        var config = {
            method: options.method || 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        if (options.url.includes('http') || options.url.includes('https')) {
            config.url = options.url
        } else {
            config.url = import.meta.env.VITE_APP_SERVER_URL + options.url
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then(function (response) {
                    try {
                        resolve(response)
                    } catch (e) {
                        reject(e)
                    }
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },

    randomString: function (length) {
        var result = ''
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            )
        }
        return result
    },
}
