const portfolio_card__content = document.querySelectorAll(".portfolio-card__content")
for (var i = 0; i < portfolio_card__content.length; i++) {
    portfolio_card__content[i].addEventListener("mouseover", function() {
        this.classList.add("active");
    });
    portfolio_card__content[i].addEventListener("mouseout", function() {
        this.classList.remove("active");
    });
}