module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
    plugins: [ "json" ],
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        //-------------Vue Template-------------------------//
        "vue/component-name-in-template-casing": [ "error", "PascalCase" ], //组件命名样式强制使用驼峰式PascalCase
        "vue/html-closing-bracket-newline": [
            "error",
            {
                //在标记的右括号之前要求或禁止换行符
                singleline: "never", //单行元素  在结束括号之前禁止换行符
                multiline: "always" //多行元素  在结束括号前需要一个换行符
            }
        ],
        "vue/html-closing-bracket-spacing": [
            "off",
            {
                //标签的右括号之前要求空格
                startTag: "always", //开始标签
                endTag: "always", //结束标签
                selfClosingTag: "always" //半闭合标签
            }
        ],
        "vue/html-end-tags": "error", //强制执行结束标记样式
        "vue/html-indent": [
            "error",
            "tab",
            {
                //强制一致缩进 tab
                attribute: 1, //属性缩进的乘数
                baseIndent: 1, //顶级语句的缩进倍数
                closeBracket: 0, //右括号缩进的乘数
                alignAttributesVertically: true //属性是应与多行情况下的第一个属性垂直对齐
            }
        ],
        "vue/html-quotes": [ "error", "single" ], //统一使用单引号
        "vue/html-self-closing": [
            "error",
            {
                //强制自闭风格
                html: {
                    void: "never", //HTML void元素的样式
                    normal: "always", //除void元素之外的HTML元素的样式
                    component: "always" //Vue.js自定义组件的样式
                },
                svg: "always", //SVG元素的风格
                math: "always" //MathML元素的样式
            }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                //强制每行的最大属性数
                singleline: 1, //当开始标记在一行中时每行的最大属性数
                multiline: {
                    max: 1, //当开始标记位于多行时每行的最大属性数
                    allowFirstLine: false
                }
            }
        ],
        "vue/multiline-html-element-content-newline": [
            "off",
            {
                //需要在多行元素的内容之前和之后换行
                ignoreWhenEmpty: true, //当元素没有内容时禁用
                ignores: [ "pre", "textarea" ] //元素名称的配置忽略换行符样式
            }
        ],
        "vue/mustache-interpolation-spacing": [ "error", "always" ], //期望表达式和大括号之间有一个空格
        "vue/name-property-casing": [ "error", "PascalCase" ], //在Vue组件中为name属性强制执行驼峰式写法PascalCase
        "vue/no-multi-spaces": [
            "error",
            {
                //禁止多余的空格
                ignoreProperties: false //是否应忽略对象的属性
            }
        ],
        "vue/no-spaces-around-equal-signs-in-attribute": [ "error" ], //禁止属性中等号周围的空格
        "vue/prop-name-casing": [ "error", "camelCase" ], //在Vue组件中为Prop名称强制执行驼峰式写法
        "vue/require-default-prop": "error", //此规则要求为未标记为required（Boolean除外）的每个prop设置默认值
        "vue/require-prop-types": "error", //此规则强制props语句包含类型定义
        "vue/singleline-html-element-content-newline": [
            "off",
            {
                //需要在单行元素的内容之前和之后换行
                ignoreWhenNoAttributes: true, //当给定元素没有属性时，允许将内容放在一行中
                ignoreWhenEmpty: true, //当元素没有内容时禁用
                ignores: [ "pre", "textarea" ] //忽略换行符样式
            }
        ],
        "vue/v-bind-style": [ "error", "shorthand" ], //强制执行v-bind指令风格
        "vue/v-on-style": [ "error", "shorthand" ], //强制执行v-on指令风格
        "vue/attributes-order": [
            "error",
            {
                //强制执行属性顺序 https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    "UNIQUE",
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT"
                ]
            }
        ],
        "vue/no-use-v-if-with-v-for": [
            "error",
            {
                //禁止v-for指令与v-if指令放在同一元素上一起使用
                allowUsingIterationVar: false
            }
        ],
        "vue/no-v-html": "error", //不允许使用v-html，防止XSS攻击
        "vue/order-in-components": [
            "error",
            {
                //强制执行组件中的属性顺序 https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
                order: [
                    "el",
                    "name",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "data",
                    "computed",
                    "watch",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError"
                ]
            }
        ],
        "vue/this-in-template": [ "error", "never" ],
        //-------------Vue Template-------------------------//
        //-------------JS Template-------------------------//
        indent: [ "error" ], //	强制使用一致的缩进
        "no-compare-neg-zero": [ "warn" ], //	禁止与 - 0 进行比较
        "no-cond-assign": [ "error", "always" ], //禁止条件表达式中出现赋值操作符
        "no-constant-condition": [
            "error",
            {
                //禁止在条件中使用常量表达式
                checkLoops: false //允许在循环中使用常量表达式
            }
        ],
        "no-control-regex": [ "error" ], //禁止在正则表达式中出现控制字符 0~31
        "no-dupe-args": [ "error" ], //禁止 function 定义中出现重名参数
        "no-dupe-keys": [ "error" ], //禁止对象字面量中出现重复的 key
        "no-duplicate-case": [ "error" ], //禁止出现重复的 case 标签
        "no-empty": [
            "error",
            {
                //禁止出现空语句块
                allowEmptyCatch: true //允许出现空的 catch 子句
            }
        ],
        "no-empty-character-class": [ "error" ], //禁止在正则表达式中使用空字符集
        "no-ex-assign": [ "error" ], //禁止对 catch 子句中的异常重新赋值
        "no-extra-boolean-cast": [ "error" ], //禁止不必要的布尔类型转换
        "no-extra-parens": [
            "error",
            "all",
            {
                //禁止冗余的括号
                conditionalAssign: false, //允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
                returnAssign: false, //允许在return 语句中的赋值语句周围出现额外的圆括号
                nestedBinaryExpressions: false, //允许在嵌套的二元表达式中出现额外的圆括号
                ignoreJSX: "all", //允许在 no / 所有 / 多行 / 单行的JSX 组件周围出现额外的圆括号
                enforceForArrowConditionals: false //允许在箭头函数体中的三元表达式周围出现额外的圆括号
            }
        ],
        "no-extra-semi": [ "error" ], //禁用不必要的分号
        "no-func-assign": [ "error" ], //禁止对 function 声明重新赋值
        "no-inner-declarations": [ "error", "both" ], //禁止 function 和 var 声明出现在嵌套的语句块中
        "no-invalid-regexp": [
            "error",
            {
                //禁止在 RegExp 构造函数中出现无效的正则表达式
                allowConstructorFlags: [ "u", "y" ] //ECMAScript 6 为 RegExp 构造函数增加 u  y标志参数
            }
        ],
        "no-irregular-whitespace": [
            "error",
            {
                //禁止在字符串和注释之外不规则的空白
                skipStrings: true, //允许在字符串字面量中出现任何空白字符
                skipComments: true, //允许在注释中出现任何空白字符
                skipRegExps: true, //允许在正则表达式中出现任何空白字符
                skipTemplates: true //允许在模板字面量中出现任何空白字符
            }
        ],
        "no-obj-calls": [ "error" ], //禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
        "no-prototype-builtins": [ "error" ], //禁止直接在对象实例上调用 Object.prototype 的一些方法
        "no-regex-spaces": [ "error" ], //禁止在正则表达式字面量中出现多个空格
        "no-sparse-arrays": [ "error" ], //禁止使用稀疏数组，也就是逗号之前没有任何元素的数组
        "no-template-curly-in-string": [ "error" ], //禁止在常规字符串中出现模板字面量占位符语法,不适用于ES3/5环境
        "no-unexpected-multiline": [ "error" ], //禁止使用令人困惑的多行表达式,需配合semi使用
        semi: [
            "error",
            "always",
            {
                //要求在语句末尾使用分号
                omitLastInOneLineBlock: true //忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
            }
        ],
        "no-unreachable": [ "error" ], //禁止在 return、throw、continue 和 break 语句后出现不可达代码
        "no-unsafe-finally": [ "error" ], //禁止在 finally 语句块中出现 return、throw、break 和 continue 语句。它允许间接使用，比如在 function 或 class 的定义中
        "no-unsafe-negation": [ "error" ], //禁止对关系运算符的左操作数使用否定操作符
        "use-isnan": [ "error" ], //禁止与 ‘NaN’ 的比较
        "valid-jsdoc": [
            "error",
            {
                //强制使用有效的 JSDoc 注释   参考http://usejsdoc.org/
                prefer: {
                    //强制使用一致的jsdoc文档标签
                    arg: "param",
                    argument: "param",
                    class: "constructor",
                    return: "returns",
                    virtual: "abstract"
                },
                preferType: {
                    //强制使用一致的类型字符串
                    Boolean: "boolean",
                    Number: "number",
                    object: "Object",
                    String: "string"
                },
                requireReturn: false, //当且仅当 函数或方法有一个 return 语句
                requireReturnType: true, //不允许在返回标签中缺少类型
                requireParamDescription: true, //不允许在参数标签缺少描述
                requireReturnDescription: true //不允许在返回标签缺少描述
            }
        ],
        "valid-typeof": [
            "error",
            {
                //强制 typeof 表达式与有效的字符串进行比较
                requireStringLiterals: true //要求 typeof 表达式只与字符串字面量或其它 typeof 表达式 进行比较，禁止与其它值进行比较
            }
        ],
        "array-callback-return": [
            "error",
            {
                //强制数组方法的回调函数中的return语句的使用
                allowImplicit: true //允许隐式使用 return 不包含任何表达式地返回 undefined
            }
        ],
        "block-scoped-var": [ "error" ], //强制把变量的使用限制在其定义的作用域范围内
        "consistent-return": [
            "error",
            {
                //强制使用一致的 return 语句，标志函数进行完成
                treatUndefinedAsUnspecified: false //总是指定返回值或隐式返回 undefined
            }
        ],
        curly: [ "error", "multi-or-nest" ], //如果 if、else if、else、for、while 和 do 的代码主体中只包含一条语句，你可以使用另外一个配置来强制省略大括号。同时在其他的情况下，强制使用大括号
        "default-case": [ "error" ], //要求 Switch 语句中有 Default 分支
        "dot-location": [ "error", "property" ], //强制表达式中的点号操作符应该和属性在同一行
        "dot-notation": [
            "error",
            {
                //强制要求使用点号
                allowKeywords: false, //避免对是保留字的属性使用点号
                allowPattern: "^[a-z]+(_[a-z]+)+$" //仅允许匹配的属性名使用括号   a_b
            }
        ],
        eqeqeq: [
            "error",
            "always",
            {
                //要求使用 === 和 !==
                null: "ignore" //忽略null
            }
        ],
        "guard-for-in": [ "error" ], //	要求 for-in 循环中有一个 if 语句
        "no-alert": [ "warn" ], //建议不使用 Alert
        "no-caller": [ "warn" ], //建议不使用 caller 或 callee 阻止使用已弃用的代码和次优的代码
        "no-case-declarations": [ "error" ], //禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中,为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中
        "no-div-regex": [ "error" ], //消除除法操作符的歧义
        "no-else-return": [
            "error",
            {
                //禁止 if 语句中 return 语句之后有 else 块
                allowElseIf: true
            }
        ],
        "no-empty-function": [ "error" ], //禁止出现空函数
        "no-empty-pattern": [ "error" ], //禁止使用空解构模式
        "no-eval": [ "error" ], //禁用 eval()
        "no-extend-native": [
            "error",
            {
                //禁止扩展原生对象
                exceptions: [ "Object" ] //Object除外
            }
        ],
        "no-extra-bind": [ "error" ], //禁止不必要的函数绑定
        "no-extra-label": [ "error" ], //禁用不必要的标签
        "no-fallthrough": [ "error" ], //禁止 case 语句落空
        "no-floating-decimal": [ "warn" ], //建议数字字面量中不使用前导和末尾小数点
        "no-global-assign": [
            "error",
            {
                //禁止对原生对象或只读的全局对象进行赋值
                exceptions: [ "Object" ] //Object除外
            }
        ],
        "no-implicit-coercion": [ "warn" ], //禁止使用较短的符号实现类型转换(建议)
        "no-implicit-globals": [ "error" ], //禁止在全局范围使用变量和函数声明,遵循块模块作用域
        "no-implied-eval": [ "error" ], //禁用类似隐式的eval()
        "no-invalid-this": [ "error" ], //禁止 this 关键字在类或类对象之外出现
        "no-iterator": [ "error" ], //禁用 __iterator__ 属性
        "no-labels": [ "error" ], //禁用标签语句
        "no-lone-blocks": [ "error" ], //禁用不必要的嵌套块
        "no-loop-func": [ "error" ], //禁止循环中存在函数
        "no-multi-spaces": [
            "error",
            {
                //禁止出现多个空格
                ignoreEOLComments: true, //忽略行尾注释前的多个空格
                exceptions: {
                    //指定要忽略的节点
                    Property: true,
                    BinaryExpression: true,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        "key-spacing": [
            "error",
            {
                //强制在对象字面量的键和值之间使用一致的空格
                // "align": "value"
                // "beforeColon": true,
            }
        ],
        "no-multi-str": [ "error" ], //禁止多行字符串
        "no-new": [ "error" ], //禁止使用 new 以避免产生副作用
        "no-new-func": [ "error" ], //禁用Function构造函数
        "no-new-wrappers": [ "error" ], //禁止原始包装实例(String、Number 和 Boolean)
        "no-octal": [ "error" ], //禁用八进制字面量
        "no-octal-escape": [ "error" ], //禁止在字符串字面量中使用八进制转义序列
        "no-param-reassign": [
            "error",
            {
                //禁止对函数参数再赋值
                props: false //对象属性除外
            }
        ],
        "no-proto": [ "error" ], //禁用__proto__
        "no-redeclare": [
            "error",
            {
                //禁止多次声明同一变量
                builtinGlobals: true
            }
        ],
        "no-return-assign": [ "error" ], //禁止在return 语句中使用赋值语句
        "no-return-await": [ "error" ], //禁用不必要的 return await
        "no-script-url": [ "error" ], //禁用 Script URL
        "no-self-assign": [
            "error",
            {
                //禁止自身赋值
                props: false
            }
        ],
        "no-self-compare": [ "error" ], //禁止自身比较
        "no-sequences": [ "error" ], //不允许使用逗号操作符
        "no-throw-literal": [ "error" ], //限制可以被抛出的异常
        "no-unmodified-loop-condition": [ "error" ], //禁用一成不变的循环条件
        "no-unused-expressions": [ "error" ], //禁止未使用过的表达式
        "no-unused-labels": [ "error" ], //禁用未使用过的标签
        "no-useless-call": [ "error" ], //禁用不必要的 .call() 和 .apply()
        "no-useless-concat": [ "error" ], //禁止没有必要的字符拼接
        "no-useless-escape": [ "error" ], //禁用不必要的转义
        "no-with": [ "error" ], //禁用 with 语句
        "prefer-promise-reject-errors": [
            "error",
            {
                //要求使用 Error 对象作为 Promise 拒绝的原因
                allowEmptyReject: true
            }
        ],
        radix: [ "error" ], //要求必须有基数
        "require-await": [ "error" ], //禁止使用不带 await 表达式的 async 函数
        "vars-on-top": [ "error" ], //要求将变量声明放在它们作用域的顶部
        "wrap-iife": [ "error" ], //需要把立即执行的函数包裹起来
        yoda: [
            "error",
            "never",
            {
                //要求或者禁止Yoda条件
                exceptRange: true
            }
        ],
        "init-declarations": [
            "error",
            "never",
            {
                //除了 for 循环外，变量不能在声明时初始化
                ignoreForLoopInit: true
            }
        ],
        "no-catch-shadow": [ "error" ], //禁止 catch 子句的参数与外层作用域中的变量同名
        "no-delete-var": [ "error" ], //禁止删除变量
        "no-label-var": [ "error" ], //禁用与变量同名的标签
        "no-shadow": [
            "error",
            {
                //禁止变量声明覆盖外层作用域的变量
                builtinGlobals: false,
                hoist: "functions",
                allow: []
            }
        ],
        "no-undef": [
            "error",
            {
                //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
                typeof: true
            }
        ],
        "no-undef-init": [ "error" ], //不允许初始化变量值为 undefined
        "no-undefined": [ "error" ], //不允许使用undefined变量
        "no-unused-vars": [
            "error",
            {
                //禁止未使用过的变量
                vars: "local", //仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量
                args: "none", //不检查参数
                ignoreRestSiblings: false
            }
        ],
        "no-use-before-define": [
            "error",
            {
                //禁止定义前使用
                functions: true,
                classes: true
            }
        ],
        //------------------------------------------------------------------------------------
        "array-bracket-newline": [
            "error",
            {
                //如果数组元素内或元素间有换行，则要求换行
                multiline: true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "always",
            {
                //强制在括号内使用空格
                singleValue: true,
                objectsInArrays: true,
                arraysInArrays: true
            }
        ],
        "array-element-newline": [
            "error",
            {
                //如果数组元素间有换行，则要求换行
                multiline: true
            }
        ],
        "block-spacing": [ "error", "always" ], //强制在代码块中开括号前和闭括号后有空格
        "brace-style": [ "error" ], //强制在代码块中使用一致的大括号风格
        camelcase: [
            "error",
            {
                //要求使用骆驼拼写法
                properties: "always"
            }
        ],
        "capitalized-comments": [
            "error",
            "always", //强制对注释的第一个字母大写
            {
                line: {
                    ignorePattern: "pragma|ignored"
                },
                block: {
                    ignoreInlineComments: true,
                    ignorePattern: "ignored"
                }
            }
        ],
        "comma-dangle": [ "error", "never" ], //禁止使用拖尾逗号
        "comma-spacing": [ "error" ], //强制或禁止在逗号周围使用空格
        "comma-style": [ "error" ], //强制使用一致的逗号风格
        "computed-property-spacing": [ "error", "always" ], //强制在计算属性中使用空格
        "eol-last": [ "error", "always" ], //要求文件末尾保留一行空行
        // "func-call-spacing": [ "error", "always" ], //要求在函数标识符和其调用之间有空格
        "func-name-matching": [ "error", "always" ], //要求函数名与赋值给它们的变量名或属性名相匹配
        "func-names": [ "error", "as-needed" ], //在 ES6 环境中，这个函数名无法自动被赋值，要求函数表达式有一个名字
        "func-style": [
            "error",
            "declaration",
            {
                //强制 function 声明或表达式的一致性
                allowArrowFunctions: true
            }
        ]
        //------------------------------------------------------------------------------------
        //-------------JS Template-------------------------//
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    }
};
