const menu = [
  {
    id: "2",
    title: "chapter2 ES6 基礎元素",
    submenu: [
      {
        id: "2-1",
        title: "2-1 物件實字",
        href: `./2-1.html`,
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
    title: "chapter3 類別、符號、物件和修飾器",
    submenu: [
      {
        id: "3-1",
        title: "3-1 類別、符號、物件和修飾器",
        href: "3-1.html",
      },
      {
        id: "3-2",
        title: "3-2 符號",
        href: "#",
      },
    ],
  },
  {
    id: "4",
    title: "chapter4",
    submenu: [
      {
        id: "4-1",
        title: "4-1",
        href: "#",
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
    title: "chapter5",
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
    title: "chapter6",
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
    title: "chapter7",
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
    title: "chapter8",
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
    title: "chapter9",
    submenu: [
      {
        id: "9-1",
        title: "9-1",
        href: "#",
      },
    ],
  },
];

function createMenu(submenu, el) {
  submenu.map((o) => {
    if (o.href) {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.href = o.href;
      a.textContent = o.title;
      li.appendChild(a);
      el.appendChild(li);
    }
    if (o.submenu) {
      const ul = document.createElement("ul");
      ul.textContent = o.title;
      el.appendChild(ul);
      createMenu(o.submenu, ul);
    }
  });
}

createMenu(menu, document.querySelector("aside"));
