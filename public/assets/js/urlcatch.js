function formatURL(url) {
  if (url.match(/^https?:\/\//i)) {
    return url; // It's already a URL
  } else {
    // It's not a URL, add "https://" before it
    return "https://" + url;
  }
}

// Alloy Default
document.getElementById("alloyframe").onclick = function () {
  var frame = document.getElementById("frame");
  var inputUrl = document.getElementById("iurl").value;
  var url = formatURL(inputUrl); // Format the URL or add "https://"
  var det = document.domain;
  var domain = det.replace("www.", "").split(/[/?#]/)[0];
  const origin = btoa(url);
  frame.src = "https://" + domain + "/prefix/" + origin;
  frame.style["visibility"] = "visible";
  return false;
};

// Alloy Frame
document.getElementById("alloydefault").onclick = function () {
  var inputUrl = document.getElementById("iurl").value;
  var url = formatURL(inputUrl); // Format the URL or add "https://"
  var det = document.domain;
  var domain = det.replace("www.", "").split(/[/?#]/)[0];
  const origin = btoa(url);
  window.location.href = "https://" + domain + "/prefix/" + origin;
  return false;
};

window.onload = function () {
  document.getElementById("iurl").focus();
};
