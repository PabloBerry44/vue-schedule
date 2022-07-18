<template>

    <div class="folder">
        <!-- create new note -->
        <form @submit.prevent="$emit('createNote', newNoteText), clearInput()">
            <input type="text" v-model="newNoteText" placeholder="New task">
            <button>
                <ion-icon name="add-outline"></ion-icon>
            </button>
        </form>
        <!-- render existing notes -->
        <div v-for="note in folder.notes" class="note" :class="{complete: note.complete}" @click.self="$emit('completeNote', note.id)">
            {{note.text}}
            <button class="removeNote" @click="$emit('removeNote', note.id)">
                <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        folder: Object
    })

    const newNoteText = ref('')

    const clearInput = () => {
        newNoteText.value = ''
    }

</script>

<style scoped>

.folder{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
    gap: .3em;
    flex-direction: column;
}
form{
    width: 100%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    form input{
        width: 82%;
        padding: .3em;
        font-size: 1.3rem;
        border-radius: 15px;
        outline: none;
        border: 1px solid gray;   
    }
    form button{
        background: rgba(0, 173, 0, 0.473);
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        color: black;
        height: min-content;
        margin-right: 4%;
    }
.note{
    width: 100%;
    margin-inline: auto;
    background: whitesmoke;
    display: flex;
    align-items: center;
    padding: 4%;
    border-radius: 20px;
    justify-content: space-between;
    margin-top: .7em;
}
    .complete{
        opacity: .2;
        text-decoration: line-through;
    }
    .note form{
        width: min-content;
        margin-right: .3em;
    }
        .note form input{
            width: 2rem;
            height: 2rem;
        }
    .note .removeNote{
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
    .text{
        width: 95%;
        display: inline-flex;
    }

</style>