/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.

function getNamesOfNicosRepos() {
    return fetch(NicosRepositories).then(res => res.json()).then(repo => {
        return repo.map(r => r.name);
    })
}
getNamesOfNicosRepos()

// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string
// }
// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);

function createPost(post) {
    return fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: post.title, text: post.text })
    }).then(res => res.json()).then(newPost => console.log(newPost))
}
createPost({ title: 'New post', text: 'Created new post' })
