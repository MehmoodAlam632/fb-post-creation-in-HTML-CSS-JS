const posts = [];
function createPost() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";
  if (title.value === "" && description.value !== "") {
    alert("Please enter post title");
  } else if (description.value === "" && title.value !== "") {
    alert("Please enter post description");
  } else if (title.value === "" && description.value === "") {
    alert("Please enter post title and description");
  } else {
    const data = {
      title: title.value,
      description: description.value,
    };
    posts.unshift(data);
    for (let i = 0; i < posts.length; i++) {
      postsDiv.innerHTML += `
       <div id="post" class="post">
          <div class="d-flex">
             <img
             class="no-photo"
             alt="Profile Picture"
             src="./source/images/no-photo.png"
             />
             <h1 class="mar-top-12">${posts[i].title}</h1>
          </div>
          <p class="des-text">${posts[i].description}</p>
          <button class="like-button">Like</button>
       </div>
    `;
    }
  }
  title.value = "";
  description.value = "";
}
