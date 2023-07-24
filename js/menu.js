

const focusedClassName ='menu-item-focus'
const itemsDataAttribute = 'data-item-id'
let deepPathname = window.location.pathname.split('/').filter(Boolean).filter((o)=>o.includes('.html'))[0];


const DOMaside = document.querySelector('aside')


export const menu = [
  {
    id: "2",
    title: "Chapter 2 ES6 基礎元素",
    submenu: [
      {
        id: "2-1",
        title: "2-1 物件實字",
        href: `./2-1.html`
      },
      {
        id: "2-2",
        title: "2-2 箭頭函式",
        href: "./2-2.html",
      },
      {
        id: "2-3",
        title: "2-3 解構賦值",
        href: "./2-3.html",
      },
      {
        id: "2-4",
        title: "2-4 其餘參數和展開運算子",
        href: "./2-4.html",
      },
      {
        id: "2-5",
        title: "2-5 字串樣板",
        href: "2-5.html",
      },
      {
        id: "2-6",
        title: "2-6 let 和 const 敘述",
        href: "2-6.html",
      },
    ],
  },
  {
    id: "3",
    title: "Chapter 3 類別、符號、物件和修飾器",
    submenu: [
      {
        id: "3-1",
        title: "3-1 類別、符號、物件和修飾器",
        href: "3-1.html",
      },
      {
        id: "3-2",
        title: "3-2 符號",
        href: "3-2.html",
        anchorMenu: [
{
  id: "3-2-1",
  title: "3-2-1 區域符號",
  href: "3-2.html#3-2-1",
},
{
  id: "3-2-2",
  title: "3-2-2 符號的實際案例",
  href: "3-2.html#3-2-2",
},
{
  id: "3-2-3",
  title: "3-2-3 全域符號註冊表",
  href: "3-2.html#3-2-3",
},
{
  id: "3-2-4",
  title: "3-2-4 通用符號",
  href: "3-2.html#3-2-4",
},
        ],
      },
      {
        id: "3-3",
        title: "3-3 物件的內建功能強化",
        href: "3-3.html",
        anchorMenu: [
{
  id: "3-3-1",
  title: "3-3-1 運用 Object.assign 延伸物件",
  href: "3-3.html#3-3-1",
},
{
  id: "3-3-2",
  title: "3-3-2 運用 Object.is 比較兩物件",
  href: "3-3.html#3-3-2",
},
{
  id: "3-3-3",
  title: "3-3-3 Object.setPrototypeOf",
  href: "3-3.html#3-3-3",
},
{
  id: "3-4-1",
  title: "3-4-1 初談 JavaScript 修飾器",
  href: "3-4.html#3-4-1",
},
{
  id: "3-4-2",
  title: "3-4-2 修飾器堆疊和不可變更性的警示",
  href: "3-4.html#3-4-2",
},
{
  id: "3-4-3",
  title: "3-4-3 使用案例: C# 的 Attributes",
  href: "3-4.html#3-4-3",
},
{
  id: "3-4-4",
  title: "3-4-4 於 JavaScript 中標記特性",
  href: "3-4.html#3-4-4",
}

        ],
      },
    ],
  },
  {
    id: "4",
    title: "Chapter 4 迭代和流程控制",
    submenu: [
      {
        id: "4-1",
        title: "4-1 Promise",
        href: "4-1.html",
        anchorMenu: [
          {
            id: "4-1-1",
            title: "4-1-1 開始學習 Promise",
            href: "4-1.html#4-1-1",
          },
          {
            id: "4-1-2",
            title: "4-1-2 物件的再開始和連結",
            href: "4-1.html#4-1-2",
          } ,
          {
            id: "4-1-3",
            title: "4-1-3 從頭開始建立一個 Promise",
            href: "4-1.html#4-1-3",
          },
          {
            id: "4-1-4",
            title: "4-1-4 Promise 狀態和結果",
            href: "4-1.html#4-1-4",
          },
          {
            id: "4-1-5",
            title: "4-1-5 Promise#finally提案",
            href: "4-1.html#4-1-5",
          },
          {
            id: "4-1-6",
            title: "4-1-6 善用 Promise.all 和 Promise.race",
            href: "4-1.html#4-1-6",
          },
        ],
        
      },
      {
        id: "4-2",
        title: "4-2 迭代器協議和可迭代協議",
        href: "4-2.html",
        anchorMenu: [
          {
            id: "4-2-1",
            title: "4-2-1 瞭解迭代原則",
            href: "4-2.html#4-2-1",
          },
          {
            id: "4-2-2",
            title: "4-2-2 無限量的序列",
            href: "4-2.html#4-2-2",
          },
          {
            id: "4-2-3",
            title: "4-2-3 以鍵/值配對的方式對物件映射進行迭代",
            href: "4-2.html#4-2-3",
          },
          {
            id: "4-2-4",
            title: "4-2-4 為播放清單的迭代行為增加彈性",
            href: "4-2.html#4-2-4",
          },
        ]
      },
      {
        id: "4-3",
        title: "4-3 產生器函式和產生器物件",
        href: "4-3.html",
        anchorMenu: [
          {
            id: "4-3-1",
            title: "4-3-1 產生器基礎元素",
            href: "4-3.html#4-3-1",
          },
          {
            id: "4-3-2",
            title: "4-3-2  手動迭代產生器",
            href: "4-3.html#4-3-2",
          },
          {
            id: "4-3-3",
            title: "4-3-3 於可迭代物件加入產生器",
            href: "4-3.html#4-3-3",
          },
          {
            id: "4-3-4",
            title: "4-3-4 利用產生器巡訪樹狀結構資料",
            href: "4-3.html#4-3-4",
          },
          {
            id: "4-3-5",
            title: "4-3-5 利用產生器函式增加彈性",
            href: "4-3.html#4-3-5",
          },
          {
            id: "4-3-6",
            title: "4-3-6 非同步流程的處理",
            href: "4-3.html#4-3-6",
          },
          {
            id: "4-3-7",
            title: "4-3-7 產生器拋出錯誤",
            href: "4-3.html#4-3-7",
          },
          {
            id: "4-3-8",
            title: "4-3-8 代表產生器進行回傳",
            href: "4-3.html#4-3-8",
          },
          {
            id: "4-3-9",
            title: "4-3-9 運用產生器操作非同步 I/O",
            href: "4-3.html#4-3-9",
          },
          
        ]
      },
      {
        id: "4-4",
        title: "4-4 非同步函式",
        href: "4-4.html",
        anchorMenu: [
          {
            id: "4-4-1",
            title: "4-4-1 非同步函式的意義",
            href: "4-4.html#4-4-1",
          },
          {
            id: "4-4-2",
            title: "4-4-2 使用 async/await",
            href: "4-4.html#4-4-2",
          },
          {
            id: "4-4-3",
            title: "4-4-3 同時發生的非同步流程",
            href: "4-4.html#4-4-3",
          },
          {
            id: "4-4-4",
            title: "4-4-4 錯誤處理",
            href: "4-4.html#4-4-4",
          },
          {
            id: "4-4-5",
            title: "4-4-5 了解非同步函式的內部運作",
            href: "4-4.html#4-4-5",
          }
        ]
      },
      {
        id: "4-5",
        title: "4-5 非同步迭代",
        href: "4-5.html",
        anchorMenu: [
          {
            id: "4-5-1",
            title: "4-5-1 非同步迭代器",
            href: "4-5.html#4-5-1",
          },
          {
            id: "4-5-2",
            title: "4-5-2 非同步產生器",
            href: "4-5.html#4-5-2",
          }
        ]
      },
    ],
  },
  {
    id: "5",
    title: "Chapter 5 運用 ECMAScript 集合",
    submenu: [
      {
        id: "5-1",
        title: "5-1 運用ES6 的映射",
        href: "5-1.html",
        anchorMenu: [
          {
            id: "5-1-1",
            title: "5-1-1 初探 ES6 的映射",
            href: "5-1.html#5-1-1",
          },
          {
            id: "5-1-2",
            title: "5-1-2 Hash-map 雜湊表和 DOM",
            href: "5-1.html#5-1-2",
          },
        ]
      },
      {
        id: "5-2",
        title: "5-2 瞭解並運用弱映射",
        href: "5-2.html",
        anchorMenu: [
          {
            id: "5-2-1",
            title: "5-2-1 弱映射是一個糟糕的映射？",
            href: "5-2.html#5-2-1",
          }
        ]
      },
      {
        id: "5-3",
        title: "5-3 ES6 的集合",
        href: "5-3.html",
        anchorMenu: []
      },
      {
        id: "5-4",
        title: "5-4 ES6 的弱集合",
        href: "5-4.html",
        anchorMenu: []
      },
    ],
  },
  {
    id: "6",
    title: "Chapter 6 運用代理器管理特性存取",
    submenu: [
      {
        id: "6-1",
        title: "6-1 代理器初探",
        href: "6-1.html",
        anchorMenu: [
          {
            id: "6-1-1",
            title: "6-1-1 定義 get 機關攔截擷取操作",
            href: "6-1.html#6-1-1",
          }, 
          {
            id: "6-1-2",
            title: "6-1-2 定義 set 機關攔截擷取操作",
            href: "6-1.html#6-1-2",
          }, 
          {
            id: "6-1-3",
            title: "6-1-3 以代理器進行格式驗證",
            href: "6-1.html#6-1-3",
          }, 
        ],
      },
      {
        id: "6-2",
        title: "6-2 可廢止的代理器",
        href: "6-2.html",
        anchorMenu: []
      },
      {
        id: "6-3",
        title: "6-3 代理器機關處理器",
        href: "6-3.html",
        anchorMenu: [
          {
            id: "6-3-1",
            title: "6-3-1 是否設定機關一 has",
            href: "6-3.html#6-3-1",
          }, 
          {
            id: "6-3-2",
            title: "6-3-2 deleteProperty 機關",
            href: "6-3.html#6-3-2",
          }, 
          {
            id: "6-3-3",
            title: "6-3-3 defineProperty 機關",
            href: "6-3.html#6-3-3",
          }, 
          {
            id: "6-3-4",
            title: "6-3-4 ownkeys 機關",
            href: "6-3.html#6-3-4",
          }, 
        ]
      },
      {
        id: "6-4",
        title: "6-4 進階的代理器機關",
        href: "6-4.html",
        anchorMenu:[
          {
            id: "6-4-1",
            title: "6-4-1 getOwnPropertyDescriptor 機關",
            href: "6-4.html#6-4-1",
          }, 
          {
            id: "6-4-2",
           title: "6-4-2 apply 機關",
            href: "6-4.html#6-4-2",
          }, 
          {
            id: "6-4-3",
            title: "6-4-3 construct 機關",
            href: "6-4.html#6-4-3",
          }, 
          {
            id: "6-4-4",
            title: "6-4-4 setPrototypeOf 機關",
            href: "6-4.html#6-4-4",
          }, 
          {
            id: "6-4-5",
            title: "6-4-5 setPrototypeOf 機關",
            href: "6-4.html#6-4-5",
          }, 
          {
            id: "6-4-6",
            title: "6-4-6 preventExtensions 機關",
            href: "6-4.html#6-4-6",
          }, 
          {
            id: "6-4-7",
            title: "6-4-7 isExtensible 機關",
            href: "6-4.html#6-4-7",
          }, 
        ]
      },
    ],
  },
  {
    id: "7",
    title: "Chapter 7 ES6 內建功能優化",
    submenu: [
      {
        id: "7-1",
        title: "7-1 數值",
        href: "7-1.html",
        anchorMenu:[
          {
            id: "7-1-1",
            title: "7-1-1 二進位和八進位實字",
            href: "7-1.html#7-1-1",
          }, 
          {
            id: "7-1-2",
            title: "7-1-2 Number.isNaN",
            href: "7-1.html#7-1-2",
          }, 
          {
            id: "7-1-3",
            title: "7-1-3 Number.isFinite",
            href: "7-1.html#7-1-3",
          }, 
          {
            id: "7-1-4",
            title: "7-1-4 Number.parseInt",
            href: "7-1.html#7-1-4",
          },
          {
            id: "7-1-5",
            title: "7-1-5 Number.parseFloat",
            href: "7-1.html#7-1-5",
          },
          {
            id: "7-1-6",
            title: "7-1-6 Number.isInteger",
            href: "7-1.html#7-1-6",
          },  
          {
            id: "7-1-7",
            title: "7-1-7 Number.EPSILON",
            href: "7-1.html#7-1-7",
          },  
          {
            id: "7-1-8",
            title: "7-1-8 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER",
            href: "7-1.html#7-1-8",
          }, 
          {
            id: "7-1-9",
            title: "7-1-9 Number.isSafeInteger",
            href: "7-1.html#7-1-9",
          },    
        ]
      },
      {
        id: "7-2",
        title: "7-2 Math 物件",
        href: "7-2.html",
        anchorMenu:[
          {
            id: "7-2-1",
            title: "7-2-1 Math.sign",
            href: "7-2.html#7-2-1",
          }, 
          {
            id: "7-2-2",
            title: "7-2-2 Math.trunc",
            href: "7-2.html#7-2-2",
          }, 
          {
            id: "7-2-3",
            title: "7-2-3 Math.cbrt",
            href: "7-2.html#7-2-3",
          }, 
          {
            id: "7-2-4",
            title: "7-2-4 Math.expm1",
            href: "7-2.html#7-2-4",
          },
          {
            id: "7-2-5",
            title: "7-2-5 Math.log1p",
            href: "7-2.html#7-2-5",
          },
          {
            id: "7-2-6",
            title: "7-2-6 Math.log10",
            href: "7-2.html#7-2-6",
          },  
          {
            id: "7-2-7",
            title: "7-2-7 Math.log2",
            href: "7-2.html#7-2-7",
          },  
          {
            id: "7-2-8",
            title: "7-2-8 三角函數",
            href: "7-2.html#7-2-8",
          }, 
          {
            id: "7-2-9",
            title: "7-2-9 Math.hypot",
            href: "7-2.html#7-2-9",
          },  
          {
            id: "7-2-10",
            title: "7-2-10 位元運算輔助器",
            href: "7-2.html#7-2-10",
          },   
        ]
      },
      {
        id: "7-3",
        title: "7-3 字串和萬國碼",
        href: "7-3.html",
        anchorMenu:[
          {
            id: "7-3-1",
            title: "7-3-1 String#startsWith",
            href: "7-3.html#7-3-1",
          }, 
          {
            id: "7-3-2",
            title: "7-3-2 String#endsWith",
            href: "7-3.html#7-3-2",
          }, 
          {
            id: "7-3-3",
            title: "7-3-3 String#includes",
            href: "7-3.html#7-3-3",
          }, 
          {
            id: "7-3-4",
            title: "7-3-4 String#repeat",
            href: "7-3.html#7-3-4",
          },
          {
            id: "7-3-5",
            title: "7-3-5 字串補足與修整",
            href: "7-3.html#7-3-5",
          },
          {
            id: "7-3-6",
            title: "7-3-6 萬國碼",
            href: "7-3.html#7-3-6",
          },  
          {
            id: "7-3-7",
            title: "7-3-7 String.prototype[Symbol.iterator]",
            href: "7-3.html#7-3-7",
          },  
          {
            id: "7-3-8",
            title: "7-3-8 分辨字元符號叢集提案",
            href: "7-3.html#7-3-8",
          }, 
          {
            id: "7-3-9",
            title: "7-3-9 String#codePointAt",
            href: "7-3.html#7-3-9",
          },  
          {
            id: "7-3-10",
            title: "7-3-10 String.fromCodePoint",
            href: "7-3.html#7-3-10",
          },  
          {
            id: "7-3-11",
            title: "7-3-11 萬國碼感知的字串返回法",
            href: "7-3.html#7-3-11",
          },  
          {
            id: "7-3-12",
            title: "7-3-12 String#normalize",
            href: "7-3.html#7-3-12",
          },  
        ]
      },
      {
        id: "7-4",
        title: "7-4 正規表示式",
        href: "7-4.html",
        anchorMenu:[
          {
            id: "7-4-1",
            title: "7-4-1 黏著比對模式 /y",
            href: "7-4.html#7-4-1",
          }, 
          {
            id: "7-4-2",
            title: "7-4-2 萬國碼比對模式 /u",
            href: "7-4.html#7-4-2",
          }, 
          {
            id: "7-4-3",
            title: "7-4-3 命名匹配群組",
            href: "7-4.html#7-4-3",
          }, 
          {
            id: "7-4-4",
            title: "7-4-4 萬國碼特性跳脫",
            href: "7-4.html#7-4-4",
          },
          {
            id: "7-4-5",
            title: "7-4-5 左合子樣式",
            href: "7-4.html#7-4-5",
          },
          {
            id: "7-4-6",
            title: "7-4-6 全新的 /s 'dotAll' 模式",
            href: "7-4.html#7-4-6",
          },  
          {
            id: "7-4-7",
            title: "7-4-7 String#matchAll",
            href: "7-4.html#7-4-7",
          } 
        ]
      },
      {
        id: "7-5",
        title: "7-5 陣列",
        href: "7-5.html",
        anchorMenu:[
          {
            id: "7-5-1",
            title: "7-5-1 Array.from",
            href: "7-5.html#7-5-1",
          }, 
          {
            id: "7-5-2",
            title: "7-5-2 Array.of",
            href: "7-5.html#7-5-2",
          }, 
          {
            id: "7-5-3",
            title: "7-5-3 Array#copyWithin",
            href: "7-5.html#7-5-3",
          }, 
          {
            id: "7-5-4",
            title: "7-5-4 Array#fill",
            href: "7-5.html#7-5-4",
          },
          {
            id: "7-5-5",
            title: "7-5-5 Array#find 和 Array#findIndex",
            href: "7-5.html#7-5-5",
          },
          {
            id: "7-5-6",
            title: "7-5-6 Array.keys",
            href: "7-5.html#7-5-6",
          },  
          {
            id: "7-5-7",
            title: "7-5-7 Array.values",
            href: "7-5.html#7-5-7",
          },  
          {
            id: "7-5-8",
            title: "7-5-8 Array.entries",
            href: "7-5.html#7-5-8",
          }, 
          {
            id: "7-5-9",
            title: "7-5-9 Array.prototype[Symbol.iterator]",
            href: "7-5.html#7-5-9",
          }   
        ]
      },
    ],
  },
  {
    id: "8",
    title: "Chapter 8 JavaScript 模組",
    submenu: [
      {
        id: "8-1",
        title: "8-1 CommonJS",
        href: "8-1.html",
      },
      {
        id: "8-2",
        title: "8-2 JavaScript 模組",
        href: "8-2.html",
        anchorMenu:[
          {
            id: "8-2-1",
            title: "8-2-1 嚴格模式",
            href: "8-2.html#8-2-1",
          },  
          {
            id: "8-2-2",
            title: "8-2-2 export 輸出敘述",
            href: "8-2.html#8-2-2",
          },
          {
            id: "8-2-3",
            title: "8-2-3 import 載入敘述",
            href: "8-2.html#8-2-3",
          },        
          {
            id: "8-2-4",
            title: "8-2-4 動態 import()",
            href: "8-2.html#8-2-4",
          },     
        ]
      },
      {
        id: "8-3",
        title: "8-3 ES 模組操作的實務考量",
        href: "8-3.html",
      },
    ],
  },
  {
    id: "9",
    title: "Chapter 9 實務操作的考量",
    submenu: [
      {
        id: "9-1",
        title: "9-1 變數宣告",
        href: "9-1.html",
      },
      {
        id: "9-2",
        title: "9-2 字串樣板",
        href: "9-2.html",
      },
      {
        id: "9-3",
        title: "9-3 簡化語法與物件解構賦值",
        href: "9-3.html",
      },
      {
        id: "9-4",
        title: "9-4 其餘展開運算子",
        href: "9-4.html",
      },
      {
        id: "9-5",
        title: "9-5 探究各類函式宣告方法",
        href: "9-5.html",
      },
      {
        id: "9-6",
        title: "9-6 類別與代理器",
        href: "9-6.html",
      },
      {
        id: "9-7",
        title: "9-7 非同步程式流程",
        href: "9-7.html",
      },
      {
        id: "9-8",
        title: "9-8 複雜性、抽象化與規範",
        href: "9-8.html",
      },
    ],
  },
  {
    id: "10",
    title: "新標準 ES2016 (ES7)",
    submenu: [
      {
        id: "10-1",
        title: "10-1 Array.prototype.includes()",
        href: "10-1.html",
      },
      {
        id: "10-2",
        title: "10-2 Exponentiation Operator (指數運算子)",
        href: "10-2.html",
      },
    ],
  },
  {
    id: "11",
    title: "新標準 ES2017 (ES8)",
    submenu: [
      {
        id: "11-1",
        title: "11-1 String.padStart()",
        href: "11-1.html",
      },
      {
        id: "11-2",
        title: "11-2 String.padEnd()",
        href: "11-2.html",
      },
      {
        id: "11-3",
        title: "11-3 Trailing Commas",
        href: "11-3.html",
      },
      {
        id: "11-4",
        title: "11-4 Object:entries() and values()",
        href: "11-4.html",
      },
      {
        id: "11-5",
        title: "11-5 Async and Await",
        href: "11-5.html",
      },
    ],
  },
  {
    id: "12",
    title: "新標準 ES2018 (ES9)",
    submenu: [
      {
        id: "12-1",
        title: "12-1 Spread 展開運算子 / Rest 其餘參數",
        href: "12-1.html",
      },
      {
        id: "12-2",
        title: "12-2 正則表達式- Capturing group: (...)",
        href: "12-2.html",
      },
      {
        id: "12-3",
        title: "12-3 正則表達式 - 反向斷言",
        href: "12-3.html",
      },
      {
        id: "12-4",
        title: "12-4 正則表達式 - dotAll 模式",
        href: "12-4.html",
      },

      {
        id: "12-5",
        title: "12-5 Promise.finally()",
        href: "12-5.html",
      },
      {
        id: "12-6",
        title: "12-6 異步迭代 for await...of",
        href: "12-6.html",
      },
    ], 
  },
  {
    id: "13",
    title: "新標準 ES2019 (ES10)",
    submenu: [
      {
        id: "13-1",
        title: "13-1 Array.prototype.flat()",
        href: "13-1.html",
      },
      {
        id: "13-2",
        title: "13-2 Array.prototype.flatMap()",
        href: "13-2.html",
      },
      {
        id: "13-3",
        title: "13-3 String.prototype.trimStart()",
        href: "13-3.html",
      },
      {
        id: "13-4",
        title: "13-4 String.prototype.trimEnd()",
        href: "13-4.html",
      },

      {
        id: "13-5",
        title: "13-5 Symbol.prototype.description",
        href: "13-5.html",
      },
      {
        id: "13-6",
        title: "13-6 Object.fromEntries()",
        href: "13-6.html",
      },
      {
        id: "13-7",
        title: "13-7 Well-formed JSON.stringify",
        href: "13-7.html",
      },
      {
        id: "13-8",
        title: "13-8 JSON superset",
        href: "13-8.html",
      }
    ], 
  },
{
  id: "14",
  title: "新標準 ES2020 (ES11)",
  submenu: [
    {
      id: "14-1",
      title: "14-1 ",
      href: "14-1.html",
    },
    {
      id: "14-2",
      title: "14-2 ",
      href: "14-2.html",
    },
    {
      id: "14-3",
      title: "14-3 ",
      href: "14-3.html",
    },
    {
      id: "14-4",
      title: "14-4 ",
      href: "14-4.html",
    },

    {
      id: "14-5",
      title: "14-5 ",
      href: "14-5.html",
    },
    {
      id: "14-6",
      title: "14-6 ",
      href: "14-6.html",
    },
  ], 
},
{
  id: "15",
  title: "新標準 ES2021 (ES12)",
  submenu: [
    {
      id: "15-1",
      title: "15-1 ",
      href: "15-1.html",
    },
    {
      id: "15-2",
      title: "15-2 ",
      href: "15-2.html",
    },
    {
      id: "15-3",
      title: "15-3 ",
      href: "15-3.html",
    },
    {
      id: "15-4",
      title: "15-4 ",
      href: "15-4.html",
    },

    {
      id: "15-5",
      title: "15-5 ",
      href: "15-5.html",
    },
    {
      id: "15-6",
      title: "15-6 ",
      href: "15-6.html",
    },
  ], 
},
{
  id: "16",
  title: "新標準 ES2022 (ES13)",
  submenu: [
    {
      id: "16-1",
      title: "16-1 ",
      href: "16-1.html",
    },
    {
      id: "16-2",
      title: "16-2 ",
      href: "16-2.html",
    },
    {
      id: "16-3",
      title: "16-3 ",
      href: "16-3.html",
    },
    {
      id: "16-4",
      title: "16-4 ",
      href: "16-4.html",
    },

    {
      id: "16-5",
      title: "16-5 ",
      href: "16-5.html",
    },
    {
      id: "16-6",
      title: "16-6 ",
      href: "16-6.html",
    },
  ], 
},
{
  id: "17",
  title: "新標準 ES2023 (ES14)",
  submenu: [
    {
      id: "17-1",
      title: "17-1 ",
      href: "17-1.html",
    },
    {
      id: "17-2",
      title: "17-2 ",
      href: "17-2.html",
    },
    {
      id: "17-3",
      title: "17-3 ",
      href: "17-3.html",
    },
    {
      id: "17-4",
      title: "17-4 ",
      href: "17-4.html",
    },

    {
      id: "17-5",
      title: "17-5 ",
      href: "17-5.html",
    },
    {
      id: "17-6",
      title: "17-6 ",
      href: "17-6.html",
    },
  ], 
},
];

