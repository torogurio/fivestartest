Vue.component('alert-box', {
    template: `
    <div class="alert" v-on:click="caution">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `,
    methods: {
        caution: function(e){
            alert('クリックされました');
        }
    }
});
var app = new Vue({
    el: '#app',
    data:{
        errorflgs: false,
        product: '演習1',
        product2: '演習２',
        message: 'Hello',
        error_class: "error2",
        now: "00:00:00",
        now_comp: "01:01:01",
        prefs: [
            { name: '北海道'},
            { name: '福岡県'},
            { name: '山口県'},
            { name: '熊本県'},
            { name: '大分県'},
            { name: '佐賀県'}
        ],
        price: "",
        yen500: 0,
        yen100: 0,
        yen50: 0,
        yen10: 0,
        yen5: 0,
        yen1: 0
    },
    methods: {
        calc: function(e){
            change = this.price;
            this.yen500 = Math.floor(change/500);
            change %= 500;
            this.yen100 = Math.floor(change/100);
            change %= 100;
            this.yen50 = Math.floor(change/50);
            change %= 50;
            this.yen10 = Math.floor(change/10);
            change %= 10;
            this.yen5 = Math.floor(change/5);
            this.yen1 = change % 5;
        },
        tilme: function(e){
            var date = new Date();
            this.now = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        },
        shuffle: function(e){
            this.prefs = _.shuffle(this.prefs);
        }
    },
    computed: {
        time2: function(e){
            this.now_comp = this.now;
        },
        reversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    }
});
let elem = document.getElementById("ele2").innerText;
let task1 = "データの取得とDOM操作"
let task2 = "JSONで取得したデータをパースする"

// const h3 = document.querySelector('h3');

// h3.addEventListener('click', () => {
//     h3.textContent = 'Changed!';
// });
