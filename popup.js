var totalFollow = 0;
$("#btnStart").click(function(){
	console.log("click received!");
	if ($.trim($('#followPerHour').val()).length > 0) {
		$(this).attr("disabled","disabled");
		$("#btnStop").removeAttr("disabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  	chrome.tabs.sendMessage(tabs[0].id, {action: "start"});
		});
	}else{
		alert("Follow Per Hours Must have a value!");
	}
		
});

$("#btnStop").click(function(){
	console.log("click received!");
	$(this).attr("disabled","disabled");
	$("#btnStart").removeAttr("disabled");
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  	chrome.tabs.sendMessage(tabs[0].id, {action: "stop"});
	});
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

		switch(request.action){
			case "updateTotalFollow":
				totalFollow +=1;
				console.log("updateTotalFollow action received!");
				$("#followTotal").text(totalFollow);
			break;
		}
});
