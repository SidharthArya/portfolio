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
        fetch("https://api.github.com/users/sidhartharya/repos?sort=updated'")
            .then(response => response.json())
            .then(json => {
                this.packages = json
            })}})

const stars = new Vue({
    el: '#Stars',
    data: {
        stars: []
    },
    created() {
        fetch("https://api.github.com/users/sidhartharya/starred?per_page=100'")
            .then(response => response.json())
            .then(json => {
                this.stars = json
            })}})

const following = new Vue({
    el: '#Following',
    data: {
        following: []
    },
    created() {
        fetch("https://api.github.com/users/sidhartharya/following?per_page=100")
            .then(response => response.json())
            .then(json => {
                this.following = json
            })}})
