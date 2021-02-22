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
        yen1: 0,
//        inputdata: "Result\tJSON\t\n\tsubject\t文字列\t件名\n\tObjectList\tJSON\n\t\tname\t文字列\t名前\n\t\tnum\t数値\t9\n\t\tfruitList\tリスト\tりんご\tバナナ\tみかん\n\ttotalprice\t数値\t1200",
        inputdata: "Result\tJSON\t\n\tsubject\t文字列\t件名\n\ttotalprice\t数値\t1200",
        outdata: ""
    },
    methods: {
        check: function(e){
            try {
                JSON.parse(this.outdata);
                check=true;
            } catch (e) {
                alert("データ不正です");                
            }
        },
        conv: function(e){
            var lines = this.inputdata.split('\n');
            let out = "";
            let type = 0;
            let level = 0;
            let before_level = -1;
            for ( let i = 0; i < lines.length; i++ ) {
                let offset = true;
                let items = lines[i].split('\t');
                let key = "";
                let lineflg = false;
                for ( let  j= 0; j < items.length; j++ ) {
                    if(offset == true && items[j] == ""){
                        level = j+1;
                    }else{
                        offset = false;
                    }
                    if(items[j] != ""){
                        if(level==before_level){

                        }else if(level > before_level){
                            out += "{\n";
                            for(let tab=0; tab<level; tab++){
                                out += "\t";
                            }
                        }else{
                            if( (level+1) < before_level ){
                                let start = out.substring(0,out.lastIndexOf('\n')-1);
                                let end = out.slice(out.lastIndexOf('\n'),out.length);
                                out = start + end + "},";
                            }
                            if( (level+2) < before_level ){
                                out = out + "}";
                            }
                        }
                        before_level = level;
                        if(j==level+1){
                            switch (items[j]){
                                case 'JSON':
                                    type = items[j];
                                    out = out + "\"" + key + "\": ";
                                    lineflg = true;
                                    break;
                                case '文字列':
                                    type = items[j];
                                    break;
                                case '数値':
                                    type = items[j];
                                    break;
                                case 'リスト':
                                    type = items[j];
                                    break;
                            }
                            continue;
                        }else if( j==level ){
                            key = items[j];
                            continue;
                        }else if(j>level){
                            if(type == "JSON"){
                                out = out + "\"" + key + "\": \"" + items[j] + "\"";
                            }else if(type == "文字列"){
                                out = out + "\"" + key + "\": \"" + items[j] + "\"";
                            }else if(type == "数値"){
                                out = out + "\"" + key + "\": " + items[j] + "";
                            }else if(type == "リスト"){
                                let val = "";
                                for ( let  k= j; k < items.length; k++ ) {
                                    val = val + "{\"" + key + "\" : " + "\"" + items[k] + "\"}";
                                    if(k+1 < items.length){
                                        val += ",";
                                    }
                                }
                                out = out + "\"" + key + "\": [" + val + "]";
                            }                                
                            break;
                        }
                    }else{
                        out += "\t";
                    }
                }
                if( lineflg == false && i + 1 != lines.length){
                    out += ",";
                }else if(i + 1 == lines.length){
                    out += "}";
                }
                out += "\n";
            }
            out += "}";
            this.outdata = out;
        },
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
        time: function(e){
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
