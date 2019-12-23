<template>
    <div class="Blog">
        <h1>{{ pagename }}</h1>
        <P> {{ pagediscription }} </P>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="post-area">
                        <BlogPosts
                         v-for="post in posts" 
                         :key="post.id" 
                         :title="post.title"
                         :date="post.date"
                         :content="post.content"
                         :author="post.author"
                         :views="post.views"
                         :category="post.category"
                         />
                    </div>
                </div>
                <div class="col-4">
                    <div class="sidebar-area">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import jasonpost from "../json/blog_posts.json";
export default {
    data: function() {
        return {
            pagename: "Blog",
            pagediscription: "This is Blog",
            posts:jasonpost
        };
    },
    name: "blog",
    components: {
        BlogPosts,
        BlogSidebar,
    }
};
</script>
