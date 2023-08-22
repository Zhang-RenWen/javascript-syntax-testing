import { initMenu } from './menu.js'
import { initClipboard } from './clipboard.js'
import { initCodeLine } from './codeline.js'
import { initTitle } from './navTitle.js'

initTitle()
initMenu()
hljs.highlightAll()
initClipboard(document)
initCodeLine()
