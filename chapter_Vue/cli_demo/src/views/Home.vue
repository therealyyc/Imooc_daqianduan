<template>
  <div>
    <div class="left">
      <form v-if="isShow">
        <div class="item">
          菜品名称
          <input type="text" v-model="unit.name" />
        </div>
        <div class="item">
          菜品图片
          <input type="text" v-model="unit.url" />
        </div>
        <div class="item">
          菜品分类
          <input type="text" v-model="unit.type" />
        </div>
        <div class="item">
          菜品单价
          <input type="text" v-model="unit.price" />
        </div>
        <button @click="show">提交</button>
      </form>
      <div class="info" v-else>
        <div>
          {{unit.name}}--
          {{unit.url}}--
          {{unit.type}}--
          {{unit.price}}
        </div>
        <div class="btns">
          <button @click="add">确定</button>
          <button @click="cancel">取消</button>
        </div>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in list" v-bind:key="item.name">
          {{item.name}}--
          {{item.url}}--
          {{item.type}}--
          {{item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      msg1: 'hello imooc',
      isShow: true,
      unit: {
        name: '',
        url: '',
        type: '',
        price: ''
      },
      list: this.$store.state.list
    }
  },
  methods: {
    show () {
      this.isShow = false
    },
    add () {
      this.list.push({ ...this.unit })
      this.$store.commit('setList', this.list)
      this.unit.name = ''
      this.unit.url = ''
      this.unit.type = ''
      this.unit.price = ''
      this.isShow = true
    },
    cancel () {
      this.isShow = true
    }
  },
  components: {
  },
  mounted () {
    this.list = this.$store.state.list
  }
}
</script>
<style lang="scss">
.left {
  float: left;
  width: 40%;
}
.right {
  float: right;
  width: 60%;
}
</style>
