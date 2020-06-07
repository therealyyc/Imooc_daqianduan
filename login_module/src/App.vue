<template>
  <div id="app">
    <div class="layui_container">
      <form class="layui-form layui-form-pane" action>
        <div
          class="layui-form-item"
          :class="{ 'form-group--error': $v.name.$error }"
        >
          <label class="layui-form-label">用户名</label>

          <div class="layui-input-block">
            <input
              v-model.trim="$v.name.$model"
              type="text"
              name="title"
              @input="setName($event.target.value)"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
            <div class="error" v-if="!$v.name.required">用户名不能为空</div>
            <div class="error" v-if="!$v.name.email">
              请输入正确的格式
            </div>
          </div>
        </div>

        <div
          class="layui-form-item"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <label class="layui-form-label">密码</label>

          <div class="layui-input-block">
            <input
              v-model.trim="$v.password.$model"
              type="password"
              name="title"
              @input="setPassword($event.target.value)"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
            <div class="error" v-if="!$v.password.required">密码不能为空</div>
          </div>
        </div>

        <div
          class="layui-form-item"
          :class="{ 'form-group--error3': $v.code.$error }"
        >
          <label class="layui-form-label">验证码</label>

          <div class="layui-input-inline">
            <input
              v-model.trim="$v.code.$model"
              @input="setCode($event.target.value)"
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
            <div class="error" v-if="!$v.code.required">验证码不能为空</div>
            <div class="error" v-if="!$v.code.minLength">
              请输入正确的长度
            </div>
            <div class="error" v-if="!$v.code.maxLength">
              请输入正确的长度
            </div>
          </div>

          <div
            class="svg_captcha"
            @click="this.getCaptcha"
            v-html="this.svg"
          ></div>
        </div>

        <button type="button" class="layui-btn">登录</button>

        <a class="forget_password_btn">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const {
  required,
  minLength,
  email,
  maxLength
} = require("vuelidate/lib/validators");

export default {
  name: "app",

  data() {
    return {
      svg: "",
      name: "",
      password: "",
      code: ""
    };
  },

  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(4)
    }
  },

  methods: {
    getCaptcha() {
      axios.get("http://localhost:3000/getCaptcha").then(res => {
        if (res.data.code === 200) {
          const { dataSvg, text } = res.data.data;

          this.svg = dataSvg;
        }
      });
    },
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    setCode(value) {
      this.code = value;
      this.$v.code.$touch();
    }
  },

  async mounted() {
    await this.getCaptcha();
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #d2d2d2;

  padding-left: 10%;

  padding-right: 10%;

  .layui_container {
    padding-left: 20px;

    padding-right: 20px;

    background-color: #fff;

    .forget_password_btn {
      margin-left: 20px;
    }

    input {
      width: 200px;
    }

    .svg_captcha {
      position: relative;
      top: -20px;
      left: 50%;
    }
  }
  .error {
    display: none;
  }
  .form-group--error {
    .error {
      display: block;
      color: red;
    }
  }
  .form-group--error2 {
    .error {
      display: block;
      color: red;
    }
  }
  .form-group--error3 {
    .error {
      display: block;
      color: red;
    }
  }
}
</style>
