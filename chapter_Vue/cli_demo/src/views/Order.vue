<template>
  <div>
    <h1>Order</h1>
    <div class="left">
      <ul>
        <li v-for="(item, index) in list" v-bind:key="index">
          {{ item.name }}
          <button @click="add(item, index)">+</button>
          <span>{{ item.num ? item.num : 0 }}</span>
          <button @click="minus(item, index)">-</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <li
        v-for="(item, index) in order"
        v-bind:key="index"
      >菜品名称{{ item.name }}--菜品单价{{item.price}}--单项总价{{item.num * item.price}}</li>
      <p>总价:{{total}}</p>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
export default {
  name: 'order',
  data () {
    return {
      list: this.$store.state.list
    }
  },
  computed: {
    order () {
      return _.filter(this.list, item => {
        return item.num
      })
    },
    total () {
      let sum = 0
      _.each(this.list, item => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    add (item, index) {
      if (!item.num) {
        item.num = 0
      }
      item.num++
      if (item.num > 100) {
        item.num = 100
      }
      this.$set(this.list, index, item)
    },
    minus (item, index) {
      if (!item.num) {
        item.num = 0
      }
      item.num--
      if (item.num < 0) {
        item.num = 0
      }
      this.$set(this.list, index, item)
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  float: left;
  width: 40%;
}
.right {
  float: right;
  width: 60%;
}
</style>
