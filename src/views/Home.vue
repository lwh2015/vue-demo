<template>
	<div class='home'>
		<img
			alt='Vue logo'
			src='../assets/logo.png'
		>
		<HelloWorld msg='Welcome to Your Vue.js App'/>
		<ElButton type='primary'>成功按钮</ElButton>
		<ElColorPicker
			v-model='color3'
			show-alpha
		/>
	</div>
</template>

<script>
/** @module aaa */
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    },
    /**
     * Data
     * @returns {Object} object
     */
    data() {
        return {
            color3: ""
        };
    },
    watch: {
        /**
         * @param {string} color aaa
         */
        color3(color) {
            console.log(color);
        }
    },
    /**
     * Mounted
     */
    mounted() {
        window.axios
            .get("https://easy-mock.com/mock/5c2078d50fd1077df5e6e991/demo")
            .then(res => {
                console.log(res);
            });
    },
    methods: {
        /**@function abc
         * @param {string} a aaaccc
         */
        aaa(a) {
            console.log(123);
        }
    }
};
</script>
