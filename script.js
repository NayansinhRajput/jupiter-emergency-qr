
/*
  Replace the example values with details you choose to make public.
  Use country code in phone numbers, e.g. +91XXXXXXXXXX.
  Do not publish unconfirmed medical information.
*/
const emergencyDetails = {
  ownerName: "Owner name will appear here",
  ownerPhone: "",

  emergencyName: "Emergency contact 1 name",
  emergencyPhone: "",

  emergencyName2: "Emergency contact 2 name",
  emergencyPhone2: "",

  bloodGroup: "To be confirmed"
};

function setText(id, value, fallback) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent =
      value && value.trim() ? value : fallback;
  }
}

function setPhoneLink(id, phone, fallbackText) {
  const element = document.getElementById(id);
  if (!element) return;

  const cleanedPhone = (phone || "").replace(/[^\d+]/g, "");

  if (cleanedPhone) {
    element.href = `tel:${cleanedPhone}`;
  } else {
    element.href = "#";
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert(fallbackText);
    });
  }
}

setText("owner-name", emergencyDetails.ownerName, "Owner details not added");
setText("emergency-name", emergencyDetails.emergencyName, "Emergency contact 1 not added");
setText("emergency-name-2", emergencyDetails.emergencyName2, "Emergency contact 2 not added");
setText("blood-group", emergencyDetails.bloodGroup, "Not provided");

setPhoneLink("owner-call", emergencyDetails.ownerPhone, "Owner phone number has not been added yet.");
setPhoneLink("emergency-call", emergencyDetails.emergencyPhone, "Emergency contact 1 phone number has not been added yet.");
setPhoneLink("emergency-call-2", emergencyDetails.emergencyPhone2, "Emergency contact 2 phone number has not been added yet.");

const locationButton = document.getElementById("location-button");

if (locationButton) {
  // Opens Google Maps; it does not automatically track anyone.
  locationButton.href = "https://maps.google.com/";
}
