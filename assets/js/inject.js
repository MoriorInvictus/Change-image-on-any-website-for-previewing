let base64String = "";
  
function convertImageToBase64() {
    const file = this['files'][0];
  	const currentID = this.id;
    const reader = new FileReader();
      
    reader.onload = function () {
        base64String = reader.result;
  
        imageBase64Stringsep = base64String;
	    imgToChange = getElement(`.change-this-image__${currentID}`);
	    imgToChange.src = base64String;
	    imgToChange.onload = _ => {
	    	renderImageEditingButtons();
	    }
		
    };

	reader.readAsDataURL(file);
	return base64String;

}



classesToDelete = [];


function renderImageEditingButtons(){

	disableEditingBoxes();
	removeClass(getElement('body'), 'image-editing-body');
	clearClasses(classesToDelete);

	imgs = getElements('img');
	svgs = getElements('svg');

	getElement('body').style.position = 'relative';




	for(let imageElement of imgs){

		imageUploadWrapper = document.createElement("label");
		fileUploadInput = document.createElement("input");


		randomNewWapperId = randomStringGenerator(10);
		randomNewInputId = randomStringGenerator(10);

		classesToDelete.push(`change-this-image__${randomNewInputId}`)
		classesToDelete.push(`reverb-image-changer--id_${randomNewWapperId}`)

		currentImgOffset = getOffset(imageElement);

		addClass(imageUploadWrapper, 'reverb-image-changer');
		addClass(imageElement, `change-this-image__${randomNewInputId}`);
		addClass(imageUploadWrapper, `reverb-image-changer--id_${randomNewWapperId}`);


		imageUploadWrapper.setAttribute("for", randomNewInputId);

		fileUploadInput.setAttribute("id", randomNewInputId);
		fileUploadInput.type = "file";
		fileUploadInput.onchange = convertImageToBase64;


		imageUploadWrapper.appendChild(fileUploadInput)


		currentImageBoundaries = imageElement.getBoundingClientRect();


		currentWrapperStyles = {
			"width": `${currentImageBoundaries.width}px`,
			"height": `${currentImageBoundaries.height}px`,
			"position": "absolute",
			"top": `${currentImgOffset.top}px`,
			"left": `${currentImgOffset.left}px`
		}


		imageUploadWrapper.style.cssText = objectToCssTextStyles(currentWrapperStyles);

		appendToElement('body', imageUploadWrapper);


	}
	removeClass(getElement('body'), 'image-editing-body');



}


function disableEditingBoxes() {


	siteBody = getElement('body');
	addClass(siteBody, 'image-editing-body');

	renderedEditingBoxes = getElements('.reverb-image-changer');
	if(renderedEditingBoxes){

		for(let renderedEditingBox of renderedEditingBoxes){
			try {

			  renderedEditingBox.remove();

			} catch (err) {

			}			
		}

	}

}


function handleCloseEditingPanel() {
	editingRooPanel = getElement('.image-editing-root');
	if(editingRooPanel){
		removeClass(editingRooPanel);
	}
}




function createEditPanel(){

	siteBody = getElement('body');
	removeClass(siteBody, 'image-editing-body');

	editingImagesRoot = document.createElement("div");

	editingImagesControlsWrapper = document.createElement("div");

	editingImagesRootTitle = document.createElement("div");
	editingImagesRootTitle.textContent = "Image Editing Panel";


	renderEditingBoxes = document.createElement("button");
	disableEditingEditingBoxes = document.createElement("button");

	closeEditingPanelBtn = document.createElement("button");


	renderEditingBoxes.textContent = 'Activate';
	disableEditingEditingBoxes.textContent = 'Disable';

	closeEditingPanelBtn.textContent = 'Close Panel';
	closeEditingPanelBtn.onclick = handleCloseEditingPanel;
	renderEditingBoxes.onclick = renderImageEditingButtons;
	disableEditingEditingBoxes.onclick = disableEditingBoxes;

	addClass(editingImagesRoot, 'image-editing-root');
	addClass(editingImagesControlsWrapper, 'image-editing-controls');
	addClass(renderEditingBoxes, 'render-boxes');
	addClass(renderEditingBoxes, 'reverb-def-btn');
	addClass(disableEditingEditingBoxes, 'disable-boxes');
	addClass(disableEditingEditingBoxes, 'reverb-def-btn');
	addClass(editingImagesRootTitle, 'image-editin-title');
	addClass(closeEditingPanelBtn, 'close-editing-btn-panel');
	addClass(closeEditingPanelBtn, 'reverb-def-btn');



	editingImagesRoot.appendChild(editingImagesRootTitle);
	editingImagesControlsWrapper.appendChild(renderEditingBoxes);
	editingImagesControlsWrapper.appendChild(disableEditingEditingBoxes);
	editingImagesRoot.appendChild(editingImagesControlsWrapper);
	editingImagesRoot.appendChild(closeEditingPanelBtn);
	appendToElement('body', editingImagesRoot);



}


function handlePanelOpening(){

	editingRooPanel = getElement('.image-editing-root');
	if(editingRooPanel){
		addClass(editingRooPanel);
	}

}


function initImageEditingPanel(){

	
	editingImagesZipper = document.createElement("button");

	editingImagesZipper.onclick = handlePanelOpening;

	addClass(editingImagesZipper, 'open-editing-panel');


	appendToElement('body', editingImagesZipper);


	createEditPanel();

}


initImageEditingPanel();



