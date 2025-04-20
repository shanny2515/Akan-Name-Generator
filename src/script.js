const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document.getElementById("myform").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("dayOfBirth").value);
  const month = parseInt(document.getElementById("birthMonth").value);
  const year = parseInt(document.getElementById("birthYear").value);
  const gender = document.getElementById("gender").value;

  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day.");
    return false;
  }
  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month.");
    return false;
  }
  if (isNaN(year)) {
    alert("Please enter a valid year.");
    return false;
  }
  if (gender === "") {
    alert("Please choose a gender.");
    return false;
  }
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  // Custom formula
  const d = Math.floor(((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);
  const dayIndex = (d + 7) % 7; // To ensure it's positive


  const akanName = gender === "female" ? akanFemaleNames[dayIndex] : akanMaleNames[dayIndex];

  const ghanaianName = document.getElementById("ghanaianName");
  ghanaianName.textContent = `According to Akan tradition, being born on a  ${daysOfTheWeek[dayIndex]} bestows upon you the name ${akanName}.`;
});
