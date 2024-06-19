document.addEventListener("DOMContentLoaded", function () {
    var currentPage = getCurrentPage(); // Implementa la lógica para obtener la página actual

    var navItems = document.querySelectorAll(".nav-item");
    console.log(navItems)
    navItems.forEach(function (navItem) {
        var pageName = navItem.getAttribute("data-page");
        console.log(pageName)
        console.log(currentPage);

        if (pageName === currentPage) {
            navItem.classList.add("active");
            console.log("simón si hay")
        }
    });
});

function getCurrentPage() {
    var path = window.location.pathname;
    var pageName = path.split("/").pop().split(".")[0];
    return pageName;

}
