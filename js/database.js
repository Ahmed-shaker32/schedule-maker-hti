// حفظ الجروبات

async function saveGroupsToDB(name,data){

    const { error } = await supabaseClient
    .from('groups')
    .insert([
        {
            name:name,
            data:data,
            user_id: currentUser.id
        }
    ])

    if(error){
        console.error(error)
        alert("خطأ في الحفظ")
    }

}

// تحميل الجروبات

async function loadGroupsFromDB(){

    const { data,error } = await supabaseClient
    .from('groups')
    .select('*')
    .eq('user_id',currentUser.id)
    .order('created_at',{ascending:false})

    if(error){
        console.error(error)
        return []
    }

    return data
}

// حذف جروب

async function deleteGroupFromDB(id){

    const { error } = await supabaseClient
    .from('groups')
    .delete()
    .eq('id',id)

    if(error){
        console.error(error)
    }

}

// حفظ جدول

async function saveScheduleToDB(name,data){

    const { error } = await supabaseClient
    .from('schedules')
    .insert([
        {
            name:name,
            data:data,
            user_id: currentUser.id
        }
    ])

    if(error){
        console.error(error)
    }

}

// تحميل الجداول

async function loadSchedulesFromDB(){

    const { data,error } = await supabaseClient
    .from('schedules')
    .select('*')
    .eq('user_id',currentUser.id)
    .order('created_at',{ascending:false})

    if(error){
        console.error(error)
        return []
    }

    return data
}

//حذف الجداول
async function deleteScheduleFromDB(id) {

  await supabaseClient
    .from("schedules")
    .delete()
    .eq("id", id);
}
