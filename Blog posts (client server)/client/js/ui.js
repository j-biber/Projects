
const $main = document.querySelector('main');

const displayPosts = (posts) => {
    posts.forEach(({ id, title, intro }) => {
        const post = `<div data-id=${id} class="post">
<h3 class="title">${title}</h3>
<p class="intro">${intro}</p>
</div>`

        $main.innerHTML += post;
    });

}

export {displayPosts}