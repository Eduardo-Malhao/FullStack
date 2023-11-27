import { IUsers } from "../interfaces/IUsers";

export default function mapRequestBodyToUser(body: any): IUsers {
    return {
        email: body.email,
        password: body.password,
        username: body.username,
        role: body.role
    };
}