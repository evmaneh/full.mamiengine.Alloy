// Check if dark mode and super dark mode are stored in cookies
const isDarkMode = getCookie("darkMode");
const isSuperDarkMode = getCookie("superDarkMode");

if (isDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

if (isSuperDarkMode === "true") {
  document.body.classList.add("super-dark-mode");
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save dark mode preference to cookies
  const isDarkModeEnabled = body.classList.contains("dark-mode");
  setCookie("darkMode", isDarkModeEnabled.toString(), 365);
}

function toggleSuperDarkMode() {
  const body = document.body;
  body.classList.toggle("super-dark-mode");

  // Save super dark mode preference to cookies
  const isSuperDarkModeEnabled = body.classList.contains("super-dark-mode");
  setCookie("superDarkMode", isSuperDarkModeEnabled.toString(), 365);
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
