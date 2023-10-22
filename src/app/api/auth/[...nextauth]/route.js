import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // },
      httpOptions: {
        timeout: 100000,
      },
      
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      // console.log("session", session.user.refreshToken)
      return session;
    },

    async redirect({ url, baseUrl }) {
      // console.log("url", url)
      // console.log("baseUrl", baseUrl)
    if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl
       
    },

    async jwt({ token, account, user }) {
      //initial Signin
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing Access Token is valid");
        return token;
      }

      //Access token expired, time to refresh it
      console.log("Existing Access Token has expired, Log in again");
      // return await refreshAccessToken(token);
      return this.redirect("/api/auth/signin");
    },
    async signIn({ profile, account }) {
      // await connectDB();
      try {
        if (account?.provider === "google") {
          const restrictUser =
            profile.email.endsWith("@gmail.com") ||
            profile.email.includes("@gmail.com");
          console.log("Access Denied", restrictUser);
          if (restrictUser) {
            await this.redirect("/api/auth/error?error=AccessDenied");
          } else return true;
          // "http://localhost:3000/api/auth/signin?error=OAuthSignin"
        }

        return true;
      } catch (error) {
        console.log(error);
      }

      // console.log(profile);
    },

    },
    // pages: {
    //   error: '/auth/error'
    // }    
  },
  
);

export { handler as GET, handler as POST };
