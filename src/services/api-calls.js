const baseUrl = "https://jsonplaceholder.typicode.com/"

export function getPosts() {
  return fetch(`${baseUrl}posts`)
  .then(res => res.json())
}
