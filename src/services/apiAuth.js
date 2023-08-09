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

export async function deleteAccount() {
  // setLoading(true);
  // if (!user) throw new Error('No user');
  await supabase.functions.invoke('deleteUser');
  await supabase.auth.signOut();
  // alert('Account deleted successfully!');

  // alert('Error deleting the account!');
  // console.log(error);

  // setLoading(false);
  // setIsModalOpen(false);
  // Note that you also will force a logout after completing it
  // await supabase.auth.signOut();
  // router.push('/');
}
// Then, updating the deleteAccount function to use the new function: */

export async function signInWithEmailAndPassword({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error)
    throw new Error('Error Signing in try again with your email and password');
  return data;
}
