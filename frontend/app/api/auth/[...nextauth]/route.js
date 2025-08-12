import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Strapi",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Debug: check what we're getting from the form
          console.log("🔹 Received credentials from form:", credentials);

          // Send login request to Strapi
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                identifier: credentials.email,  // must match Strapi's "identifier"
                password: credentials.password,
              }),
            }
          );

          // Parse the JSON
          const data = await res.json();
          console.log("🔹 Strapi response:", data);

          // If login failed
          if (!res.ok || !data.jwt) {
            console.error("❌ Login failed:", data);
            return null; // Returning null tells NextAuth "invalid credentials"
          }

          // If login successful, return the user object
          return {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email,
            firstName: data.user.firstName || null,
            lastName: data.user.lastName || null,
            jwt: data.jwt,
          };

        } catch (error) {
          console.error("🔥 Error in authorize():", error);
          return null;
        }
      }

    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.jwt = token.jwt;
      return session;
    },
  },
  pages: {
    signIn: "/login", // your custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };