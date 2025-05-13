document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    const variant = option.querySelector(".variant");
    option.classList.remove("active");

    if (variant) {
      if (option.getAttribute("data-units") === "2") {
        variant.style.display = "block";
        option.classList.add("active");
      } else {
        variant.style.display = "none";
        option.classList.remove("active");
      }
    }
  });
  const radios = document.querySelectorAll('input[type="radio"]');
  const totalPrice = document.getElementById("total-price");

  const prices = {
    1: "$10.00 USD",
    2: "$18.00 USD",
    3: "$24.00 USD",
  };
  // traverse radio buttons
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      options.forEach((option, optIndex) => {
        option.classList.remove("active");

        // Hide all dropdowns
        const variant = option.querySelector(".variant");
        if (variant) variant.style.display = "none";
      });

      const selectedOption = options[index];
      selectedOption.classList.add("active");

      // Show dropdowns only for selected card
      const selectedVariant = selectedOption.querySelector(".variant");
      if (selectedVariant) selectedVariant.style.display = "block";

      const selectedUnit = selectedOption.getAttribute("data-units");
      totalPrice.textContent = prices[selectedUnit];
    });
  });
});
