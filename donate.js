let currentStep = 1;
const totalSteps = 5;

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentStep < totalSteps) {
        document.getElementById(`step${currentStep}`).classList.remove("active");
        document.querySelectorAll(".step")[currentStep - 1].classList.remove("active");
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add("active");
        document.querySelectorAll(".step")[currentStep - 1].classList.add("active");
    }
    updateButtons();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove("active");
        document.querySelectorAll(".step")[currentStep - 1].classList.remove("active");
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add("active");
        document.querySelectorAll(".step")[currentStep - 1].classList.add("active");
    }
    updateButtons();
});

function updateButtons() {
    document.getElementById("prevBtn").classList.toggle("hidden", currentStep === 1);
    document.getElementById("nextBtn").textContent = currentStep === totalSteps ? "Submit" : "Continue";
}
