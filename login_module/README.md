# Project

## 登录模块的开发

+ 使用layui快速形成原型图 `<https://www.layui.com/doc/element/button.html>`
+ 使用`captcha`来实现图形验证码功能
  + 安装：`npm install --save svg-captcha `

### 表单验证

+ 使用vuelidate进行验证

  + 安装：`npm install vuelidate -S`

  + 在main.js中引用

  + ```vue
    // main.js
    import { validationMixin } from 'vuelidate';
    Vue.use(Vuelidate);
    
    
    import { required, minLength, between,email } from 'vuelidate/lib/validators'
    ```

  + 之后就可以对校验与绑定的变量做一次mapping 关系了。

  + 在绑定变量时需要遵循这样的语法

  + ```vue
    <input
                  v-model.trim="$v.name.$model"
                  type="text"
                  name="title"
                  @input="setName($event.target.value)" // 会绑定到计算属性上面去
                  required
                  lay-verify="required"
                  placeholder="请输入标题"
                  autocomplete="off"
                  class="layui-input"
                />
    ```

  + 在每一次输入之后，一些相关的变量都会重新动态计算

  + 

    ```vue
    <div
       class="layui-form-item"
      :class="{ 'form-group--error': $v.name.$error }"
    >
    
    <div class="error" v-if="!$v.name.required">用户名不能为空</div>
    <div class="error" v-if="!$v.name.email">
        请输入正确的格式
    </div>
    ```

  + 