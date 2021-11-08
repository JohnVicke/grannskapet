import { verifyToken } from '../utils/verifyToken';
import { MiddlewareFn } from 'type-graphql';
import { Context } from '../types';

export const isAuth: MiddlewareFn<Context> = async (
  { context: { req } },
  next
) => {
  try {
    const authheader = req.headers.authorization || '';
    if (authheader) {
      const token = authheader.split(' ')[1];
      console.log(token);
      const payload = await verifyToken(token);
      if (!!payload && !!payload.sub) return next();
    }
  } catch (error) {
    console.error(error);
    throw new Error('not authenticated');
  }
};
