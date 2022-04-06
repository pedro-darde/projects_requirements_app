export type User = {
    [Key in RequiredFieldsUser]: string
};
export type RequiredFieldsUser = "password" | "email" | "name"

export type UserAdd = User & { id: number }