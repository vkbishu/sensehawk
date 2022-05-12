<template>
    <div class="fixed sidenav">
        <div class="d-flex flex-column">
            <div class="logo">
                <router-link to="/" class="text-decoration-none ">
                    <h2 class="text-center text-dark fw-bold">MB</h2>
                </router-link>
            </div>
            <div class="d-flex flex-column align-items-center nav-item-wrapper">
                <router-link to="/home">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                </router-link>
        
                <router-link to="/highlights" title="Highlights">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" stroke-linecap="round"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" stroke-linecap="round"></path></svg>
                </router-link>

                <router-link to="/add-story" title="Add Story">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
                </router-link>
            </div>
            <div class="user-avatar">
                <img src="https://avatars.dicebear.com/api/adventurer/.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.logo {
    padding: 40px 0;
}
.nav-item-wrapper {
    a {
        padding-bottom: 35px;
    }
}
.sidenav {
    border-right: 1px solid #ddd;
    height: 100vh;
    width: 80px;
    flex-grow: 0;
    flex-shrink: 0;
    position: sticky;
    top: 0;
}
.router-link-active {
    color: black;
}
</style>