const departTripTicket = {
  name: "James",
  from: "Pittsburgh, PA",
  to: "Augsburg, Germany",
  businessClass: false,
  upgrade() {
    if (departTripTicket.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      departTripTicket.businessClass = true;
    }
  }
}

const returnTripTicket = {
  name: "James",
  from: "Augsburg, Germany",
  to: "Pittsburgh, PA",
  businessClass: true,
  upgrade() {
    if (returnTripTicket.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      returnTripTicket.businessClass = true;
    }
  }
}

departTripTicket.upgrade();
returnTripTicket.upgrade();