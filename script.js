document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const message = document.querySelector(".message");
    const openBtn = document.querySelector(".open-btn");
    const envelope = document.querySelector(".envelope");
    const backBtn = document.querySelector(".back-btn");
  
    // Flip the card to the back
    openBtn.addEventListener("click", () => {
      card.style.transform = "rotateY(180deg)";
    });
  
    // Show the message when the envelope is clicked
    envelope.addEventListener("click", () => {
      card.style.display = "none"; // Hide the card
      message.classList.remove("hidden");
    });
  
    // Return to the initial state
    backBtn.addEventListener("click", () => {
      message.classList.add("hidden");
      card.style.display = "block";
      card.style.transform = "rotateY(0deg)";
    });
  });
  