import supabase from './supabase';

export async function signUpWithEmailAndPassword({
  email,
  password,
  firstName,
  lastName,
}) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    },
  });

  if (error)
    throw new Error('Error Signing up try again with your email and password');

  return data;
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message || 'Error getting user');

  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message || 'Error logging out');
}
