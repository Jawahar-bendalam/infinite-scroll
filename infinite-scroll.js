let pageNum = 1;
let url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=28`;

async function fetchdata() {
  let res = await fetch(url).then((response) => response.json());

  for (let i = 0; i < res.length; i++) {
    document.getElementById("data-container").innerHTML +=
      res[i].title + "<br>";
  }
}
let dataContainer = document.getElementById("data-container");

dataContainer.addEventListener("scroll", (a) => {
  if (
    Math.ceil(dataContainer.clientHeight + dataContainer.scrollTop) >=
    dataContainer.scrollHeight
  ) {
    pageNum++;
    fetchdata();
  }
});
