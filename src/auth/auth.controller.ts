import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard'; // Garde d'authentification locale
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Inscription
  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }

  // Connexion
  @UseGuards(LocalAuthGuard)
  @Post('login')
  // On définit la réponse de la route etant un objet { access_token: string }
  @ApiCreatedResponse({ type: LoginResponseDto })
  async login(@Body() loginDto: LoginRequestDto) {
    return this.authService.login(loginDto);
  }
}
