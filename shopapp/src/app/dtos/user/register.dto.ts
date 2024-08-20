import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class RegisterDTO {
    @IsString()
    @IsNotEmpty()
    full_name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    constructor(data: RegisterDTO) {
        this.full_name = data.full_name
        this.email = data.email
        this.password = data.password
    }
}
