function displayPosts(postList) {
    const $posts = document.querySelector('.post-list');

    postList.forEach(post => {
        const $post =
            ` <li data-id=${post.id}>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>`

        $posts.innerHTML += $post;
    });
}

function displayError(error) {
    const $errorBox = document.querySelector('.error-box');

    $errorBox.textContent = error;
}

export {
    displayPosts,
    displayError
}