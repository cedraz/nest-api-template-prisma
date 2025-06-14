import { UserSimple } from 'src/user/entities/user-simple.entity';

export class LoginResponseDto {
  userWithoutPassword: UserSimple;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: Date;
  refreshTokenExpiresIn: Date;
}
