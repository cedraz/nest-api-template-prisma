import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  SWAGGER_API_URL: string;

  @IsString()
  @IsNotEmpty()
  PORT: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_URL: string;

  @IsString()
  @IsNotEmpty()
  ACCESS_TOKEN_SECRET: string;

  @IsString()
  @IsNotEmpty()
  REFRESH_TOKEN_SECRET: string;

  @IsString()
  MAIL_HOST: string;

  @IsNumber()
  MAIL_PORT: number;

  @IsString()
  MAIL_USER: string;

  @IsString()
  MAIL_PASS: string;

  @IsBoolean()
  MAIL_SECURE: boolean;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_CLOUD_NAME: string;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_KEY: string;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_SECRET: string;

  @IsString()
  @IsNotEmpty()
  REDIS_URL: string;

  @IsString()
  STRIPE_API_KEY: string;

  @IsString()
  STRIPE_FREE_PRICE_ID: string;

  @IsString()
  STRIPE_PREMIUM_PRICE_ID: string;

  @IsString()
  STRIPE_WEBHOOK_SECRET: string;
}
