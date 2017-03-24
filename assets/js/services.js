var personalNo = (function getPersonalNo() {
  return "123456";
})();

var backendlessSettings = {
  "async": true,
  //"crossDomain": true,
  //"url": "http://api.backendless.com/v1/data/Users?where=personal_no%3D123456",
  "url": "https://api.backendless.com/v1/data/budgets?where=personal_no%3D"+personalNo,
  "method": "GET",
  "headers": {
    "application-id": "45D1E21C-C95D-1B01-FF65-5B57CBBF3E00",
    "secret-key": "A7B6AAED-8FF7-0F40-FF55-C26D6E00DE00",
    //"cache-control": "no-cache"
  }
}

$.ajax(backendlessSettings).done(function (responseData) {
  var userData = responseData.data["0"];
  //console.log(userData);
  document.getElementById("welcomeLine").innerHTML += userData.name;
  document.getElementById("kevaValue").innerHTML = userData.keva_months ? userData.keva_months : "--";
  document.getElementById("educationValue").innerHTML = userData.education ? userData.education : "--";
  document.getElementById("tashValue").innerHTML = userData.tash ? userData.tash : "--";
  document.getElementById("commanderValue").innerHTML = userData.commander_gifts ? userData.commander_gifts : "--";
  document.getElementById("vacationsValue").innerHTML = userData.vacations ? userData.vacations : "--";
  document.getElementById("welfareValue").innerHTML = userData.welfare ? userData.welfare : "--";
});
