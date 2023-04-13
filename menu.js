const menu = [
  {
    id: "2",
    title: "Chapter 2 ES6 基礎元素",
    submenu: [
      {
        id: "2-1",
        title: "2-1 物件實字",
        href: `./2-1.html`,
        // anchorMenu: [
        //   {
        //     id: "2-2-2",
        //     title: "2-2-2 箭頭函式",
        //     href: "#",
        //   },
        // ],
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
        href: "#5-1.html",
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
    ],
  },
  {
    id: "6",
    title: "Chapter 6",
    submenu: [
      {
        id: "6-1",
        title: "6-1",
        href: "#",
      },
    ],
  },
  {
    id: "7",
    title: "Chapter 7",
    submenu: [
      {
        id: "7-1",
        title: "7-1",
        href: "#",
      },
    ],
  },
  {
    id: "8",
    title: "Chapter 8",
    submenu: [
      {
        id: "8-1",
        title: "8-1",
        href: "#",
      },
    ],
  },
  {
    id: "9",
    title: "Chapter 9",
    submenu: [
      {
        id: "9-1",
        title: "9-1",
        href: "#",
      },
    ],
  },
];

(function createMenu(submenu, el) {
  submenu.map((o) => {
    if (o.href) {
      const a = document.createElement("a");
      const li = document.createElement("li");
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
})(menu, document.querySelector("aside"));
