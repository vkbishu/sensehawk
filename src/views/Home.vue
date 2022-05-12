<template>
    <div class="home">
        <div class="d-flex align-items-center justify-content-between mb-5">
            <h2 class="heading m-0">My Stories</h2> 
            <div>
                <button class="btn btn-primary btn-rounded text-white rounded-pill btnt-sm" @click.prevent="$router.push('/add-story')">Write a story</button>
            </div>
        </div>
        <div class="list-group" v-if="blogList.length > 0">
            <BlogOne 
            v-for="item in blogList" 
            :item="item" 
            :key="item.id"
            @deleteBlog="deleteBlog(item.id)"
            />
        </div>
        <div v-else>
            <NoRecord />
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
import NoRecord from "@/components/NoRecord"
import BlogOne from "@/components/BlogOne"
export default {
    components: {
        NoRecord,
        BlogOne
    },
    computed: {
        ...mapState(['blogs']),
        blogList(){
            const results = [...this.blogs];
            return results.reverse();
        }
    },
    methods: {
        ...mapMutations(['addBlog', 'removeBlog']),
        deleteBlog(id){
            if(confirm('Are you sure to delete this record?')){
                this.removeBlog(id);
            }
        }
    }
}
</script>