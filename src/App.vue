<template>
  <DefinitionForm />
  <div class="definition-board">
    <DefinitionList />
  </div>
</template>

<script>
  import DefinitionForm from './components/DefinitionForm.vue';
  import DefinitionList from './components/DefinitionList.vue';
  export default {
    name: 'App',
    components: {
      DefinitionForm,
      DefinitionList
    }
  }
</script>
<style scoped>
  .definition-board {
    border-style: solid;
  };
</style>
