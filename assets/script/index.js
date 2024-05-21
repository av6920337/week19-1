function createPostHTML(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    return postElement;
}

function addPostToContainer(container, postElement) {
    container.appendChild(postElement);
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>{
    const container = document.querySelector('.container');
    data.forEach(post=>{
        const postElement=createPostHTML(post);
        addPostToContainer(container,postElement);
    });
})
.catch(error=>console.log(error));

