document.getElementById("post-comment-btn").addEventListener("click", function () {
    const commentBox = document.getElementById("comment-box");
    const newComment = commentBox.value;
    commentBox.value = "";

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerText = newComment;

    const comments = document.querySelector(".comments");
    comments.appendChild(comment);
});
