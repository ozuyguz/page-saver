const onFulfilled = (children) => {
    for (child of children) {
        let c = document.createElement('p')
        c.innerHTML = child.title;
        c.className += 'url-area';
        let link = document.createElement('a');
        link.className += 'c-link'
        link.href = child.url
        link.target = "_blank"
        document.getElementById('content').appendChild(link).appendChild(c);
    }
}

const onRejected = (error) => {
    console.log(`An error occured: ${error}`);
}

const getChildren = chrome.bookmarks.getChildren("1")


document.getElementById('add').addEventListener('click', () => {
    getChildren.then(onFulfilled, onRejected)
})