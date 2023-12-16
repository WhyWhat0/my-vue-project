import axios from 'axios';
export default {
    data(){
        return{
            msg: '',
            path: 'http://localhost:5000/bot'
        }
    },
    methods:{
        async getPostMessage(id=0) {
            await axios.get(this.path)
        .then((res) => {
          this.msg = res.data.answersList[id];
        })
        .catch((error) => {
          // eslint-выключение следующей строки
          console.error(error);
        });
            return this.msg
          },


        async createPostMessage(data){await axios.post(this.path, data)},


        async createSberToken() {
            const axios = require('axios');

            const headers = {
                'Authorization': 'Basic MjlhYTdmYzktOWIwNC00OGE4LThkNzItNTBjMTBmNzc0YjY2OmQ1MWY1NmE2LTFhNTQtNDlmNC1hYTQwLTcwMTYxMTZiMDVhMg==',
                'RqUID': '8fa5d33e-9862-11ee-b9d1-0242ac120002',
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            const data = new URLSearchParams();
            data.append('scope', 'GIGACHAT_API_PERS');

            await axios.post('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', data, { headers })
                .then(response => {
                    console.log('Ответ:', response.data);
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
        },
        
    }
}

