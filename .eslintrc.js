module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
    plugins: ["json"],
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        "vue/component-name-in-template-casing": ["error", "PascalCase"], //组件命名样式强制使用驼峰式PascalCase
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
        "vue/html-quotes": ["error", "single"], //统一使用单引号
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
                ignores: ["pre", "textarea"] //元素名称的配置忽略换行符样式
            }
        ],
        "vue/mustache-interpolation-spacing": ["error", "always"], //期望表达式和大括号之间有一个空格
        "vue/name-property-casing": ["error", "PascalCase"], //在Vue组件中为name属性强制执行驼峰式写法PascalCase
        "vue/no-multi-spaces": [
            "error",
            {
                //禁止多余的空格
                ignoreProperties: false //是否应忽略对象的属性
            }
        ],
        "vue/no-spaces-around-equal-signs-in-attribute": ["error"], //禁止属性中等号周围的空格
        "vue/prop-name-casing": ["error", "camelCase"], //在Vue组件中为Prop名称强制执行驼峰式写法
        "vue/require-default-prop": "error", //此规则要求为未标记为required（Boolean除外）的每个prop设置默认值
        "vue/require-prop-types": "error", //此规则强制props语句包含类型定义
        "vue/singleline-html-element-content-newline": [
            "off",
            {
                //需要在单行元素的内容之前和之后换行
                ignoreWhenNoAttributes: true, //当给定元素没有属性时，允许将内容放在一行中
                ignoreWhenEmpty: true, //当元素没有内容时禁用
                ignores: ["pre", "textarea"] //忽略换行符样式
            }
        ],
        "vue/v-bind-style": ["error", "shorthand"], //强制执行v-bind指令风格
        "vue/v-on-style": ["error", "shorthand"], //强制执行v-on指令风格
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
        "vue/this-in-template": ["error", "never"]
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
