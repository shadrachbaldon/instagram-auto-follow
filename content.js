console.log("content.js loaded!");
var scroolToOffset = 1000,followInterval,followCount = 0;

function scroll(){
	$("._4gt3b").animate({
		scrollTop: scroolToOffset
	}, 300);
}

function follow(){

	followInterval = setInterval(function(){
		var randomSecs = Math.floor(Math.random() * (48 - 36 + 1)) + 36;//random number
		var randomSecs = randomSecs * 1000;
		
		if ($("div._72gdz > span > button._84y62").length === 0) {
			//scroll if there's no follow button found
			console.log("button:"+$("div._72gdz > span > button._84y62").length);
			scroolToOffset += 1000
			scroll();scroll();
		}else{
			$("div._72gdz > span > button._84y62").first().click();
			followCount +=1;
			chrome.runtime.sendMessage({action: "updateTotalFollow"});
			console.log("button:"+$("div._72gdz > span > button._84y62").length);
			console.log("total followed:"+followCount);

		}
		
	},2000);//end interval
}

$(document).ready(function(){

});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

		switch(request.action){
			case "start":
				console.log("start action received!");
		    	follow();
				scroolToOffset += 300;
			break;
			case "stop":
				clearInterval(followInterval);
			break;
		}
});
