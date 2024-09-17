import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'; // Le service Users pour récupérer les utilisateurs
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Validation des identifiants utilisateur
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result; // On retourne l'utilisateur sans le mot de passe
    }
    return null;
  }

  // Connexion de l'utilisateur, génère un JWT
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Inscription de l'utilisateur avec un mot de passe haché
  async register(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    return this.usersService.create({ ...userDto, password: hashedPassword });
  }
}
