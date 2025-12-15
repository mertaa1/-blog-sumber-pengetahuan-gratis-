const posts = [
  {
    title: "Belajar HTML Dasar",
    content: "HTML adalah bahasa markup untuk membuat website."
  },
  {
    title: "Belajar CSS Dasar",
    content: "CSS digunakan untuk mengatur tampilan website."
  },
  {
    title: "Belajar JavaScript",
    content: "JavaScript membuat website menjadi interaktif."
  }
];

const list = document.getElementById("post-list");

posts.forEach(post => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="post.html?title=${encodeURIComponent(post.title)}&content=${encodeURIComponent(post.content)}">
      ${post.title}
    </a>
  `;
  list.appendChild(li);
});
