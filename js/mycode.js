function handleSubmitForm() {
  console.log("vnod");
  //   var document.getElemetById

  var freshBagsName = document.getElementById("freshBagsName").value;
  var freshBagsEmail = document.getElementById("freshBagsEmail").value;
  var freshBagsMobileNumber = document.getElementById(
    "freshBagsMobileNumber"
  ).value;
  var LocationName = document.getElementById("LocationName").value;
  var freshBagsRestaurant = document.getElementById(
    "freshBagsRestaurant"
  ).value;
  var freshBagsAddress = document.getElementById("freshBagsAddress").value;
  var freshBagsMessage = document.getElementById("freshBagsMessage").value;
  var returnF = true;
  if (!freshBagsName) {
    returnF = false;
    document.getElementById("freshBagsName").style.borderColor = "red";
  } else {
    document.getElementById("freshBagsName").style.borderColor = "#ced4da";
  }
  if (!freshBagsEmail) {
    returnF = false;
    document.getElementById("freshBagsEmail").style.borderColor = "red";
  } else {
    document.getElementById("freshBagsEmail").style.borderColor = "#ced4da";
  }
  if (!freshBagsMobileNumber) {
    returnF = false;
    document.getElementById("freshBagsMobileNumber").style.borderColor = "red";
  } else {
    document.getElementById("freshBagsMobileNumber").style.borderColor =
      "#ced4da";
  }
  if (!LocationName) {
    returnF = false;
    document.getElementById("LocationName").style.borderColor = "red";
  } else {
    document.getElementById("LocationName").style.borderColor = "#ced4da";
  }
  if (!freshBagsRestaurant) {
    returnF = false;
    document.getElementById("freshBagsRestaurant").style.borderColor = "red";
  } else {
    document.getElementById("freshBagsRestaurant").style.borderColor =
      "#ced4da";
  }
  //   if (!freshBagsName) {
  //     returnF = false;
  //     document.getElementById("freshBagsName").style.borderColor = "red";
  //   } else {
  //     document.getElementById("freshBagsName").style.borderColor = "#ced4da";
  //   }
  if (returnF) {
    var bodydata = {
      freshBagsName,
      freshBagsEmail,
      freshBagsMobileNumber,
      LocationName,
      freshBagsRestaurant,
      freshBagsAddress,
      freshBagsMessage,
    };
    mixpanel.track("form_data", bodydata);
    var element = document.getElementById("thankyou-get-to-you");
    element.classList.remove("d-none");
    document.getElementById("freshBagsName").value = "";
    document.getElementById("freshBagsEmail").value = "";
    document.getElementById("freshBagsMobileNumber").value = "";
    document.getElementById("LocationName").value = "";
    document.getElementById("freshBagsRestaurant").value = "";
    document.getElementById("freshBagsAddress").value = "";
    document.getElementById("freshBagsMessage").value = "";
    setTimeout(() => {
      var element = document.getElementById("thankyou-get-to-you");
      element.classList.add("d-none");
    }, 5000);
  }
  // freshBagsName
  // freshBagsEmail
  // freshBagsMobileNumber
  // LocationName
  // freshBagsRestaurant
  // freshBagsAddress
  // freshBagsMessage
}
