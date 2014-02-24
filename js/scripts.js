var Package = {
  shippingCost: function() {
    if(this.destinationZipCode === 001 
      || (this.destinationZipCode >= 96700 && this.destinationZipCode <= 96899) 
      || (this.destinationZipCode >= 99500 && this.destinationZipCode <= 99999)) {
    return 20
    } else {
    return 10
    }
  },

  weightCost: function() {
    if(this.weight < 1){
      return this.shippingCost();
  } else if(this.weight >= 1 && this.weight <= 50){
      return parseInt(this.shippingCost() + (this.weight * 2.2));
  } else {
    return parseInt(this.shippingCost() + (this.weight * 8.8 + 200));
  } 
  },

  expressCost: function() {
    if(this.express){
      return parseInt(this.weightCost() + 150);
    } else {
      return parseInt(this.weightCost());
    }
  },

  insuranceCost: function() {
    if(this.insurance) {
      return parseInt(this.expressCost() + 50)
    } else {
      return parseInt(this.expressCost())
    }
  }
};

$(document).ready(function () {
  $("form#shipping").submit(function(event) {
    event.preventDefault();

    var newPackage = Object.create(Package);
    newPackage.originZIP = parseInt($("input#start").val()); // creates property "originZIP" of object newPackage;
    newPackage.destinationZIP = parseInt($("input#final").val());
    newPackage.weight = parseInt($("input#weight").val());
    newPackage.express = $("input#shipping").val;
    newPackage.insurance = $('input#insurance').val();;

    $("span#price").append(newPackage.insuranceCost());
      this.reset();
    })
});

//     if(newTriangle.isTriangleValid() === false) {
//       alert("Invalid triangle.")
//     } else if(newTriangle.triangleType() === "Equilateral") {
//       $("ul#equilateral").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
//     } else if(newTriangle.triangleType() === "Isosceles") {
//       $("ul#isosceles").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
//     } else { $("ul#scalene").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
//     } 

//       this.reset();
//   })
// });
