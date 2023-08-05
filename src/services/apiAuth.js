import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const auth = getAuth(app);

export async function signUpUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = await userCredential.user;

    return user;
  } catch (error) {
    console.error(error);
  }
}
