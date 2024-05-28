export class User {
  id!: number;
  userId?: string;
  nom!: string;
  prenom!: string;
  username!: string;
  motDePasse!: string;
  email!: string;
  profileImageUrl?: string;
  // lastLoginDate?: Date;
  // lastLoginDateDisplay?: Date;
  // joinDate: Date;
  role!: UserRole | string;
  // authorities: string[];
  isActive!: boolean;
  isNotLocked!: boolean;
}

/**
 * Ici c'est optionel
 */
enum UserRole {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN'
}

