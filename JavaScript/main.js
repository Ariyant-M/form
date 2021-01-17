var wid = $(".form-group").width();
var len = $("#leftSide").outerHeight();
console.log(`height ${len} , width ${wid}`);
$("#rightSide").css("height", len + 30);

var validate = (function () {
  //initialize all input variable in jQuery

  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var email = $("#email");
  var pwd = $("#pass");
  var conPwd = $("#conpass");
  var gender = $("#gender");
  var phone1 = $("#phone1");
  var phone2 = $("#phone2");
  var address = $("#address");
  var city = $("#city");
  var countryList = $("country");
  var stateList = $("state");
  var zip = $("zip");
  var subscribe = $("#subscribe");

  $("#fNameError").hide();
  $("#lNameError").hide();
  $("#emailError").hide();
  $("#passError").hide();
  $("#conpassError").hide();
  $("#genderError").hide();
  $("#phone1Error").hide();
  $("#phone2Error").hide();
  $("#addressError").hide();
  $("#cityError").hide();
  $("#zipError").hide();
  $("#countryError").hide();
  $("#stateError").hide();

  //initilize all the error value to false
  var errorFName = false;
  var errroLName = false;
  var errroEmail = false;
  var errorPwd = false;
  var erroeConPwd = false;
  var errorGender = false;
  var errorPhone1 = false;
  var errorPhone2 = false;
  var errorAddress = false;
  var errorCity = false;
  var errorZip = false;
  var errorCountry = false;
  var errorState = false;

  firstName.focusout(function () {
    var pattern = /^[a-zA-Z]*$/;
    if (checkNull(firstName.val(), errorFName)) {
      nullError($("#fNameError"));
    } else if (pattern.test(firstName.val())) {
      hideError($("#fNameError"));
    } else {
      unmatchError($("#fNameError"));
    }
  });

  lastName.focusout(function () {
    var pattern = /^[a-zA-Z]*$/;
    if (checkNull(lastName.val(), errroLName)) {
      nullError($("#lNameError"));
    } else if (pattern.test(lastName.val())) {
      hideError($("#lNameError"));
    } else {
      unmatchError($("#lNameError"));
    }
  });

  email.focusout(function () {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (checkNull(email.val(), errroEmail)) {
      nullError($("#emailError"));
    } else if (pattern.test(email.val())) {
      hideError($("#emailError"));
    } else {
      unmatchError($("#emailError"));
    }
  });

  pwd.focusout(function () {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/;
    if (checkNull(pwd.val(), errorPwd)) {
      nullError($("#passError"));
    } else if (pattern.test(pwd.val())) {
      hideError($("#passError"));
    } else {
      unmatchError($("#passError"));
    }
  });

  conPwd.focusout(function () {
    if (checkNull(conPwd.val(), erroeConPwd)) {
      nullError($("#conpassError"));
    } else if (conPwd.val() == pwd.val()) {
      $("conpassError");
    } else {
      $("#conpassError").show;
      $("#conpassError").html("password doesn't match");
    }
  });

  function checkNull(item, errorStatus) {
    if (item.length == 0) {
      errorStatus = true;
      return true;
    } else {
      errorStatus = false;
      return false;
    }
  }
  function nullError(e) {
    e.html("Field required...");
    e.show();
  }
  function hideError(e) {
    e.hide();
  }
  function unmatchError(e) {
    e.html("invalid input...");
    e.show();
  }
})();
