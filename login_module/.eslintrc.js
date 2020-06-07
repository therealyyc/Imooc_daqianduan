module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    "no-alert": 1,//禁止使用alert confirm prompt
    "no-array-constructor": 1,//禁止使用数组构造器
    "no-bitwise": 1,//禁止使用按位运算符
    "no-caller": 1,//禁止使用arguments.caller或arguments.callee
    "no-catch-shadow": 1,//禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 1,//禁止给类赋值
    "no-cond-assign": 1,//禁止在条件表达式中使用赋值语句
    "no-console": 1,//禁止使用console
    "no-const-assign": 1,//禁止修改const声明的变量
    "no-constant-condition": 1,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-continue": 1,//禁止使用continue
    "no-control-regex": 1,//禁止在正则表达式中使用控制字符
    "no-debugger": 1,//禁止使用debugger
    "no-delete-var": 1,//不能对var声明的变量使用delete操作符
    "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 1,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 1,//函数参数不能重复
    "no-duplicate-case": 1,//switch中的case标签不能重复
    "no-else-return": 1,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 1,//块语句中的内容不能为空
    "no-empty-character-class": 1,//正则表达式中的[]内容不能为空
    "keyword-spacing": 1,//禁止使用空label
    "no-eq-null": 1,//禁止对null使用==或!=运算符
    "no-eval": 1,//禁止使用eval
    "no-ex-assign": 1,//禁止给catch语句中的异常参数赋值
    "no-extend-native": 1,//禁止扩展native对象
    "no-extra-bind": 1,//禁止不必要的函数绑定
    "no-extra-boolean-cast": 1,//禁止不必要的bool转换
    "no-extra-parens": 1,//禁止非必要的括号
    "no-extra-semi": 1,//禁止多余的冒号
    "no-fallthrough": 1,//禁止switch穿透
    "no-floating-decimal": 1,//禁止省略浮点数中的1 .5 3.
    "no-func-assign": 1,//禁止重复的函数声明
    "no-implicit-coercion": 1,//禁止隐式转换
    "no-implied-eval": 1,//禁止使用隐式eval
    "no-inline-comments": 1,//禁止行内备注
    "no-inner-declarations": [1, "functions"],//禁止在块语句中使用声明（变量或函数）
    "no-invalid-regexp": 1,//禁止无效的正则表达式
    "no-invalid-this": 1,//禁止无效的this，只能用在构造器，类，对象字面量
    "no-irregular-whitespace": 1,//不能有不规则的空格
    "no-iterator": 1,//禁止使用__iterator__ 属性
    "no-label-var": 1,//label名不能与var声明的变量名相同
    "no-labels": 1,//禁止标签声明
    "no-lone-blocks": 1,//禁止不必要的嵌套块
    "no-lonely-if": 1,//禁止else语句内只有if语句
    "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-mixed-requires": [1, false],//声明时不能混用声明类型
    "no-mixed-spaces-and-tabs": [1, false],//禁止混用tab和空格
    "linebreak-style": [1, "windows"],//换行风格
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multi-str": 1,//字符串不能用\换行
    "no-multiple-empty-lines": [1, { "max": 1 }],//空行最多不能超过1行
    "no-native-reassign": 1,//不能重写native对象
    "no-negated-in-lhs": 1,//in 操作符的左边不能有!
    "no-nested-ternary": 1,//禁止使用嵌套的三目运算
    "no-new": 1,//禁止在使用new构造一个实例后不赋值
    "no-new-func": 1,//禁止使用new Function
    "no-new-object": 1,//禁止使用new Object()
    "no-new-require": 1,//禁止使用new require
    "no-new-wrappers": 1,//禁止使用new创建包装实例，new String new Boolean new Number
    "no-obj-calls": 1,//不能调用内置的全局对象，比如Math() JSON()
    "no-octal": 1,//禁止使用八进制数字
    "no-octal-escape": 1,//禁止使用八进制转义序列
    "no-param-reassign": 1,//禁止给参数重新赋值
    "no-path-concat": 1,//node中不能使用__dirname或__filename做路径拼接
    "no-plusplus": 1,//禁止使用++，--
    "no-process-env": 1,//禁止使用process.env
    "no-process-exit": 1,//禁止使用process.exit()
    "no-proto": 1,//禁止使用__proto__属性
    "no-redeclare": 1,//禁止重复声明变量
    "no-regex-spaces": 1,//禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-restricted-modules": 1,//如果禁用了指定模块，使用就会报错
    "no-return-assign": 1,//return 语句中不能有赋值表达式
    "no-script-url": 1,//禁止使用javascript:void(1)
    "no-self-compare": 1,//不能比较自身
    "no-sequences": 1,//禁止使用逗号运算符
    "no-shadow": 1,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow-restricted-names": 1,//严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-spaced-func": 1,//函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": 1,//禁止稀疏数组， [1,,1]
    "no-sync": 1,//nodejs 禁止同步方法
    "no-ternary": 1,//禁止使用三目运算符
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "no-this-before-super": 1,//在调用super()之前不能使用this或super
    "no-throw-literal": 1,//禁止抛出字面量错误 throw "error";
    "no-undef": 1,//不能有未定义的变量
    "no-undef-init": 1,//变量初始化时不能直接给它赋值为undefined
    "no-undefined": 1,//不能使用undefined
    "no-unexpected-multiline": 1,//避免多行表达式
    "no-underscore-dangle": 1,//标识符不能以_开头或结尾
    "no-unneeded-ternary": 1,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-unreachable": 1,//不能有无法执行的代码
    "no-unused-expressions": 1,//禁止无用的表达式
    "no-unused-vars": [1, { "vars": "all", "args": "after-used" }],//不能有声明后未被使用的变量或参数
    "no-use-before-define": 1,//未定义前不能使用
    "no-useless-call": 1,//禁止不必要的call和apply
    "no-void": 1,//禁用void操作符
    "no-var": 1,//禁用var，用let和const代替
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
    "no-with": 1,//禁用with
    "linebreak-style": 1,
    "array-bracket-spacing": [1, "never"],//是否允许非空数组里面有多余的空格
    "arrow-parens": 1,//箭头函数用小括号括起来
    "arrow-spacing": 1,//=>的前/后括号
    "accessor-pairs": 1,//在对象中使用getter/setter
    "block-scoped-var": 1,//块语句中使用var
    "callback-return": 1,//避免多次调用回调什么的
    "camelcase": 1,//强制驼峰法命名
    "comma-dangle": [1, "never"],//对象字面量项尾不能有逗号
    "comma-spacing": 1,//逗号前后的空格
    "comma-style": [1, "last"],//逗号风格，换行时在行首还是行尾
    "complexity": [1, 11],//循环复杂度
    "computed-property-spacing": [1, "never"],//是否允许计算后的键名什么的
    "consistent-return": 1,//return 后面是否允许省略
    "consistent-this": [1, "that"],//this别名
    "constructor-super": 1,//非派生类不能调用super，派生类必须调用super
    "curly": [1, "all"],//必须使用 if(){} 中的{}
    "default-case": 1,//switch语句最后必须有default
    "dot-location": 1,//对象访问符的位置，换行的时候在行首还是行尾
    "dot-notation": [1, { "allowKeywords": true }],//避免不必要的方括号
    "eol-last": 1,//文件以单一的换行符结束
    "eqeqeq": 1,//必须使用全等
    "func-names": 1,//函数表达式必须有名字
    "func-style": [1, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
    "generator-star-spacing": 1,//生成器函数*的前后空格
    "guard-for-in": 1,//for in循环要用if语句过滤
    "handle-callback-err": 1,//nodejs 处理错误
    "id-length": 1,//变量名长度
    "indent": [1, 4],//缩进风格
    "init-declarations": 1,//声明时必须赋初值
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "lines-around-comment": 1,//行前/行后备注
    "max-depth": [1, 4],//嵌套块深度
    "max-len": [1, 81, 4],//字符串最大长度
    "max-params": [1, 3],//函数最多只能有3个参数
    "max-statements": [1, 11],//函数内最多有几个声明
    "new-cap": 1,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 1,//new时必须加小括号
    "newline-after-var": 1,//变量声明后是否需要空一行
    "object-curly-spacing": [1, "never"],//大括号内是否允许不必要的空格
    "object-shorthand": 1,//强制对象字面量缩写语法
    "one-var": 1,//连续声明
    "operator-assignment": [1, "always"],//赋值运算符 += -=什么的
    "operator-linebreak": [1, "after"],//换行时运算符在行尾还是行首
    "padded-blocks": 1,//块语句内行首行尾是否要空行
    "prefer-const": 1,//首选const
    "prefer-spread": 1,//首选展开运算
    "prefer-reflect": 1,//首选Reflect的方法
    "quotes": [1, "single"],//引号类型 `` "" ''
    "quote-props": [1, "always"],//对象字面量中的属性名是否强制双引号
    "radix": 1,//parseInt必须指定第二个参数
    "id-match": 1,//命名检测
    "require-yield": 1,//生成器函数必须有yield
    "semi": [1, "always"],//语句强制分号结尾
    "semi-spacing": [1, { "before": false, "after": true }],//分号前后空格
    "sort-vars": 1,//变量声明时排序
    "space-before-blocks": [1, "always"],//不以新行开始的块{前面要不要有空格
    "space-before-function-paren": [1, "always"],//函数定义时括号前面要不要有空格
    "space-in-parens": [1, "never"],//小括号里面要不要有空格
    "space-infix-ops": 1,//中缀操作符周围要不要有空格
    "space-unary-ops": [1, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "spaced-comment": 1,//注释风格要不要有空格什么的
    "strict": 1,//使用严格模式
    "use-isnan": 1,//禁止比较时使用NaN，只能用isNaN()
    "valid-jsdoc": 1,//jsdoc规则
    "valid-typeof": 1,//必须使用合法的typeof的值
    "vars-on-top": 1,//var必须放在作用域顶部
    "wrap-iife": [1, "inside"],//立即执行函数表达式的小括号风格
    "wrap-regex": 1,//正则表达式字面量用小括号包起来
  }
}
