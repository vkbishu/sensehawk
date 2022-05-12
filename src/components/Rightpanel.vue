<template>
    <div class="sidebar" style="padding-top:40px">
        <div class="block">
            <div class="text-secondary mb-3"><small>Design and Developed By</small></div>
            <div class="d-flex align-items-center profile mb-3">
                <div class="profile-pic me-3">
                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQFLUBtHURy09g/profile-displayphoto-shrink_800_800/0/1527835044079?e=1657756800&v=beta&t=SQfnYb68a9ciFiLc5niq5r1anby6Vaxs6kjz93ZHUzE" alt="">
                </div>
                <div>
                    <h5 class="fw-bold mb-1 name">Venkatesh Bishu</h5>
                    <div class="text-secondary"><small>Senior Software Engineer</small></div>
                </div>
            </div>
        </div>

        <div class="block">
            <h5>Reading List</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam sint, tenetur dolor in voluptatibus voluptate</p>
        </div>

        <div class="block">
            <h5>Recommended topics</h5>
            <span class="badge rounded-pill bg-primary me-3 mb-2 fw-normal" v-for="item in topics" :key="item">{{item}}</span>
        </div>

        <div class="pages block">
            <a href="#" @click.prevent="" v-for="item in pages" :key="item">{{item}}</a>
        </div>
    </div>
</template>

<script>
export default {
     data(){
        return {
            topics: ['Technology', 'Money', 'Business', 'Productivity', 'Art', 'Mindfullness'],
            pages: ['Help', 'Status', 'Writers', 'Blogs', 'Careers', 'Terms', 'About', 'Knowable']
        }
    }
}
</script>
<style lang="scss" scoped>
.block {
    margin-bottom: 4rem;
}
.sidebar {
    border-left: 1px solid #ddd;
    height: 100vh;
    flex-basis: 394px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 32px;
    position: sticky;
    top: 0;

    .profile {
        .name {
            font-size: 0.9rem;
        }
        line-height: 1rem;

        small {
            font-size: 0.8em;
        }
    }
    .profile-pic {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    h5 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 1.3rem;
    }
    p,span {
        font-size: 14px;
    }
    .badge {
        padding: 10px;
    }
    .pages a {
        font-size: 12px;
        margin-right: 10px;
        display: inline-block;
        text-decoration: none;
        color: grey;
    }
}

.user-avatar {
    padding: 50px 15px;
}
</style>