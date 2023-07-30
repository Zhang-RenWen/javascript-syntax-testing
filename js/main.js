import {inserted} from './clipboard.js'
import  {initMenu} from'./menu.js'
import  {initCodeLine} from './codeline.js'
initMenu()
inserted(document)
hljs.highlightAll();
initCodeLine()