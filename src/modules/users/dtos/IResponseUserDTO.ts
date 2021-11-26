interface IResponseUserDTO {
    id: string;
    name: string;
    email: string;
    phone: string;
    sexo: string;
    birthday: Date;
    updated_at?: Date;
}

export { IResponseUserDTO }