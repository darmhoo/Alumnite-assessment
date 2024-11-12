<template>
    <div class="flex flex-col justify-center min-h-screen">
        <div class="flex items-center sm:justify-center mx-4 sm:ml-0 ">
            <table class="text-sm border-separate border-spacing-y-2 w-full sm:w-2/3">
                <thead class="sr-only">
                    <tr class="tr-class">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" class="tr-class cursor-pointer" @click="userDetail(user.id)">
                        <td class="td-class">{{ index + 1 }}</td>

                        <td class="td-class">{{ user.name }}</td>
                        <td class="td-class">{{ user.email }}</td>
                        <td class="td-class">{{ user.role }}</td>
                        <td class="td-class">
                            <span
                                class="float-right rounded-md  px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                                :class="{ 'bg-green-600/50': user.status === 'active', 'bg-red-600/50': user.status === 'inactive' }">{{
                                user.status }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script setup lang="ts">
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { fetchAllUsers } from '../services/api-provider.service';
// import { UserCollection } from '../models/UserCollection';
const users = ref();
const router = useRouter();
const $toast = useToast();

const fetchUsers = async () => {
    let usersList = await fetchAllUsers();
    users.value = usersList.data.reverse();
    console.log(usersList);
    $toast.success('users fetch successfully');
}

const userDetail = async (id: any) => {
    router.push('/manage-user/' + id)
}

fetchUsers();
</script>