<template>
    <div class="add-story">
        <h2 class="mb-5 heading">Write Your Story</h2>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Title" v-model="title">
        </div>
        <div class="mb-3">
            <textarea class="form-control" placeholder="Tell your story..." rows="18" v-model="content"></textarea>
        </div>
        <button class="btn btn-primary btn-sm text-white" @click.prevent="publish">
            <span v-if="id !== null">Save</span>
            <span v-else>Publish</span>
        </button>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
    name: "AddStory",
    computed: {
        ...mapState(['blogs'])
    },
    data(){
        return {
            id: null,
            title: '',
            content: ''
        }
    },
    methods: {
        ...mapMutations(['addBlog', 'updateBlog']),
        checkBlog(){
            if(this.$route.params.id){
                const blog_id = this.$route.params.id
                this.id = blog_id;
                const result = this.blogs.filter(item => {
                    return item.id == blog_id
                })
                if(result.length > 0){
                    this.title = result[0].title;
                    this.content = result[0].content;
                }
            }else{
                this.resetForm();
            }
        },
        publish(){
            if(this.title.trim().length == 0){
                return false;
            }

            if(this.id !== null){
                this.updateBlog({
                    id: this.id,
                    data: {
                        title: this.title,
                        content: this.content
                    }
                });
            }else{
                this.addBlog({
                    data: {
                        title: this.title,
                        content: this.content
                    }
                });
            }

            this.resetForm()
            this.$router.push('/')

        },

        resetForm(){
            this.id = null
            this.title = ''
            this.content = ''
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(){
               this.checkBlog();
            }
        }
    }
}
</script>