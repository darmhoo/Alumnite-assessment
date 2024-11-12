import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_BACKEND_URL;

enum UserRoles {
    Guest = 'guest',
    User = 'user',
    Admin = 'admin'
}

enum Status {
    Active = 'active',
    Inactive = 'inactive'
}

const url = `${apiUrl}/users`;
export const fetchAllUsers = async () => {
    return axios.get(url);
}
export const createUser = async (data: {
    name: string,
    email: string,
    role: UserRoles,
    status: Status,
    profile_photo: string
}) => {
    console.log(data)
    return axios.post(url, data);
}

export const fetchUserById = async (id:any) => {
    return axios.get(url+'/'+id);
}

export const updateUser = async (id:any, data: {
    name?: string,
    email?: string,
    role?: UserRoles,
    status?: Status,
    profile_photo?: string
}) => {
    return axios.put(url+'/'+id, data);
}