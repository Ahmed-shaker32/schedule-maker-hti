const supabaseUrl = "PUT_SUPABASE_URL";
const supabaseKey = "PUT_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function checkUser() {
  const { data } = await supabaseClient.auth.getUser();

  if (!data.user) {
    window.location = "login.html";
  }
}

async function loginWithGoogle() {
  await supabaseClient.auth.signInWithOAuth({
    provider: "google"
  });
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location = "login.html";
}

async function getUser() {
  const { data } = await supabaseClient.auth.getUser();
  return data.user;
}
