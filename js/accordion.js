var blocks, headerBlocks, contentBlocks;

blocks = document.getElementsByClassName("subItem");
headerBlocks = document.getElementsByClassName("accordianSubItemHeader");
contentBlocks = document.getElementsByClassName("accordianSubItemContent");

toggleAccordion = function(e){
	for(var i = 0; i<contentBlocks.length; i++){
		removeClass(contentBlocks[i],'show');
		addClass(contentBlocks[i],'hide');
	}
	removeClass(e.currentTarget.nextElementSibling,'hide');
	addClass(e.currentTarget.nextElementSibling,'show');
}

addEvent(headerBlocks, 'click', toggleAccordion);