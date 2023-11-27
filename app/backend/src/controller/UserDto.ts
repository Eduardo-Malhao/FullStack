import { IUsers } from "../interfaces/IUsers";

export default class UserDto{
    
    public static BodyToUser(body: any) : IUsers {
        return {
            email: body.email,
            password: body.password,
            username: body.username,
            role: body.role
        };
    }
}