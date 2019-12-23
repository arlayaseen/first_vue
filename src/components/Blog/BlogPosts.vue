<template>
    <div class="post-box">
        <span class="post-views">{{views}}</span>
        <h3 class="post-title">{{title}}</h3>
        <span class="post-date">{{date}}</span>
        <p class="post-content">{{content | shorten(20,"...See More")}}</p>
   <div class="row">
       <div class="col-6 ">
<span class="post-author"> {{author}}</span>
       </div>
       <div class="col-6 ">
<span class="post-category"> {{category}}</span>
       </div>
   </div>
    </div>
</template>
<script>
export default {
    name: "posts",
    props:["views","title","date","content","author","category"]
};
</script>
<style lang="scss" scoped>
.post-box{
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin: 20px;
    .post-views {
        position: absolute;
        top:5px;
        right: 5px;
        background-color: rgba(5, 172, 55, 0.637);
        border-radius: 4px;
        padding: 1px 5px;
        text-align: center;
        font-weight: bold;
        color:#fff;
        
    }
    .post-title {
        padding: 1px 5px;
        font-weight: bold;
        color:rgb(43, 42, 42);
        font-size: 20px;
        
    }
    .post-date {
        padding: 1px 5px;
        font-weight: bold;
        color:#777;
        font-size: 14px;
        
    }
    .post-content {
        padding: 1px 5px;
        color:#444;
        font-size: 18px;
        
    }
    .post-author {
        background-color: rgb(36, 127, 247);
        padding: 4px 8px;
        color:#444;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        
    }
    .post-category {
        background-color: rgb(247, 112, 175);
        padding: 4px 8px;
        color:#444;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        float:right;
        
    }
}
</style>