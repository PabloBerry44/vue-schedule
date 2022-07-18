<template>
    <div class="overlay" @click.self="$emit('toggleNewFolderPrompt')">

        <form @submit.prevent="$emit('addNewFolder', newFolderName)" class="prompt">

            <p>New folder</p>
            <input type="text" placeholder="Name" v-model="newFolderName">
            <button>Confirm</button>

        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue'
    const props = defineProps({
        addNewFolder: false
    })

    const newFolderName = ref('')

</script>

<style scoped>

.overlay{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(65, 65, 65, 0.479);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    z-index: 99;
}
    .prompt{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: whitesmoke;
        border-radius: 20px;
        flex-direction: column;
        padding: 1em;
        gap: 1em;
        box-shadow:
        0px 0px 5.3px rgba(0, 0, 0, 0.028),
        0px 0px 17.9px rgba(0, 0, 0, 0.042),
        0px 0px 80px rgba(0, 0, 0, 0.07);
    }
    .prompt input{
        padding: .3em;
        font-size: 1.3rem;
        border-radius: 15px;
        outline: none;
        border: 1px solid gray;
    }
    .prompt button{
        background: rgb(0, 140, 255);
        padding: .6em;
        font-size: 1.2rem;
        border-radius: 30px;
        color: white;
        border: none;
    }

</style>