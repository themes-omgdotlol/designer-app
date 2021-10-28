var bodyBG = document.getElementById("bg-body");
var mainBG = document.getElementById("main-bg");
var mainRadius = document.getElementById("main-border-radius");
var pictureRadius = document.getElementById("picture-border-radius");
var font = document.getElementById("font");
var titleText = document.getElementById("title-text-color");
var detailsText = document.getElementById("details-text-color");
var detailsIcon = document.getElementById("details-icon-color");
var pronounsText = document.getElementById("pronouns-text-color");
var bioText = document.getElementById("bio-text-color");
var linkText = document.getElementById("link-text-color");
var linkHover = document.getElementById("link-hover-text-color");
var linkIcon = document.getElementById("link-icon-color");
var LinkIconHover = document.getElementById("link-icon-hover-color");
var verificationColor = document.getElementById("verification-badge-color");
var verificationHover = document.getElementById(
  "verification-badge-hover-color"
);
var textAlign = document.getElementById("bio-text-align");
var footerState = document.getElementById("footer-state");

function generate() {
  var result = document.getElementById("result");

  // If input is empty
  if (
    bodyBG.value == "" ||
    mainBG.value == "" ||
    mainRadius.value == "" ||
    pictureRadius.value == "" ||
    font.value == "" ||
    titleText.value == "" ||
    detailsText.value == "" ||
    detailsIcon.value == "" ||
    pronounsText.value == "" ||
    bioText.value == "" ||
    linkText.value == "" ||
    linkHover.value == "" ||
    linkIcon.value == "" ||
    LinkIconHover.value == "" ||
    verificationColor.value == "" ||
    verificationHover.value == "" ||
    textAlign.value == "" ||
    footerState.value == ""
  ) {
    document.getElementById("error").innerText =
      "You need to fill in every input";
    return;
  }

  // else
  result.innerHTML =
    "/*\nCopyright (c) 2021 Matse Van Horebeek. All rights reserved.\n\nAuthor: Matse Van Horebeek (@matsevh)\nDesigner Version: Beta\nDescription: Create your own custom profile design with the designer tool\n*/\n\n:root {\n  --background-color: " +
    bodyBG.value +
    ";\n  --main-background-color: " +
    mainBG.value +
    ";\n  --main-border-radius: " +
    mainRadius.value +
    "%;\n  --picture-border-radius: " +
    pictureRadius.value +
    "%;\n  --font: " +
    font.value +
    ";\n  --title-color: " +
    titleText.value +
    ";\n  --details-color: " +
    detailsText.value +
    ";\n  --details-icon-color: " +
    pronounsText.value +
    ";\n  --pronouns-color: " +
    bioText.value +
    ";\n  --bio-color: " +
    bioText.value +
    ";\n  --link-color: " +
    linkIcon.value +
    ";\n  --link-hover-color: " +
    linkHover.value +
    ";\n  --verification-badge-color: " +
    verificationColor.value +
    ";\n  --verification-badge-hover-color: " +
    verificationHover.value +
    ";\n  --link-icon-color: " +
    linkIcon.value +
    ";\n  --link-icon-hover-color: " +
    LinkIconHover.value +
    ";\n\n  --text-align: " +
    textAlign.value +
    ";\n  --footer-state: " +
    footerState.value +
    ";\n}\n\nbody {\n  background: var(--background-color);\n}\n\nmain {\n  background-color: var(--main-background-color);\n  border-radius: var(--main-border-radius);\n}\n\n#profile-picture {\n  border-radius: var(--picture-border-radius);\n}\n\n#name {\n  color: var(--title-color);\n}\n\n.fa-badge-check {\n  color: var(--verification-badge-color) !important;\n}\n\n.fa-badge-check:hover {\n  color: var(--verification-badge-hover-color) !important;\n}\n\n#pronouns {\n  color: var(--pronouns-color);\n}\n\n#details > .fas {\n  color: var(--details-color);\n}\n\n#details > .fas {\n  color: var(--details-icon-color);\n}\n\n#bio {\n  text-align: var(--text-align);\n  color: var(--bio-color);\n}\n\na {\n  color: var(--link-color) !important;\n}\n\na:hover {\n  color: var(--link-hover-color) !important;\n  text-decoration: underline;\n  text-decoration-color: var(--link-hover-color);\n}\n\n.fa-li {\n  color: var(--link-icon-color) !important;\n}\n\na:hover > .fa-li {\n  color: var(--link-icon-hover-color) !important;\n}\n\n#footer {\n  visibility: var(--footer-state);\n}\n";

  result.classList.remove("hidden");
}

function reload() {
  document
    .getElementById("preview")
    .setAttribute(
      "src",
      "https://preview.profile.themes.omg.lol/index.php?bgBody=" +
        bodyBG.value +
        "&bgmain=" +
        mainBG.value +
        "&mainRadius=" +
        mainRadius.value +
        "&pictureRadius=" +
        pictureRadius.value +
        "&font=" +
        font.value +
        "&titleColor=" +
        titleText.value +
        "&detailsColor=" +
        detailsText.value +
        "&detailsIcon=" +
        pronounsText.value +
        "&pronounsColor=" +
        bioText.value +
        "&bioColor=" +
        bioText.value +
        "&linkColor=" +
        linkIcon.value +
        "&linkHover=" +
        linkHover.value +
        "&verifyBadge=" +
        verificationColor.value +
        "&verifyHover=" +
        verificationHover.value +
        "&linkIcon=" +
        linkIcon.value +
        "&linkIconHover=" +
        LinkIconHover.value +
        "&textAlign=" +
        textAlign.value +
        "&footerState=" +
        footerState.value +
        ""
    );
}
