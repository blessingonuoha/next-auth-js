// Catch all route

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// define a new NextAuth instance
export default (authOptions) => ({
  providers: [
    GoogleProvider({
      client_Id: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   id: "google",
      //   name: "Google",
      //   type: "oauth",
      //   wellKnown: "https://accounts.google.com/.well-known/openid-configuration",

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },

      //   profile(profile) {
      //     return {
      //       id: profile.sub,
      //       name: profile.name,
      //       email: profile.email,
      //       image: profile.picture,
      //     };
      //   },
      //   callbacks: {
      //     async signIn({ user, account, profile, email, credentials }) {
      //       // restrict access to peopel with verified email acct
      //       if (account.provider === "google") {
      //         console.log(account.provider);
      //         return (
      //           profile.email_verified && profile.email.endsWith("@gmail.com")
      //         );
      //       }
      //       return true;
      //     },
      //   },
      // }),
      // CredentialsProvider({
      //   name: "Credentials",
      //   credentials: {
      //     email: {
      //       label: "Email",
      //       type: "text",
      //       placeholder: "Enter your email",
      //     },
      //     password: { label: "Password", type: "password" },
      //   },
      //   //  Auth logic for cedentials provider
      //   async authorize(credentials, req) {
      //     //   user API from database goes here
      //     console.log("credentials", credentials);
      //     const user = {
      //       id: 1,
      //       email: "johndoe@email",
      //       password: "jamit",
      //     };
      //     const { email, password } = credentials;
      //     if (email && password) {
      //       return {
      //         user,
      //       };
      //     } else {
      //       // Handle case when 'credentials' is undefined or does not have 'username'
      //       return null;
      //     }
      //   },
    }),
  ],
  secret: process.env.SECRET,
  //   pages: {
  //     signIn: "/auth/signin",
  //     signOut: "/auth/signout",
  //     error: "/auth/error",
  //     // include the original route
  //   },
});
