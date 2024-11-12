<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <h3>Create User</h3>
        <form name="user_form" id="user_form" @submit.prevent="createNewUser()">
            <div class="py-4 px-8">

                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Name:</label>
                    <span class="text-red-700 text-xs" v-if="errors.name && !isNameValid">{{ errors.name }}</span>
                    <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text" name="name" id="name"
                        v-model="form.name.value" placeholder="">

                </div>


                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                    <span class="text-red-700 text-xs" v-if="errors.email && !isEmailValid">{{ errors.email }}</span>

                    <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text" name="student_name"
                        id="student_name" v-model="form.email.value" placeholder="">

                </div>

                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Role:</label>
                    <span class="text-red-700 text-xs" v-if="errors.role && !isRoleValid">{{ errors.role }}</span>

                    <select class=" border rounded w-full py-2 px-3 text-grey-darker" name="role" id="course_name"
                        v-model="form.role.value" placeholder="">
                        <option value="">--Select role--</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>

                    </select>
                    <p id=error_creater_id></p>
                </div>


                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Status:</label>
                    <span class="text-red-700 text-xs" v-if="errors.status && !isStatusValid">{{ errors.status }}</span>

                    <label class="relative inline-flex cursor-pointer items-center">
                        <input id="switch-2" type="checkbox" class="peer sr-only" v-model="checked"
                            @change="selectStatus(checked)" />
                        <label for="switch-2" class="hidden"></label>
                        <div
                            class="peer h-4 w-11 rounded-full border bg-white after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300">
                        </div>
                    </label>
                    <p id=error_intake_year></p>
                </div>

                <div>
                    <span class="text-red-700 text-xs" v-if="errors.profile_photo && !isImageValid">{{
                        errors.profile_photo }}</span>

                    <div class="flex justify-between mb-4">
                        <UploadWidget />
                        <img width="100" id="uploadedimage" src="" ref="image" />
                    </div>
                </div>






                <div class="mb-4">
                    <button class="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 "
                        type="submit">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>



<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue';
import { createUser } from '../services/api-provider.service';
import { Status, UserRoles } from '../../../typings/UserTypes';
//@ts-ignore
import UploadWidget from '../components/UploadWidget.vue';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';
const $toast = useToast();
const router = useRouter();




const error = ref(false);
const checked = ref(false);
const image = useTemplateRef('image');
const errors = ref<any>({});


const createNewUser = async () => {
    errors.value = {};
    form.profile_photo.value = image.value?.src
    validateField('email');
    validateField('role');
    validateField('name');
    validateField('status');
    validateField('profile_photo');
    if (Object.keys(errors.value).length === 0) {
        console.log(image.value?.src);

        let usersList = await createUser({
            name: form.name.value, email: form.email.value, role: form.role.value, status: form.status.value, profile_photo: form.profile_photo.value
        });

        $toast.success('User created successfully');
        router.push('/');

    } else {
        console.log(errors.value)
    }

}


const form = {
    name: ref(''),
    email: ref(''),
    role: ref<UserRoles | any>(),
    status: ref<Status | any>('inactive'),
    profile_photo: ref<any>('')
};

const selectStatus = (event: any) => {
    console.log(event)
    form.status.value = event ? 'active' : 'inactive'
}


const isNameValid = computed(() => form.name.value.trim() !== '');
const isEmailValid = computed(() => form.email.value.includes('@'));
const isRoleValid = computed(() => ['admin', 'user', 'guest'].includes(form.role.value));
const isStatusValid = computed(() => ['active', 'inactive'].includes(form.status.value));
const isImageValid = computed(() => form.profile_photo.value.trim() !== 'http://127.0.0.1:5174/add-user')

const validateField = (field: any) => {

    // errors.value[field] = '';
    if (field === 'name' && !isNameValid.value) {
        errors.value.name = 'Name is required'
    }

    if (field === 'email' && !isEmailValid.value) {
        errors.value.email = 'Email is not valid'
    }

    if (field === 'role' && !isRoleValid.value) {
        errors.value.role = 'Role is not valid'
    }

    if (field === 'status' && !isStatusValid.value) {
        errors.value.status = 'Status is not valid'
    }

    if (field === 'profile_photo' && !isImageValid.value) {
        errors.value.profile_photo = 'profile photo is not valid'
    }
}

</script>