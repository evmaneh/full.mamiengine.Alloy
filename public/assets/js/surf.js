/* -----------------------------------------------
/* MIT license: http://opensource.org/licenses/MIT
/* How to use? : Check the documentation. Button ID attributes are used for the script below.
/* v2.0.0
/* ----------------------------------------------- */
$ = (e) => document.getElementById(e) || [];

$("tacogithub").href = "https://github.com/evmaneh/mamiengine.Alloy";

// Function to add "https://" if not present and check if it's a URL
function formatURL(url) {
  if (url.match(/^https?:\/\//i)) {
    return url; // It's already a URL
  } else {
    // It's not a URL, perform Google search
    return "https://www.google.com/search?q=" + encodeURIComponent(url);
  }
}

// Alloy Default
$("alloyframe").onclick = function () {
  var frame = document.getElementById("frame");
  var url = formatURL($("iurl").value); // Format the URL or perform Google search
  var det = document.domain;
  var domain = det.replace("www.", "").split(/[/?#]/)[0];
  const origin = btoa(url);
  frame.src = "https://" + domain + "/prefix/" + origin;
  frame.style["visibility"] = "visible";
  return false;
};

// Alloy Frame
$("alloydefault").onclick = function () {
  var frame = document.getElementById("frame");
  var url = formatURL($("iurl").value); // Format the URL or perform Google search
  var det = document.domain;
  var domain = det.replace("www.", "").split(/[/?#]/)[0];
  const origin = btoa(url);
  window.location.href = "https://" + domain + "/prefix/" + origin;
  return false;
};

window.onload = function () {
  $("iurl").focus();
};
