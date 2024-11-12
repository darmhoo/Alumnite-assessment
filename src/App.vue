<script setup lang="ts">

</script>

<template>

  <Transition>
    <div class="flex flex-col justify-center min-h-screen py-5 bg-slate-200">
      <div class="flex gap-10 justify-center items-center">
        <RouterLink active-class="active" exact-active-class="exact" class="p-2 rounded-lg" to="/">Home</RouterLink>
        <RouterLink active-class="active" exact-active-class="exact" class="p-2 rounded-lg" to="/add-user">Add Users</RouterLink>        
      </div>
      <div>
        <RouterView />
      </div>
    </div>

  </Transition>
</template>

<style scoped></style>
