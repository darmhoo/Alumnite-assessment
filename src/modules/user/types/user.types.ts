export type Timestamp = number;

export enum USER_ROLES {
    ADMIN = 'admin',
    GUEST = 'guest',
    USER = 'user',
};

export enum STATUS {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
};


export interface ModelFetchDto {
    id: number;
  }

export interface User {
    readonly id: number;
    name: string;
    email: string;
    role: USER_ROLES;
    status: STATUS;
    profile_photo: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserDto {
    id?: number;
    name: string;
    email: string;
    role: USER_ROLES;
    status: STATUS;
    profile_photo: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
