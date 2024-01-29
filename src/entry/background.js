console.log('hello world background todo something~')

chrome.storage.local.set({ blockList: ['youtube.com']})

chrome.storage.local.get(['blocklist']).then(result => {
    console.log(result);
})


function getBlockList(){
    chrome.storage.local.get(['blocklist']).then(result => {
        console.log(result);
        return result;
    });
}
