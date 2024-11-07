import {
    AnyRecord, CollectionApiProvider, CollectionFetchResponse, ModelApiProvider,
} from '@zidadindimon/vue-mc';


import { UserDto, ModelFetchDto, User } from '../types/user.types';
const fs = require('fs');
const delay = async (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

export const userModelApiProvider: ModelApiProvider<UserDto, UserDto, ModelFetchDto, ModelFetchDto> = {
    async fetch(data: ModelFetchDto): Promise<UserDto> {
        const fileData = fs.readFileSync('../data/users.json');
        const jsonData = (JSON.parse(fileData) as UserDto[]).find((item) => item.id === data.id);
        if (!jsonData) throw new Error('User not Found');
        await delay(500);
        return jsonData;
    },

    async save(data: UserDto): Promise<UserDto> {
        const fileData = fs.readFileSync('../data/users.json');
        const userList = (JSON.parse(fileData || '[]') as UserDto[]);
        data.id = userList.length + 1;
        userList.push(data);
        fs.writeFileSync('users.json', JSON.stringify(userList), 'utf-8', (err: any) => {
            if (err) throw err;
            console.log('Data added to file');
        })
        await delay(500);
        return data;
    },
    async update(data: UserDto): Promise<UserDto> {
        const fileData = fs.readFileSync('../data/users.json');

        const userList = (JSON.parse(fileData || '[]') as UserDto[]);
        const index = userList.findIndex((item) => item.id === data.id);
        userList[index] = { ...userList[index], ...data, updatedAt: new Date().valueOf() };
        fs.writeFileSync('users.json', JSON.stringify(userList), 'utf-8', (err: any) => {
            if (err) throw err;
            console.log('Data updated to file');
        })
        await delay(500);
        return data;
    },
}

export const userCollectionApiProvider: CollectionApiProvider<User> = {
    async fetch(filter?: AnyRecord): Promise<CollectionFetchResponse<User, AnyRecord>> {
        const fileData = fs.readFileSync('../data/users.json');

        const userList = (JSON.parse(fileData || '[]') as any[]);
        console.log(userList);
        await delay(500);
        return {
            content: userList,
            pages: 1,
            page: 1,
            size: userList.length,
        };
    }
}