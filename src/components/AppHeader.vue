<template>
    <div class="header">
        <div class="container">
            <div class="logo">HawaNet</div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact><a>Home</a></router-link>
                <router-link to="/about" tag="li"><a>About</a></router-link>
                <router-link to="/Blog" tag="li"><a>Blog</a></router-link>
                <router-link to="/help" tag="li"><a>Help</a></router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.header {
    background-color: #111;
    color: #fff;
    overflow: hidden;
    .logo {
        float: left;
        font-size: 24px;
        width: 200px;
        padding: 15px 30px;
    }
    ul {
        float: left;
        width: calc(100% - 200px);
        margin: 0;
        .router-link-exact-active {
            background-color: #fff;
            color: #111;
            a {
                color: #111;
            }
        }
        li {
            padding: 20px 20px;
            display: inline-block;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
</style>
