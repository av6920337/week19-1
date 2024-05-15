function generatePostHTML(post){
    const postElement=document.createElement('div');
    postElement.classList.add('post');

    const postTitle=document.createElement('h3');
    postTitle.textContent=post.title;

    const postContent=document.createElement('p');
    postContent.textContent=post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    return postElement.outerHTML;
}

function addPostToContainer(container, postHTML) {
    const containerElement = document.querySelector(container);
    
    const newPostElement = document.createElement('div');
    newPostElement.innerHTML = postHTML;

    containerElement.appendChild(newPostElement);
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(posts=>{
    // const container=document.getElementById('posts-container');
    posts.forEach((post)=> {
        const postHTML = generatePostHTML(post);
        addPostToContainer(container,postHTML);
    });
})
.catch(error=>console,log(error));