$(document).ready(function() {
    // Hide the popup initially
    $('#popup').hide();
  
    // When the user clicks on the Add to Cart button
    $('#add-to-cart').click(function() {
      // Add the product to the cart
      // ...
  
      // Display the popup
      $('#popup').fadeIn(5000,'slow');
    });
  
    // When the user clicks on the Close button
    $('#close-popup').click(function() {
      // Hide the popup
      $('#popup').fadeOut(2000,'slow');
    });
  });