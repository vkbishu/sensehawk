<template>
    <div class="list-group-item list-group-item-action border-0 mb-5" aria-current="true" :key="item.id">
        <div class="d-flex align-items-center justify-content-between mb-2">
            <div class="author d-flex align-items-center mb-2">
                <div class="avatar me-2">
                    <img src="https://avatars.dicebear.com/api/adventurer/.svg" alt="">
                </div>
                <div class="text">{{item.author}} - <small class="text-secondary">{{item | getTime}}</small></div>
            </div>
            <div>
                <router-link :to="`/add-story/${item.id}`" class="me-3 text-dark" title="Edit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
            </router-link>
            <a href="#" @click.prevent="$emit('deleteBlog')" title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 30 30"
                style=" fill:#000000;"><path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path></svg>
            </a>
            </div>
        </div>
        <router-link :to="'/blog/'+item.id" class="no-style">
            <div class="d-flex w-100 justify-content-between align-items-center mb-2">
                <h4 class="mb-1 fw-bold text-dark">{{item.title}} </h4>
            </div>
            <div class="mb-3 text-secondary text-truncate text-truncate--2">{{item.content}}</div>
            <div class="text-sm text-secondary"><small>3 min read </small></div>
        </router-link>
    </div>
</template>

<script>
import filters from "@/mixins/filters"
export default {
    name: "BlogOne",
    props: ['item'],
    mixins: [filters]
}
</script>


<style lang="scss" scoped>
.author {
    .avatar {
        width: 25px;
        height: 25px;
        background-color: grey;
        border-radius: 50%;
    }

    .text {
        color: black;
        font-size: 0.89rem;
    }
}

.text-truncate.text-truncate--2{
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.no-style {
    text-decoration: none;
}
</style>