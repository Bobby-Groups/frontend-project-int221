export default {
    data() {
        return {
            API_URL: 'http://23.98.77.87/backend',

        }
    },
    methods: {
        async getJSON(api) {
            const config = { headers: { accept: 'application/json' } }
            try {
                return await this.axios.get(api, config)
            } catch (e) {
                console.error(e)
            }
        },
        async getData(api) {
            try {
                return await this.axios.get(`${this.API_URL}/${api}`)
            } catch (e) {
                console.error(e);
            }
        },
        async postData(api, data) {
            try {
                return await this.axios.post(`${this.API_URL}/${api}`, data)
            } catch (e) {
                
                console.log(e);
            }
        },
        async deleteData(api){
            try{
                return await this.axios.delete(`${this.API_URL}/${api}`)
            } catch(e){
                console.log(e);
            }
        }
    }
}

