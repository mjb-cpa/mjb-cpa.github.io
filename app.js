function getYearsExperience() {
  const currentYear = new Date().getFullYear()
  const started = 2010

  return Math.round((currentYear - started) / 5) * 5
}

document.getElementById("yearsExperience").innerText = getYearsExperience()