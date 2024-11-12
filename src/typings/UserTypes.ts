export enum UserRoles {
    Guest = 'guest',
    User = 'user',
    Admin = 'admin'
}

export enum Status {
    Active = 'active',
    Inactive = 'inactive'
}

export type Form = {
    id?: string,
    name: string,
    email: string,
    role: UserRoles,
    status: Status,
    profile_photo: string
}