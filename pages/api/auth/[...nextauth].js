import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, spiApi } from "../../../lib/spotify";

export const config = {
  runtime: 'nodejs',
}

async function refresssAccessToken(token) {
  try {
    spiApi.setAccessToken(token.accessToken);
    spiApi.setRefreshToken(token.refreshToken);
    const { body } = await spiApi.refreshAccessToken();
    return {
      ...token,
      accessToken: body.access_token,
      refreshToken: body.refresh_token ?? token.refreshToken,
      accessTokenExpire: body.expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenerror",
    };
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
      httpOptions:{
        timeout:20000
      }
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ account, user, token }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          userName: account.providerAccountId,
          expreisAt: account.expires_at * 1000,
        };
      }
      if (Date.now() < token.expreisAt) {
        return token;
      }
      return await refresssAccessToken(token);
    },
    session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.userName = token.userName;

      return session;
    },
  },
});
