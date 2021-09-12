/* ===== EXPANDER MENU ===== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}

showMenu('header-toggle', 'nav-menu')

/* ===== ACTIVE AND REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navLink.forEach(e => e.classList.remove('active'))
  this.classList.add('active')
}

navLink.forEach(e => e.addEventListener('click', linkAction))