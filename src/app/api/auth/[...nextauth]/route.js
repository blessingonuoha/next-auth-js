import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import connectDB from "utils/database";
// import User from "models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // await connectDB();
      // const sessionUser = await User.findOne({ email: session.user.email });
      // session.user.id = sessionUser._id;
      session.user.name = session.name;
      // console.log(sessionUser);
      return session;
    },
    async signIn({ profile, account }) {
      // await connectDB();
      try {
        if (account.provider === "google") {
          const restrictUser =
            profile.email.endsWith("@gmail.com") ||
            profile.email.includes("@gmail.com");
          console.log("Access Denied", restrictUser);
          if (restrictUser) {
            await this.redirect("/api/auth/error?error=AccessDenied");
          } else return true;
          // "http://localhost:3000/api/auth/signin?error=OAuthSignin"
        }
        // else {
        //   const userExist = await User.findOne({ email: profile.email });

        //   if (!userExist) {
        //     const user = await User.create({
        //       // id: profile.id,
        //       name: profile.name,
        //       email: profile.email,
        //       // role: profile.role,
        //       email_verified: profile?.email_verified?.true ?? false,
        //     });
        //   }
        // }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }

      // console.log(profile);
    },
  },
});

export { handler as GET, handler as POST };