export function createMenu(submenu, el) {
  submenu.map((o) => {
    if (o.href) {
      const a = document.createElement("a");
      const li = document.createElement("li");
      li.setAttribute(itemsDataAttribute,o.id)  
      a.href = o.href;
      a.textContent = o.title;
      li.appendChild(a);
      el.appendChild(li);
    }
    if (o.submenu || o.anchorMenu) {
      const ul = document.createElement("ul");
      if (o.submenu) {
        const div = document.createElement("div");
        div.textContent = o.title;
        el.appendChild(div);
        el.appendChild(ul);
        createMenu(o.submenu, ul);
      }
      if (o.anchorMenu) {
        el.appendChild(ul);
        createMenu(o.anchorMenu, ul);
      }
    }
  });
}


export function aLinkClickHandler(){
  document.querySelectorAll('a').forEach(el=>{
    el.addEventListener('click',()=>{
      resetFocusMenuItem()
    })
  })
}

export function resetFocusMenuItem(){
  const focusedItem = document.querySelector(`.${focusedClassName}`)
  if(focusedItem){
    focusedItem.classList.remove(focusedClassName)
  }
  setTimeout(() => {
    setFocusMenuItem()
  }, 0);
}


export function getMenuItem(){
  deepPathname=deepPathname?deepPathname.replace('.html',''):''
  if(!deepPathname){
    window.location.href ='./index.html'
  }
  const hash =window.location.hash
  const idString = hash?hash.replace('#',''):deepPathname
  const menu_item =document.querySelector(`[${itemsDataAttribute}="${idString}"]`)
  return menu_item
}

export function setFocusMenuItem(){
  const menu_item =getMenuItem()
  if(menu_item){
    menu_item.classList.add(focusedClassName)
  }

}

export function scrollToFocusEl(){
  const menu_item =getMenuItem()
  const aside =DOMaside
  const nav_height  =document.querySelector('nav').getBoundingClientRect().height
  if(menu_item){
    const menu_item_height = menu_item.getBoundingClientRect().height
    aside.scrollTo(0,menu_item.getBoundingClientRect().bottom -menu_item_height -nav_height*2)
  }
}

export function setMobileMenuToggleEvent(){
const toggle_menu_button =document.querySelector('#toggle-menu')
const aside =DOMaside
  if(toggle_menu_button){
    toggle_menu_button.addEventListener('click',()=>{
      if(toggle_menu_button.classList.contains('opened')){
        toggle_menu_button.classList.remove('opened')
        aside.classList.remove('opened')
      }else{
        toggle_menu_button.classList.add('opened')
        aside.classList.add('opened')
      }
    })  
  }
}

export function initMenu(){
  createMenu(menu,DOMaside)
  aLinkClickHandler()
  setFocusMenuItem()
  setMobileMenuToggleEvent()
  scrollToFocusEl()
}