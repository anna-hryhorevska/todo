import { credentials } from '@/constants';

export function login(name, password) {
  if (name === credentials.name && password === credentials.password) {
    return true;
  }
  return false;
}

export function getProfile() {
  return {
    name: 'Admin',
  };
}
