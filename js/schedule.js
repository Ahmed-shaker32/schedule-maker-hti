let generatedSchedules = [];

/* توليد الجداول */

function generateSchedules() {

  if (selectedCourses.length === 0) {

    alert("اختر مادة أولاً");

    return;

  }

  const schedules = findAllSchedules(selectedCourses);

  generatedSchedules = schedules;

  renderSchedules(schedules);

}

/* البحث عن كل الجداول الممكنة */

function findAllSchedules(courses) {

  let results = [];

  function backtrack(index, current) {

    if (index === courses.length) {

      results.push(JSON.parse(JSON.stringify(current)));

      return;

    }

    const course = courses[index];

    course.groups.forEach(group => {

      if (isGroupCompatible(current, group)) {

        current.push(group);

        backtrack(index + 1, current);

        current.pop();

      }

    });

  }

  backtrack(0, []);

  return results;

}

/* التحقق من التعارض */

function isGroupCompatible(schedule, group) {

  for (let g of schedule) {

    for (let t1 of g.times) {

      for (let t2 of group.times) {

        if (
          t1.day === t2.day &&
          t1.period === t2.period
        ) {

          return false;

        }

      }

    }

  }

  return true;

}

/* عرض الجداول */

function renderSchedules(schedules) {

  const container = document.getElementById("resultsContent");

  container.innerHTML = "";

  schedules.forEach((schedule, index) => {

    const div = document.createElement("div");

    div.className = "schedule-item";

    div.innerHTML = `
      <h3>جدول ${index + 1}</h3>

      <button onclick="saveSchedulePrompt(${index})">
      حفظ الجدول
      </button>
    `;

    container.appendChild(div);

  });

}

/* حفظ جدول */

function saveSchedulePrompt(index) {

  const name = prompt("اكتب اسم الجدول");

  if (!name) return;

  saveSchedule(name, generatedSchedules[index]);

}
