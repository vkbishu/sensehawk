<template>
    <div class="highlight-page">
        <h2 class="heading mb-5">Highlights</h2>
        <div v-if="blogHighlights.length > 0">
            <div class="card mb-4 shadow-sm" v-for="(item, index) in blogHighlights" :key="index">
                <div class="card-body">
                    <div class="small-text text-secondary mb-4">From <router-link :to="`/blog/${item.blogId}`">{{item.blog.title}}</router-link> by {{item.blog.author}}</div>
                    <div v-html="item.blog.content"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <NoRecord />
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import NoRecord from "@/components/NoRecord"
export default {
    components: {
        NoRecord
    },
    computed: {
        ...mapState(['highlights', 'blogs']),
        blogHighlights(){
            const all_items = [...this.highlights];
            let result = all_items.map(item => {
                let copy = Object.assign({}, item);
                copy.blog =  this.getBlogHighlight(item)
                return copy
            }).filter(item => {
                return item.blog !== null;
            })
            return result.reverse();
        },
        blogsParsed(){
            const result = {};
            this.blogs.forEach(item => {
                result[item.id] = item;
            })
            return result;
        }
    },
    methods: {
        getBlogHighlight(highlight){
            const blogId = highlight.blogId
            let blog = this.blogsParsed[blogId] ? Object.assign({}, this.blogsParsed[blogId]) : null;
            if(blog === null){
                return null
            }
            let blogStartPos = 0
            let blogEndPos = blog.content.length
            const charLenToShow = 210;
            let showEllipiseStart,showEllipiseEnd;
            showEllipiseStart = showEllipiseEnd = false;

            const charPerLine = Math.round((charLenToShow/2))
            if((highlight.start - charPerLine) > blogStartPos){
                blogStartPos = highlight.start - charPerLine
            }

            if((highlight.end + charPerLine) < blogEndPos){
                blogEndPos = highlight.end + charPerLine
            }

            if(blogStartPos !== 0){
                showEllipiseStart = true;
            }

            if(showEllipiseEnd !== blog.content.length){
                showEllipiseEnd = true;
            }
    
            blog.content = blog.content.substring(blogStartPos,highlight.start)+"<mark>"+blog.content.substring(highlight.start,highlight.end)+"</mark>"+blog.content.substring(highlight.end,blogEndPos);
            if(showEllipiseStart){
                blog.content = "..."+blog.content;
            }
            if(showEllipiseEnd){
                blog.content = blog.content+"...";
            }
            return blog

        }
    }
}
</script>

<style lang="scss" scoped>
 .small-text {
    font-size: 14px;
    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
 }
</style>