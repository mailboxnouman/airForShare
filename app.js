var navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.marginRight = "-200px";

    // document.getElementById('shadow').className = "shadow"
    // var body = document.getElementById("overFl");
    // body.style.overflow = "hidden";
}
function hideMenu() {
    navlinks.style.marginRight = "0px";

    // document.getElementById('shadow').className = "navHide"
    // var body = document.getElementById("overFl");
    // body.style.overflow = "scroll";
}
function isValidURL(url) {
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}

function filterLink() {
    event.preventDefault();

    var linkInput = document.getElementById('textData');
    var linkValue = linkInput.value.trim();

    if (linkValue !== "" && isValidURL(linkValue)) {
        var listItem = document.createElement('li');
        var anchorTag = document.createElement('a');

        anchorTag.href = linkValue;
        anchorTag.textContent = linkValue;
        anchorTag.setAttribute('target', '_blank')
        // anchorTag.addEventListener('click', function() {
        //     window.open(linkValue, '_blank');
        // });

        listItem.appendChild(anchorTag);
        document.getElementById('links').appendChild(listItem);

        
    } else if(linkValue == ""){
        alert('Please write something to save.');
    }
}






// var navTabText = document.getElementById("navTabText");
// var navTabFile = document.getElementById("navTabFile");
// var mainApp = document.getElementById("mainApp");
// var sideBlock = document.getElementById("sideBlock");
// var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// function showFile(){
//     navTabFile.style.backgroundColor = "white";
//     navTabFile.style.color = "#765CFF";
//     navTabText.style.backgroundColor = "#F8F8F8";
//     navTabText.style.color = "rgb(178, 178, 178)";
//     // mainApp.style.height = "400px";
//     mainApp.style.transition = "1s"
//     // sideBlock.style.height = "400px";
//     sideBlock.style.transition = "1s"

//         // Check if viewport width is less than 768px
//         if (viewportWidth > 768) {
//             mainApp.style.height = "400px";
//             // Add any other specific styles for less than 768px width here
//         }
// }

var navTabText = document.getElementById("navTabText");
var navTabFile = document.getElementById("navTabFile");
var mainApp = document.getElementById("mainApp");
var sideBlock = document.getElementById("sideBlock");
var mainContent = document.getElementById("mainContent");
var heading = document.getElementById("heading");
var mainContentSub = document.getElementById("mainContentSub");
var dropArea = document.getElementById("dropArea");

function showFile() {
    navTabFile.style.backgroundColor = "white";
    navTabFile.style.color = "#765CFF";
    navTabText.style.backgroundColor = "#F8F8F8";
    navTabText.style.color = "rgb(178, 178, 178)";
    heading.innerText = "Files"
    mainContentSub.style.display = "none"
    dropArea.style.display = "flex"



    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth > 768) {
        sideBlock.style.height = "400px";
        sideBlock.style.transition = "1s";
        mainContent.style.height = "400px";
        mainContent.style.transition = "1s";
        mainApp.style.height = "400px";
        mainApp.style.transition = "1s";
    }


}

window.addEventListener('resize', showText);


function showText() {
    navTabFile.style.color = "rgb(178, 178, 178)";
    navTabText.style.backgroundColor = "white";
    navTabText.style.color = "#765CFF";
    navTabFile.style.backgroundColor = "#F8F8F8";
    mainApp.style.height = "500px";
    sideBlock.style.height = "500px";
    mainContent.style.height = "500px";
    mainContent.style.transition = "1s";
    heading.innerText = "Text"
    mainContentSub.style.display = "block"
    dropArea.style.display = "none"
    
}





document.getElementById('browse').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

function browseFiles() {
    document.getElementById('fileInput').click();
}

function allowDrop(event) {
    event.preventDefault();
    var dropArea = document.getElementById('dropArea');
    dropArea.style.border = '2px solid #638EFF'; 
}

function drop(event) {
    event.preventDefault();
    var dropArea = document.getElementById('dropArea');
    dropArea.style.border = 'none'; 
     
    document.getElementById('dropAreaContent').addEventListener('click', function () {
        document.getElementById('fileInput').click();
    });

    var files = event.dataTransfer.files;
    handleFiles(files);
}

// function handleFiles(files) {
//     var output = document.getElementById('dropArea');
//     output.innerHTML = '';

//     for (var i = 0; i < files.length; i++) {
//         var file = files[i];
//         output.innerHTML += '<p>File Name: ' + file.name + '<br>File Size: ' + file.size + ' bytes</p>';
//     }
// }
    
function handleFiles(files) {
    var output = document.getElementById('dropArea');

    var dropAreaContent = document.getElementById('dropAreaContent');
    dropAreaContent.style.width = "100px";
    dropAreaContent.style.height = "100px";
    dropAreaContent.style.border = "1px dashed rgb(192, 192, 192)";
    dropAreaContent.style.display = "flex";
    dropAreaContent.style.alignItems = "center";
    dropAreaContent.style.justifyContent = "center";
    dropAreaContent.innerText = "Add File";
    dropAreaContent.style.cursor = "pointer";
    dropAreaContent.setAttribute('onclick', 'browseFiles()');

    output.style.justifyContent = "start";
    output.style.alignItems = "start";

    var addFileContent = output.querySelector('#dropAreaContent');

    if (addFileContent) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileBlock = createFileBlock(file);
            output.insertBefore(fileBlock, addFileContent);
        }
    } else {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileBlock = createFileBlock(file);
            output.appendChild(fileBlock);
        }
    }
}





function createFileBlock(file) {
    var fileBlock = document.createElement('div');
    fileBlock.className = 'fileBlock';

    if (file.type.startsWith('image/')) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        fileBlock.appendChild(img);
    } else {
        var fileName = document.createElement('p');
        fileName.textContent = file.name;
        fileBlock.appendChild(fileName);
    }

    return fileBlock;
}






















// navTabFile.addEventListener('mouseover', () => {
//   navTabFile.style.backgroundColor = "white";
// });

// navTabFile.addEventListener('mouseout', () => {
//     if(navTabFile.style.backgroundColor == "#F8F8F8"){
//         navTabFile.style.backgroundColor = "white";
//     }
// });


// var elem = document.getElementsByTagName('li')
// console.log(elem[1].innerText);

// var howManyElem = elem.length

// for(i=1; i<howManyElem; i++){
//     if(elem[i].innerText == ""){
//         elem[i].innerText = "coming soon"
//     }
// }