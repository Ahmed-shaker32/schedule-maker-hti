const supabaseUrl = "https://rvklfbigcotmqpvetgfv.supabase.co";
const supabaseKey = "sb_publishable_8BOJaVzol98g5tMFpe4sdw_Q3noyIv-";

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
