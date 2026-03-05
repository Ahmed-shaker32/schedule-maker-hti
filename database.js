async function saveGroups(name, data) {
  const user = await getUser();

  await supabaseClient
    .from("groups")
    .insert([
      {
        name: name,
        data: data,
        user_id: user.id
      }
    ]);
}

async function loadGroups() {
  const user = await getUser();

  const { data } = await supabaseClient
    .from("groups")
    .select("*")
    .eq("user_id", user.id);

  return data;
}

async function deleteGroup(id) {
  await supabaseClient
    .from("groups")
    .delete()
    .eq("id", id);
}

async function saveSchedule(name, data) {
  const user = await getUser();

  await supabaseClient
    .from("schedules")
    .insert([
      {
        name: name,
        data: data,
        user_id: user.id
      }
    ]);
}

async function loadSchedules() {
  const user = await getUser();

  const { data } = await supabaseClient
    .from("schedules")
    .select("*")
    .eq("user_id", user.id);

  return data;
}

async function deleteSchedule(id) {
  await supabaseClient
    .from("schedules")
    .delete()
    .eq("id", id);
}
