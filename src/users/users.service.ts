import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(userData: {
    name: string;
    email: string;
    password: string;
  }) {
    const existingUser = this.users.find(
      (user) => user.email === userData.email,
    );

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const user: User = {
      id: this.users.length + 1,
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    this.users.push(user);

    // Don't return password to the frontend
    const { password, ...safeUser } = user;

    return safeUser;
  }

  findAll() {
    return this.users.map(({ password, ...user }) => user);
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { password, ...safeUser } = user;

    return safeUser;
  }

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}