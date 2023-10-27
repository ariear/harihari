import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { SessionStrategy } from "next-auth";

const prisma = new PrismaClient()

export const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt" as SessionStrategy
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }