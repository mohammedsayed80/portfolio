let filter = document.querySelectorAll(".filter li button");
let items = document.querySelectorAll(".item-portfolio");

filter.forEach((btn) => {
    btn.addEventListener("click", () => {
        // عشان اشيل الاكتيف من علي الزرار
        filter.forEach(el => el.classList.remove("active"));
        btn.classList.add("active");
        // عشان افلتر العناصر
        let filterValue = btn.getAttribute("data-filter");
        items.forEach((item) => {
            if (filterValue === "all" || item.classList.contains(filterValue)) {
                item.style.display="block";
            } else {
                item.style.display="none";
            }
        });
    });
});