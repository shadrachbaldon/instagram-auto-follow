console.log("content.js loaded!");
var scroolToOffset = 300;
var x = Math.floor(Math.random() * (48 - 36 + 1)) + 36;//random number

function scroll(){
	$("._4gt3b").animate({
		scrollTop: scroolToOffset
	}, 300);
}

function follow(){
	var randomSecs = Math.floor(Math.random() * (48 - 36 + 1)) + 36;//random number
	var randomSecs = randomSecs * 1000;
	setTimeout(function(){
		$("div._72gdz > span > button._84y62").click()
	},randomSecs);
}

$(document).ready(function(){
	
	
});

chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
	    if (request.action == "start"){
	    	console.log("start action received!");
	    	scroll();
			scroolToOffset += 300;
	    }
});