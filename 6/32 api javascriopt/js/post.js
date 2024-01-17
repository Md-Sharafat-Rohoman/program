function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => allLoadPost(json))
}
function allLoadPost(data){
    const postContainer = document.getElementById('post-container')
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
        <h4>user-${post.userId}</h4>
        <h5>post:title-${post.title}</h5>
        <p>post body-${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}


loadPost();