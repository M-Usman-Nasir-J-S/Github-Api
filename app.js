console.log(`Hello Github_Api !`);

let div = document.querySelector("#container")

const input = document.querySelector("input")


function gitBtn() {
    
    fetch(`https://api.github.com/users/${input.value}`)
    
    .then(res => {
        if (!res.ok) {
            throw new Error("User Not Found");
        }

        return res.json();
    })
    .then(data => {

        
        div.innerHTML += `
        
        <div>
        <img src = ${data.avatar_url} width="420px">
        <div>
        <h1>Name : ${data.name}</h1>
        <h2>Github User Name : ${data.login}</h2>
        <h3>Total Follower : ${data.followers}</h3>
        <h4>Total Repositories : ${data.public_repos}</h4>
        <h4>Bio : ${data.bio}</h4>
        <h5>Location : ${data.location}</h5>
        <h5>ID : ${data.id}</h5>
        </div>
        <div>
        
        `
    })
    
    .catch(() => {
        div.innerHTML = `<h1 class="error"> 4o4 Page Not Found</h1>`
    })

    input.value = ""
}
