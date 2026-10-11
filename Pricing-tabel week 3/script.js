

const buttons = document.querySelectorAll(".choose-plan");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelectorAll("article").forEach(function(card) {
            card.classList.remove("selected");
        });

        button.closest("article").classList.add("selected");
    });
});
