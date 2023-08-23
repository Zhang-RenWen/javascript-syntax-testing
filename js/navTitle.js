import { getMenuItemObject } from './menu.js'
const h1Text = 'Modern WEB Dev Notes'
// Code to append a click to copy button
export function initTitle() {
  const titleEl = document.querySelector('header a')
  titleEl.textContent = h1Text
  setDocumentTitle()
}

export function setDocumentTitle() {
  const menuItem = getMenuItemObject()
  const pageName = menuItem.title ? menuItem.title : ''
  const titleEl = document.querySelector('header a')
  titleEl.textContent = h1Text

  document.title = `${h1Text} | ${pageName}`
}
