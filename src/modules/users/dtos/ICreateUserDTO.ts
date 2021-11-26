interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
    sexo: string;
    id?: string;
    updated_at?: Date;
    created_at?: Date;
}

export { ICreateUserDTO }