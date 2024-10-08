import { DefaultSession } from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    userId?: string;
    userRole?: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      usreId?: string;
      userRole?: string;
    } & DefaultSession['user'];
  }
}
