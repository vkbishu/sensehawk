<template>
    <div v-if="blog" class="blog">
        <div class="d-flex user align-items-center mb-3">
            <div class="user--avatar">
                <img src="https://avatars.dicebear.com/api/adventurer/.svg" alt="">
            </div>
            <div class="user--info">
                <div>{{blog.author}}</div>
                <div class="text-secondary"><small style="font-size: 0.8rem">{{blog | getTime}} . 3 min read</small></div>
            </div>
        </div>
        <h2 class="blog--title mb-5 fw-bold">{{blog.title}}</h2>
        <img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" alt="" class="img cover-img">
        <div>
        <div
            v-show="showTools"
            class="tools"
            :style="{
                left: `${x}px`,
                top: `${y}px`
            }"
            @mousedown.prevent=""
            >
            <span
                class="item"
                @mousedown.prevent="highLight"
            >
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#000000" d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16" />
                </svg>
            </span>
        </div>
            <div class="blog--content" v-html="blogContent" ref="highlightable"></div>
        </div>
    </div>
</template>


<script>
import {mapState, mapMutations} from "vuex"
import filters from "@/mixins/filters";
export default {
    mixins: [filters],
    data(){
        return {
            selectionData: null,
            showTools: false,
            x:0,
            y:0,
        }
    },
    computed: {
        ...mapState(['blogs', 'highlights']),
        blog(){
            const blog_id = this.$route.params.id
           const result = this.blogs.filter(item => {
                return item.id == blog_id
            })
            return result.length > 0 ? result[0] : null;
        },
        hightlightKeywords(){
            let keywords = []
            this.highlights.forEach(item => {
                if(item.blogId === this.$route.params.id){
                    keywords.push(item)
                }
            })
            return keywords
        },
        blogContent(){
            const valArray = this.blog.content.split('');
            this.hightlightKeywords.forEach(item => {
                valArray.splice(item.start, 1, "<mark>"+valArray[item.start]);
                valArray.splice(item.end-1, 1, valArray[item.end-1]+"</mark>");
            });
            return this.nl2br(valArray.join(''));
        }
    },
    methods: {
        ...mapMutations(['addHighlight']),
       getSelectionCharacterOffsetWithin(element) {
           // https://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container
            let start = 0;
            let end = 0;
            let text = '';
            let doc = element.ownerDocument || element.document;
            let win = doc.defaultView || doc.parentWindow;
            let sel;
            if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    text = sel.toString();
                    let range = win.getSelection().getRangeAt(0);
                    let preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.startContainer, range.startOffset);
                    start = preCaretRange.toString().length;
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    end = preCaretRange.toString().length;
                }
            } else if ( (sel = doc.selection) && sel.type != "Control") {
                let textRange = sel.createRange();
                text = textRange.toString();
                let preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToStart", textRange);
                start = preCaretTextRange.text.length;
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                end = preCaretTextRange.text.length;
            }
            return { start: start, end: end, text};
        },
        onMouseUp(){
            const $selectableEl = this.$refs.highlightable;
            const selection = window.getSelection()
            const text = selection.toString()
          
            const startNode = selection.getRangeAt(0).startContainer.parentNode;
            const endNode = selection.getRangeAt(0).endContainer.parentNode;
            const hasSpecialChar = text && /[^a-zA-Z0-9\s]/g.test(text);
            if (!startNode.isSameNode($selectableEl) || !startNode.isSameNode(endNode)) {
                this.showTools = false
                return
            }
           const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect()
            if(!width || hasSpecialChar){
                this.showTools = false
                return
            }

            let selOffsets = this.getSelectionCharacterOffsetWithin(this.$refs.highlightable);
            selOffsets.blogId = this.$route.params.id;
            //console.log(selOffsets);
            if(selOffsets && selOffsets.text && selOffsets.text.length > 0){
                this.selectionData = selOffsets
                this.showTools = true;
                this.x = x + (width / 2)
                this.y = y + window.scrollY - 10
            }else{
                this.showTools = false
            }
        },
        highLight(){
            if(this.selectionData && this.selectionData.text && this.selectionData.text.length > 0){
               this.addHighlight(Object.assign({}, this.selectionData));
            }
        },
        nl2br(str, is_xhtml){
            if (typeof str === 'undefined' || str === null) {
                return '';
            }
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
    },
    mounted(){
        window.addEventListener('mouseup', this.onMouseUp);
    },
    beforeDestroy(){
        window.removeEventListener('mouseup', this.onMouseUp)
    }
}
</script>

<style lang="scss" scoped>

.user--avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.9rem;
    img {
        max-width: 100%;
    }
}
.cover-img {
    max-width: 100%;
    margin-bottom: 3rem;
}
.popup-tag{
    position:absolute;
    display:none;
    background-color:#222121d4;
    border-radius: 10px;
    color:white;
    padding:10px 20px;
    font-size: 15px;
    cursor:pointer;
}



.tools {
    height: 30px;
    padding: 5px 10px;
    background: #333;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -100%);
    transition: 0.2s all;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #333;
    }

    .item {
        color: #FFF;
        cursor: pointer;

        &:hover {
            color: #1199ff
        }

        path {
            fill: #FFF;
            &:hover {
                fill: #1199ff;
            }
        }

        &+.item {
            margin-left: 10px
        }
    }
}


</style>