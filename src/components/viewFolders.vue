<template>

    <p v-if="folders.length==0" class="noFoldersMsg">
        No folders yet. <br> <br>
        Tap 
        <span class="plusSample">
            <ion-icon name="add-outline"></ion-icon>
        </span> 
        to add new folder.
    </p>
    <div v-else v-for="folder in folders">
        <div class="folder" @click.self="$emit('openFolder', folder.id)">
            <img @click="$emit('openFolder', folder.id)" src="./folder.webp">
            <p class="name" @click="$emit('openFolder', folder.id)">{{folder.name}} <span class="number">({{folder.notes.length}})</span></p>
            <button @click="$emit('removeFolder', folder.id)">
                <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    folders : Array
})

</script>

<style scoped>

.noFoldersMsg{
    text-align: center;
    margin-top: 13.5em;
    font-size: 1.1rem;
}
    .plusSample{
        background: rgba(0, 173, 0, 0.589);
        transform: translateY(.55rem);
        width: min-content;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        color: black;
    }
    button{
        background: rgb(255, 106, 106);
        width: min-content;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10px;
        font-size: 2rem;
        color: black;
    }
.folder{
    width: 92%;
    margin-inline: auto;
    background: whitesmoke;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 4%;
    border-radius: 20px;
    justify-content: space-between;
    margin-top: .7em;
}
    .removeButton{
        background: rgba(255, 0, 0, 0.705);
        border-radius: 10px;
        right: 1em;
    }
    .folder img{
        width: 3em;
        display: inline-block;
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .name{
        display: flex;
        gap: .3em;
    }
    .number{
        opacity: .3;
    }

</style>