import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  lastname: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  email: string;
}

export class updateDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  lastname?: string;
  @IsString()
  @IsOptional()
  password?: string;
  @IsString()
  @IsOptional()
  email?: string;
}
