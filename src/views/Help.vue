<template>
    <div class="our-help">
        <h1>{{ pagename }}</h1>
        <p>{{ pagediscription }}</p>
    </div>
</template>
<script>
export default {
    name: "help",
    data: function() {
        return {
            pagename: "Help",
            pagediscription: "This is a Help"
        };
    }
};
</script>
