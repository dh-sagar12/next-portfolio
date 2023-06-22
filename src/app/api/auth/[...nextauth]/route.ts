import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: 'credentials', 
      credentials: {
        email: { label: "email", type: "email", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" },
        url: {label:'url', type: 'text'}
      }, 
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const res = await fetch("http://localhost:3000/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   }),
        // });

        const res  =  await axios.post(`${credentials?.url}/api/login`, {
          email: credentials?.email, 
          password: credentials?.password
        })

        const user = res.data;
        console.log('user is ', user);
        
        if (user?.data) {
          return user;
        } else {
          throw new Error(user.message);
        }
      },
    }),

  ],
  pages: {
    signIn: '/login', 
  }, 
  secret: process.env.NEXTAUTH_SECRET, 
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };