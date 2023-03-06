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
        ],
        
      },
      {
        id: "4-2",
        title: "4-2",
        href: "#",
      },
    ],
  },
  {
    id: "5",
    title: "Chapter 5",
    submenu: [
      {
        id: "5-1",
        title: "5-1",
        href: "#",
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
