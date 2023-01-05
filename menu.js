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
    ],
  },
  {
    id: "3",
    title: "chapter3 ES6 基礎元素",
    submenu: [
      {
        id: "3-1",
        title: "3-1 物件實字",
        href: "./2-1.html",
      },
      {
        id: "3-2",
        title: "3-2 物件實字",
        href: "./2-1.html",
      },
    ],
  },
  {
    id: "3",
    title: "chapter3 ES6 基礎元素",
    submenu: [
      {
        id: "3-1",
        title: "3-1 物件實字",
        href: "./2-1.html",
      },
      {
        id: "3-2",
        title: "3-2 物件實字",
        href: "./2-1.html",
      },
    ],
  },
  {
    id: "3",
    title: "chapter3 ES6 基礎元素",
    submenu: [
      {
        id: "3-1",
        title: "3-1 物件實字",
        href: "./2-1.html",
      },
      {
        id: "3-2",
        title: "3-2 物件實字",
        href: "./2-1.html",
      },
    ],
  },
  {
    id: "3",
    title: "chapter3 ES6 基礎元素",
    submenu: [
      {
        id: "3-1",
        title: "3-1 物件實字",
        href: "./2-1.html",
      },
      {
        id: "3-2",
        title: "3-2 物件實字",
        href: "./2-1.html",
      },
    ],
  },
  {
    id: "3",
    title: "chapter3 ES6 基礎元素",
    submenu: [
      {
        id: "3-1",
        title: "3-1 物件實字",
        href: "./2-1.html",
      },
      {
        id: "3-2",
        title: "3-2 物件實字",
        href: "./2-1.html",
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
