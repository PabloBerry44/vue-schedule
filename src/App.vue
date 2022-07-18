<template>

  <NavBar 
    :currentView="currentView" 
    :navbarTitle="navbarTitle" 
    @toggleCurrentView="toggleCurrentView" 
    @toggleNewFolderPrompt="toggleNewFolderPrompt"/>

  <NewFolderPrompt 
    @addNewFolder="addNewFolder" 
    @toggleNewFolderPrompt="toggleNewFolderPrompt" 
    v-if="visible"/>

  <ViewFolders 
    v-if="currentView=='folders'" 
    @openFolder="openFolder" 
    @removeFolder="removeFolder" 
    :folders="folders"/>

  <ViewSchedule 
    @removeNote="removeNote" 
    @completeNote="toggleCompleteNote" 
    @createNote="createNote" 
    :folder="folders[currentFolder]" 
    v-if="currentView=='schedule'"/> 

</template>

<script setup>
  import { ref } from 'vue'
  import NavBar from './components/navBar.vue'
  import ViewFolders from './components/viewFolders.vue'
  import NewFolderPrompt from './components/newFolderPrompt.vue'
  import ViewSchedule from './components/viewSchedule.vue'

  let folderId = 0
  let noteId = 0
  let currentView = ref('folders')
  const currentFolder = ref(0)
  const folders = ref([
    {id: folderId++, name: 'Sample Folder', notes: [
      {id: noteId++, text: 'Sample Note Title', complete: false},
      {id: noteId++, text: 'Another sample title', complete: false}
    ]}
  ])

  const navbarTitle = ref('Folders')


  let visible = ref(false)
  const toggleNewFolderPrompt = () => {
    visible.value = !visible.value
  }
  const addNewFolder = (name) => {
    folders.value.push({id: folderId++, name: name, notes: []})
    toggleNewFolderPrompt()
  }
  const removeFolder = (folderId) => {
    folders.value = folders.value.filter((folder)=> folder.id !== folderId)
  }
  const openFolder = (folderId) => {
    for(let i=0; i<folders.value.length; i++){
      if(folders.value[i].id == folderId){
        currentFolder.value = i
      }
    }
    toggleCurrentView()
  }
  const toggleCurrentView = () => {
    if(currentView.value == 'schedule')
    {
      currentView.value = 'folders'
      navbarTitle.value = 'Folders'
    }
    else{
      currentView.value = 'schedule'
      navbarTitle.value = folders.value[currentFolder.value].name
    }
  }
  const createNote = (text) => {
    folders.value[currentFolder.value].notes.push({id: noteId++, text: text, complete: false})
  }

  const removeNote = (noteId) => {
    folders.value[currentFolder.value].notes = folders.value[currentFolder.value].notes.filter((note)=> note.id !== noteId)
  }

  const toggleCompleteNote = (noteId) => {
    for(let i=0; i<folders.value[currentFolder.value].notes.length; i++){
      if(folders.value[currentFolder.value].notes[i].id == noteId){
        noteId = i
      }
    }
    if(folders.value[currentFolder.value].notes[noteId].complete){
      folders.value[currentFolder.value].notes[noteId].complete = false
    }
    else{
      folders.value[currentFolder.value].notes[noteId].complete = true
    }
    
  }

</script>