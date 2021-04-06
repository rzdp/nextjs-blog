export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    return res.json();
}

export const getPostsId = async () => {
    const posts = await getPosts();
    const postIds = posts.map(post => post.id);
    return postIds.map(postId => {
        return {
            params: {
                id: postId.toString()
            }
        }
    })
}

export const getPost = async (id) => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts/' + id);
    return res.json();
}