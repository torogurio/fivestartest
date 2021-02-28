<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-8 offset-2">
                    <h1 class="mt-5">json変換</h1>
                    <div>
                        <p>csv→json</p>
                        <textarea name ="inputdata" v-model="inputdata" rows="10" cols="50">
                          {{ inputdata }}
                        </textarea>
                        <p><button v-on:click="conv()">変換</button></p>
                        <textarea name ="outdata" v-model="outdata" rows="10" cols="50">{{ outdata }}
                        </textarea>
                        <p><button v-on:click="check()">チェック</button></p>
                    </div>
                </div>
                <div class="col-8 offset-2">
                    <h1 class="mt-5">小銭の計算</h1>
                    <div>
                        <p>いくら？</p>
                        <p><input type="number" name="price" v-model="price"><button v-on:click="calc()">計算</button></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4 offset-2">500円: {{ yen500 }}</div>
                <div class="col-4">100円: {{ yen100 }}</div>
                <div class="col-4 offset-2">50円: {{ yen50 }}</div>
                <div class="col-4">10円: {{ yen10 }}</div>
                <div class="col-4 offset-2">5円: {{ yen5 }}</div>
                <div class="col-4">1円: {{ yen1 }}</div>
            </div>
        </div>
        <alert-box class="alert">〇〇が入力されていません</alert-box>
        <alert-box class="alert">時刻が入力されていません</alert-box>
        <p> Computed reversed message: "{{ reversedMessage }}"</p>
        <p v-bind:class="error_class">v-bindの使い方</p>
        <p v-if="errorflgs">エラーです</p>
        <p class="error2">クラスでの色指定エラーです</p>
        <p id="ele2">データの取得とDOM操作</p>
        <p id="ele3">JSONで取得したデータをパースする</p>
        
        <p>{{now}}</p>
        <p>{{now_comp}}</p>
        <button v-on:click="time">現在時刻を表示する</button>
        <h1>{{ product2 }}</h1>
        <h2>h2のHello</h2>
        <h3>h3のHellow</h3>
        <h4>h4のhellow</h4>
        <h5>h5のhelo</h5>
        <button v-on:click="shuffle">shuffle</button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="pref in prefs" v-bind:key="pref.name">
                {{ pref.name }}
            </li>
        </transition-group>
        </ul>
        <ul>
            <li ><p v-bind:class="error_class">classitem 1</p></li>
            <li ><p v-bind:class="error_class">classitem 4</p></li>
            <li ><p v-bind:class="error_class">classitem 3</p></li>
            <li ><p v-bind:class="error_class">classitem 2</p></li>
            <li ><p v-bind:class="error_class">classitem 5</p></li>
            <li ><p v-bind:class="error_class">classitem 6</p></li>
            <li ><p v-bind:class="error_class">classitem 7</p></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
