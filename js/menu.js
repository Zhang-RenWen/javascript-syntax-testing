import { setDocumentTitle } from './navTitle.js'
import { menu } from './menuCatalog.js'

const focusedClassName = 'menu-item-focus'
const itemsDataAttribute = 'data-item-id'
const serverPath = 'modern-web-dev-notes'
let deepPathname = window.location.pathname
  .split('/')
  .filter(Boolean)
  .filter((o) => o.includes('.html'))[0]

const DOMaside = document.querySelector('aside nav')
const DOMmain = document.querySelector('main')

export function createMenu(submenu, el) {
  submenu.map((o) => {
    if (o.href) {
      const a = document.createElement('a')
      const li = document.createElement('li')
      li.setAttribute(itemsDataAttribute, o.id)
      a.href = o.href
      a.textContent = o.title
      li.appendChild(a)
      el.appendChild(li)
    }
    if (o.submenu || o.anchorMenu) {
      const ul = document.createElement('ul')
      if (o.submenu) {
        const div = document.createElement('div')
        div.textContent = o.title
        el.appendChild(div)
        el.appendChild(ul)
        createMenu(o.submenu, ul)
      }
      if (o.anchorMenu) {
        el.appendChild(ul)
        createMenu(o.anchorMenu, ul)
      }
    }
  })
}

export function aLinkClickHandler() {
  document.querySelectorAll('a').forEach((el) => {
    el.addEventListener('click', () => {
      resetFocusMenuItem()
    })
  })
}

export function resetFocusMenuItem() {
  const focusedItem = document.querySelector(`.${focusedClassName}`)
  if (focusedItem) {
    focusedItem.classList.remove(focusedClassName)
  }
  setTimeout(() => {
    setFocusMenuItem()
  }, 0)
}

export function getMenuItem() {
  deepPathname = deepPathname ? getPageID(deepPathname) : ''
  if (!deepPathname) {
    window.location.href = './index.html'
  }
  const hash = window.location.hash
  const idString = hash ? getPageID(hash) : deepPathname
  const menuItem = document.querySelector(`[${itemsDataAttribute}="${idString}"]`)
  return menuItem
}

export function setFocusMenuItem() {
  const menuItem = getMenuItem()
  if (menuItem) {
    menuItem.classList.add(focusedClassName)
    getMenuItemObject()
    setDocumentTitle()
  }
}

export function scrollToFocusEl() {
  const menuItem = getMenuItem()
  const aside = DOMaside
  const headerNavHeight = document.querySelector('header nav').getBoundingClientRect().height
  if (menuItem) {
    const menuItemHeight = menuItem.getBoundingClientRect().height
    aside.scrollTo(
      0,
      menuItem.getBoundingClientRect().bottom - menuItemHeight - headerNavHeight * 2
    )
  }
}

export function setMobileMenuToggleEvent() {
  const aside = DOMaside
  const main = DOMmain
  const toggleButton = document.querySelector('#toggle-menu')
  const div = document.createElement('div')
  div.setAttribute('id', 'aside-mask')
  main.appendChild(div)
  const asideMask = document.querySelector('#aside-mask')
  const classNameOpened = 'opened'
  const classNameMask = 'mask'
  const classListToggleButton = toggleButton.classList
  const classListAsideMask = asideMask.classList
  const classListAside = aside.classList

  function openAside() {
    classListAsideMask.add(classNameMask)
    classListToggleButton.add(classNameOpened)
    classListAside.add(classNameOpened)
  }
  function closeAside() {
    classListToggleButton.remove(classNameOpened)
    classListAside.remove(classNameOpened)
    classListAsideMask.remove(classNameMask)
  }

  if (toggleButton) {
    div.addEventListener('click', () => {
      if (classListToggleButton.contains(classNameOpened)) {
        closeAside()
      }
    })
    toggleButton.addEventListener('click', () => {
      if (classListToggleButton.contains(classNameOpened)) {
        closeAside()
      } else {
        openAside()
      }
    })
  }
}

// Safari
function setCorrectViewHeight() {
  const windowsVH = window.innerHeight
  document.documentElement.style.setProperty('--vh', windowsVH + 'px')
}

function safariHacks() {
  window.addEventListener('resize', setCorrectViewHeight)
}

function getPageID(url) {
  return url.replace('#', '').replace('.html', '').replaceAll('/', '').replace(serverPath, '')
}

export function getMenuItemObject() {
  const hash = getPageID(window.location.hash)
  const pathname = getPageID(window.location.pathname)
  if ((!hash && !pathname) || pathname === 'index') return { title: '' }
  let pageObject = null
  function findObject(arr, id) {
    arr.forEach(function (o) {
      if (o.id === id) {
        pageObject = o
        return
      }
      if (o?.submenu?.length > 0) {
        findObject(o.submenu, id)
        return
      }
      if (o?.anchorMenu?.length > 0) {
        findObject(o.anchorMenu, id)
        return
      }
    })
  }
  if (hash) {
    findObject(menu, hash)
  } else {
    findObject(menu, pathname)
  }

  return pageObject
}

export function initMenu() {
  createMenu(menu, DOMaside)
  aLinkClickHandler()
  setFocusMenuItem()
  setMobileMenuToggleEvent()
  scrollToFocusEl()
  safariHacks()
  setCorrectViewHeight()
}
