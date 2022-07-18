<template>

    <nav>
        <button v-if="props.currentView=='schedule'" class="back" @click="$emit('toggleCurrentView')">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button v-if="props.currentView=='folders'" class="addFolder" @click="$emit('toggleNewFolderPrompt')">
            <ion-icon name="add-outline"></ion-icon>
        </button>
        {{props.navbarTitle}}
    </nav>

</template>

<script setup>

const props = defineProps({
    currentView: String,
    navbarTitle: String
})

console.log(props.navbarTitle)

</script>

<style scoped>

nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8em 8%;
    font-size: 1.3rem;
    background: whitesmoke;
}
    nav button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        color: black;
    }
    nav .addFolder{
        background: rgba(0, 173, 0, 0.473);
    }
    nav .back{
        background: rgb(255, 208, 120);
        font-size: 1.6rem;
        padding: .2rem;
    }

</style>