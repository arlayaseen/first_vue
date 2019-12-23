<template>
    <div class="about">
        <h1>{{ pagename }}</h1>
        <P v-format.red.bold="30"> {{ pagediscription }} </P>
    </div>
</template>

<script>
export default {
    name: "about",
    data: function() {
        return {
            pagename: "About us",
            pagediscription: "This is about us"
        };
    }
};
</script>
