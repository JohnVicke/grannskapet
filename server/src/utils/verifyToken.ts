import jwksClient from 'jwks-rsa';
import jwt from 'jsonwebtoken';
import { JWTPayload } from 'express-oauth2-jwt-bearer';

export const verifyToken = async (bearerToken: string) => {
  const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });

  const getJwksClientKey = async (header: any, cb: any) => {
    console.log('header', header);
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.getPublicKey();
      cb(null, signingKey);
    });
  };
  return new Promise<JWTPayload | undefined>((resolve, reject) => {
    jwt.verify(
      bearerToken,
      getJwksClientKey,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        algorithms: ['RS256']
      },
      (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      }
    );
  });
};
