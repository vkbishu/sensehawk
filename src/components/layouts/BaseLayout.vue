<template>
    <div class="wrapper layout-tab">
        <div class="d-flex">
            <SideBar />
            <main class="main">
                <div class="container-fluid">
                    <slot></slot>
                </div>
            </main>
            <Rightpanel />
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import Rightpanel from "@/components/Rightpanel"
export default {
    name: "BaseLayout",
    components: {
        SideBar,
        Rightpanel
    }
   
}
</script>

<style lang="scss" scoped>

.wrapper {
    max-width: 1504px;
}

main {
    padding-top: 40px;
    max-width: 700px;
    margin: 0 auto;
    flex-grow: 1;
    margin-bottom: 80px;
}
</style>