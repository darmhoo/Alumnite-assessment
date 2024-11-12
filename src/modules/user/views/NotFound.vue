<template>
    <div>Not Found</div>
</template>
<script setup lang="ts">
import { fetchAllUsers } from '../services/api-provider.service';
// import { UserCollection } from '../models/UserCollection';


    const fetchUsers = async () => {
        let usersList = await fetchAllUsers();
        console.log(usersList);
    }

    fetchUsers();
</script>