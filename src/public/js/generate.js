var bodyBG = document.getElementById("bgColor");
var mainBG = document.getElementById("mainColor");
var mainRadius = document.getElementById("mainBorderRadius");
var pictureRadius = document.getElementById("pictureBorderRadius");
var font = document.getElementById("font");
var titleText = document.getElementById("titleTextColor");
var detailsText = document.getElementById("detailsTextColor");
var detailsIcon = document.getElementById("detailsIconColor");
var pronounsText = document.getElementById("pronounsTextColor");
var bioText = document.getElementById("bioTextColor");
var linkText = document.getElementById("linkTextColor");
var linkHover = document.getElementById("linkHoverTextColor");
var linkIcon = document.getElementById("linkIconColor");
var LinkIconHover = document.getElementById("linkIconHoverColor");
var verificationColor = document.getElementById("verificationBadgeColor");
var verificationHover = document.getElementById("verificationBadgeHoverColor");
var textAlign = document.getElementById("bioTextAlign");
var footerState = document.getElementById("footerState");

function generate() {
  console.log("Past");
  var themeName = document.getElementById("themeName");
  var bodyBG = document.getElementById("bgColor");
  var mainBG = document.getElementById("mainColor");
  var mainRadius = document.getElementById("mainBorderRadius");
  var pictureRadius = document.getElementById("pictureBorderRadius");
  var font = document.getElementById("font");
  var titleText = document.getElementById("titleTextColor");
  var detailsText = document.getElementById("detailsTextColor");
  var detailsIcon = document.getElementById("detailsIconColor");
  var pronounsText = document.getElementById("pronounsTextColor");
  var bioText = document.getElementById("bioTextColor");
  var linkText = document.getElementById("linkTextColor");
  var linkHover = document.getElementById("linkHoverTextColor");
  var linkIcon = document.getElementById("linkIconColor");
  var LinkIconHover = document.getElementById("linkIconHoverColor");
  var verificationColor = document.getElementById("verificationBadgeColor");
  var verificationHover = document.getElementById(
    "verificationBadgeHoverColor"
  );
  var textAlign = document.getElementById("bioTextAlign");
  var footerState = document.getElementById("footerState");

  console.log(bodyBG.value);

  var blob = new Blob(
    [
      "/*\nCopyright (c) 2021 Profiler. All rights reserved.\n\nAuthor: Profiler (@profiler_app)\nDesigner Version: Beta\nDescription: Create your own custom profile design Profiler\n\nTheme: " +
        themeName.value +
        "\n*/\n\n:root {\n  --background-color: " +
        bodyBG.value.substring(1) +
        ";\n  --main-background-color: " +
        mainBG.value.substring(1) +
        ";\n  --main-border-radius: " +
        mainRadius.value +
        "px;\n  --picture-border-radius: " +
        pictureRadius.value +
        "%;\n  --font: " +
        font.value +
        ";\n  --title-color: " +
        titleText.value.substring(1) +
        ";\n  --details-color: " +
        detailsText.value.substring(1) +
        ";\n  --details-icon-color: " +
        pronounsText.value.substring(1) +
        ";\n  --pronouns-color: " +
        bioText.value.substring(1) +
        ";\n  --bio-color: " +
        bioText.value.substring(1) +
        ";\n  --link-color: " +
        linkIcon.value.substring(1) +
        ";\n  --link-hover-color: " +
        linkHover.value.substring(1) +
        ";\n  --verification-badge-color: " +
        verificationColor.value.substring(1) +
        ";\n  --verification-badge-hover-color: " +
        verificationHover.value.substring(1) +
        ";\n  --link-icon-color: " +
        linkIcon.value.substring(1) +
        ";\n  --link-icon-hover-color: " +
        LinkIconHover.value.substring(1) +
        ";\n\n  --text-align: " +
        textAlign.value +
        ";\n  --footer-state: " +
        footerState.value +
        ";\n}\n\nbody {\n  background: var(--background-color);\n}\n\nmain {\n  background-color: var(--main-background-color);\n  border-radius: var(--main-border-radius);\n}\n\n#profile-picture {\n  border-radius: var(--picture-border-radius);\n}\n\n#name {\n  color: var(--title-color);\n}\n\n.fa-badge-check {\n  color: var(--verification-badge-color) !important;\n}\n\n.fa-badge-check:hover {\n  color: var(--verification-badge-hover-color) !important;\n}\n\n#pronouns {\n  color: var(--pronouns-color);\n}\n\n#details > .fas {\n  color: var(--details-color);\n}\n\n#details > .fas {\n  color: var(--details-icon-color);\n}\n\n#bio {\n  text-align: var(--text-align);\n  color: var(--bio-color);\n}\n\na {\n  color: var(--link-color) !important;\n}\n\na:hover {\n  color: var(--link-hover-color) !important;\n  text-decoration: underline;\n  text-decoration-color: var(--link-hover-color);\n}\n\n.fa-li {\n  color: var(--link-icon-color) !important;\n}\n\na:hover > .fa-li {\n  color: var(--link-icon-hover-color) !important;\n}\n\n#footer {\n  visibility: var(--footer-state);\n}\n",
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  if (themeName.value == "") {
    var name = "theme";
  } else {
    var name = themeName.value;
  }
  saveAs(blob, name + ".css");
}

function saveConfig() {
  var themeName = document.getElementById("themeName");
  var bodyBG = document.getElementById("bgColor");
  var mainBG = document.getElementById("mainColor");
  var mainRadius = document.getElementById("mainBorderRadius");
  var pictureRadius = document.getElementById("pictureBorderRadius");
  var font = document.getElementById("font");
  var titleText = document.getElementById("titleTextColor");
  var detailsText = document.getElementById("detailsTextColor");
  var detailsIcon = document.getElementById("detailsIconColor");
  var pronounsText = document.getElementById("pronounsTextColor");
  var bioText = document.getElementById("bioTextColor");
  var linkText = document.getElementById("linkTextColor");
  var linkHover = document.getElementById("linkHoverTextColor");
  var linkIcon = document.getElementById("linkIconColor");
  var LinkIconHover = document.getElementById("linkIconHoverColor");
  var verificationColor = document.getElementById("verificationBadgeColor");
  var verificationHover = document.getElementById(
    "verificationBadgeHoverColor"
  );
  var textAlign = document.getElementById("bioTextAlign");
  var footerState = document.getElementById("footerState");

  console.log(bodyBG.value);

  var blob = new Blob(
    [
      '{\n"builder": "Profiler"\n"version": "0.0.1"\n\n"themeName": "' +
        themeName.value.substring(1) +
        '"\n"bodyBG": "' +
        bodyBG.value.substring(1) +
        '"\n"mainBG"' +
        mainBG.value.substring(1) +
        '"\n"mainRadius"' +
        mainRadius.value +
        '"\n"pictureRadius"' +
        pictureRadius.value +
        '"\n"font"' +
        font.value +
        '"\n"titleText"' +
        titleText.value.substring(1) +
        '"\n"detailsText"' +
        detailsText.value.substring(1) +
        '"\n"detailsIcon"' +
        detailsIcon.value.substring(1) +
        '"\n"pronounsText"' +
        pronounsText.value.substring(1) +
        '"\n"bioText"' +
        bioText.value.substring(1) +
        '"\n"linkIcon"' +
        linkIcon.value.substring(1) +
        '"\n"linkHover"' +
        linkHover.value.substring(1) +
        '"\n"verificationColor"' +
        verificationColor.value.substring(1) +
        '"\n"verificationHover"' +
        verificationHover.value.substring(1) +
        '"\n"linkIcon"' +
        linkIcon.value.substring(1) +
        '"\n"LinkIconHover"' +
        LinkIconHover.value.substring(1) +
        '"\n"textAlign"' +
        textAlign.value +
        '"\n"footerState"' +
        footerState.value +
        '"\n}',
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, "theme.config.json");
}

function reload() {
  var bodyBG = document.getElementById("bgColor");
  var mainBG = document.getElementById("mainColor");
  var mainRadius = document.getElementById("mainBorderRadius");
  var pictureRadius = document.getElementById("pictureBorderRadius");
  var font = document.getElementById("font");
  var titleText = document.getElementById("titleTextColor");
  var detailsText = document.getElementById("detailsTextColor");
  var detailsIcon = document.getElementById("detailsIconColor");
  var pronounsText = document.getElementById("pronounsTextColor");
  var bioText = document.getElementById("bioTextColor");
  var linkText = document.getElementById("linkTextColor");
  var linkHover = document.getElementById("linkHoverTextColor");
  var linkIcon = document.getElementById("linkIconColor");
  var LinkIconHover = document.getElementById("linkIconHoverColor");
  var verificationColor = document.getElementById("verificationBadgeColor");
  var verificationHover = document.getElementById(
    "verificationBadgeHoverColor"
  );
  var textAlign = document.getElementById("bioTextAlign");
  var footerState = document.getElementById("footerState");

  var link =
    "https://preview.profile.themes.omg.lol/index.php?bgBody=" +
    bodyBG.value.substring(1) +
    "&bgmain=" +
    mainBG.value.substring(1) +
    "&mainRadius=" +
    mainRadius.value.substring(1) +
    "&pictureRadius=" +
    pictureRadius.value +
    "&font=" +
    font.value +
    "&titleColor=" +
    titleText.value.substring(1) +
    "&detailsColor=" +
    detailsText.value.substring(1) +
    "&detailsIcon=" +
    pronounsText.value.substring(1) +
    "&pronounsColor=" +
    bioText.value.substring(1) +
    "&bioColor=" +
    bioText.value.substring(1) +
    "&linkColor=" +
    linkIcon.value.substring(1) +
    "&linkHover=" +
    linkHover.value.substring(1) +
    "&verifyBadge=" +
    verificationColor.value.substring(1) +
    "&verifyHover=" +
    verificationHover.value.substring(1) +
    "&linkIcon=" +
    linkIcon.value.substring(1) +
    "&linkIconHover=" +
    LinkIconHover.value.substring(1) +
    "&textAlign=" +
    textAlign.value +
    "&footerState=" +
    footerState.value +
    "";

  console.log(link);
  document.getElementById("preview").setAttribute("src", link);
}
