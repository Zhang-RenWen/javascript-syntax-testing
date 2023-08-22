import { initMenu } from './menu.js'
import { initClipboard } from './clipboard.js'
import { initCodeLine } from './codeline.js'
initMenu()
hljs.highlightAll()
initClipboard(document)
initCodeLine()
