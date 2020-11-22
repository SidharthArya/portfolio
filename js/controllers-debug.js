const app1 = new Vue({
    el: '#app1',
    data: {
        quote: "Quote",
        quoteauthor: "Author"
    },
    created() {
        fetch("https://api.quotable.io/random?maxLength=80")
            .then(response => response.json())
            .then(json => {
                this.quote = json.content,
                this.quoteauthor = json.author
            })}})
const contributions = new Vue({
    el: '#Contributions',
    data: {
        packages: []
    },
    created() {
        fetch("https://api.github.com/users/sidhartharya/repos")
            .then(response => response.json())
            .then(json => {
                this.packages = json
            })}})
