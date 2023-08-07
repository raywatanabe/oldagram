const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")

 for (let i = 0; i < posts.length; i++ ) {
    let currentPost = posts[i];

    renderPost(currentPost)
 }

function renderPost(post) {
    let currentPost = post

    let newPost = document.createElement("section")
    newPost.className = "post"
    main.append(newPost)

    let postHeader = document.createElement("div")
    postHeader.className = "post-header"
    newPost.append(postHeader)

    let avatar = document.createElement("img")
    avatar.className = "avatar"
    avatar.src = currentPost.avatar
    postHeader.append(avatar)

    let postHeaderContainer = document.createElement("div")
    postHeaderContainer.className = "post-header-container"
    postHeader.append(postHeaderContainer)

    let name = document.createElement("h4")
    name.className = "name"
    name.innerHTML = currentPost.name
    postHeaderContainer.append(name)

    let location = document.createElement("p")
    location.className = "location"
    location.innerHTML = currentPost.location
    postHeaderContainer.append(location)
    
    let photo = document.createElement("img")
    photo.className = "photo"
    photo.src = currentPost.post
    photo.addEventListener("dblclick", likePost)
    newPost.append(photo)

    let postFooter = document.createElement("div")
    postFooter.className = "post-footer"
    newPost.append(postFooter)

    let iconContainer = document.createElement("div")
    iconContainer.className = "icon-container"
    postFooter.append(iconContainer)

    let heartIcon = document.createElement("img")
    heartIcon.className = "heart-icon"
    heartIcon.src = "images/icon-heart.png"
    heartIcon.addEventListener("click", likePost)
    iconContainer.append(heartIcon)

    let commentIcon = document.createElement("img")
    commentIcon.className = "comment-icon"
    commentIcon.src = "images/icon-comment.png"
    iconContainer.append(commentIcon)

    let dmIcon = document.createElement("img")
    dmIcon.className = "dm-icon"
    dmIcon.src = "images/icon-dm.png"
    iconContainer.append(dmIcon)

    let likes = document.createElement("h4")
    likes.className = "likes"
    likes.innerHTML = `${currentPost.likes} likes`
    postFooter.append(likes)    

    let commentContainer = document.createElement("div")
    commentContainer.className = "comment-container"
    postFooter.append(commentContainer)

    let username = document.createElement("h4")
    username.className = "username"
    username.innerHTML = currentPost.username
    commentContainer.append(username)

    let comment = document.createElement("p")
    comment.className = "comment"
    comment.innerHTML = currentPost.comment
    commentContainer.append(comment)
}

function likePost() {
    
}

// renderPost(posts[0])