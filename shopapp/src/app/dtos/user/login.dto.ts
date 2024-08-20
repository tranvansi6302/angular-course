import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class loginDTO {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    constructor(data: loginDTO) {
        this.email = data.email
        this.password = data.password
    }
}
