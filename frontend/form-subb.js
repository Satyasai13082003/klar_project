function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}


/* input element */

function handleChange(select) {
      const otherInput = document.getElementById("otherInput");

      if (select.value === "others") {
        otherInput.style.display = "block";
      } else {
        otherInput.style.display = "none";
      }
    }


    function handleBudget(select) {
      const otherInput = document.getElementById("otherBudget");

      if (select.value === "othersBudget") {
        otherInput.style.display = "block";
      } else {
        otherInput.style.display = "none";
      }
    }





function openCase() {
    document.getElementById("caseModal").style.display = "block";
}
function closeCase() {
    document.getElementById("caseModal").style.display = "none";
}






function openXP(){
    document.getElementById("xpModal").style.display="flex";
}
function closeXP(){
    document.getElementById("xpModal").style.display="none";
}
function setXP(el){
    document.getElementById("xpMain").src = el.src;
}






document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  
  const form = document.getElementById("myForm");

  if (!form) {
    console.error("Form not found");
    return;
  }

  console.log("Form found");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("FORM SUBMITTED");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Sending data:", data);

    try {
      const response = await fetch("https://klar-backend.onrender.com/submit-journey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Inquiry submitted successfully!");
        window.location.href = "/index.html";

      } else {
        alert(result.message || "Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Frontend Error:", error);
      alert("Server error. Try again later.");
    }
  });
});
