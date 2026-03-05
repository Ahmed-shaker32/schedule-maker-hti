function renderSchedules(schedules) {
  const container = document.getElementById("resultsContent");

  container.innerHTML = "";

  schedules.forEach(schedule => {
    const div = document.createElement("div");
    div.innerText = schedule.name;
    container.appendChild(div);
  });
}
