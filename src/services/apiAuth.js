import supabase from "./supabase";

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
    throw new Error("Error Signing up try again with your email and password");

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message || "Error getting user");

  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message || "Error logging out");
}

export async function deleteAccount() {
  const { error } = await supabase.rpc("delete_user");
  await signOut();

  if (error) throw new Error(error.message || "Error deleting account");
}

// Then, updating the deleteAccount function to use the new function: */

export async function signInWithEmailAndPassword({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw new Error(
      error.message || "Error signing in with email and password"
    );
  }
  return data;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google", // options: {
    //   redirectTo: "http://localhost:5173",
    // },
  });

  if (error) {
    throw new Error(error.message || "Error signing in with Google");
  }

  return data;
}
