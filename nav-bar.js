const toggleNavSideValue = "main-margin-left";
const idMain = "main-content";
const idNavSide = "navSide";
const idBtnHideSideBarIcon = "btn-hide-side-bar-icon";

const doubleLeftClassI = "bi bi-chevron-double-left";
const doubleRightClassI = "bi bi-chevron-double-right";
const hideSideNavClass = "hidden-navSide";

function toggleNavSide() {
    var main = document.getElementById(idMain);
    var navSide = document.getElementById(idNavSide);
    var btnHideNavSideIcon = document.getElementById(idBtnHideSideBarIcon);

    if (main.classList.contains(toggleNavSideValue)) {
        // disable menu
        main.classList.remove(toggleNavSideValue);
        navSide.classList.add(hideSideNavClass);
        
        btnHideNavSideIcon.className = doubleRightClassI;
    }
    else {
        // active menu
        main.classList.add(toggleNavSideValue);
        navSide.classList.remove(hideSideNavClass);

        btnHideNavSideIcon.className = doubleLeftClassI;
    }
}