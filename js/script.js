const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Hello Vue",
            format: "text-success ms-3",
            img: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
        }
    }
}).mount("#app")