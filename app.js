const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const overFl = document.getElementById('overFl')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btn.classList.toggle('bgWhite')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
    overFl.classList.toggle('overFl')
})





// const themeBtn = document.getElementById('theme-btn');
// const themeMenu = document.getElementById('theme-menu');

// themeBtn.addEventListener('click', () => {
//     themeMenu.classList.toggle('show');
// });

// document.addEventListener('click', (event) => {
//     if (!themeBtn.contains(event.target) && !themeMenu.contains(event.target)) {
//         themeMenu.classList.remove('show');
//     }
// });


// js for theme toggel
// document.getElementById('theme1').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     document.getElementById('theme-menu').classList.toggle('dark-mode');
// });





function handleTextareaInput() {
    var textarea = document.getElementById('textData');
    var btnOne = document.getElementById('btnOne');
    var btnTwo = document.getElementById('btnTwo');
    document.getElementById('btnOne').innerText = "Clear";
    document.getElementById('btnTwo').innerText = "Save";

    if (localStorage.savedText == textarea.value && textarea.value != "") {
        btnOne.style.display = 'inline-block';
        btnTwo.innerText = "Copy"
        btnTwo.disabled = false;
    }else if (localStorage.savedText != textarea.value && textarea.value != "") {
        btnOne.style.display = 'inline-block';
        btnTwo.innerText = "Save"
        btnTwo.disabled = false;
    }else if (textarea.value.trim() !== '') {
        btnTwo.disabled = false;
        btnOne.style.display = 'inline-block';
    } else {
        btnTwo.disabled = true;
        btnOne.style.display = 'none';
    }
}

function clearText() {
    event.preventDefault()
    document.getElementById('textData').value = '';
    document.getElementById('btnOne').innerText = "Cleared";
    setTimeout(function () {
        handleTextareaInput()
    }, 800);

    ; // Call the function to update button states
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


    } else if (linkValue == "") {
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
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth > 768) {
        dropAreaContent.style.width = "100px";
        dropAreaContent.style.height = "100px";

    } else {
        dropAreaContent.style.width = "80px";
        dropAreaContent.style.height = "80px";

    }


    dropAreaContent.style.border = "1px dashed rgb(192, 192, 192)";
    dropAreaContent.style.display = "flex";
    dropAreaContent.style.alignItems = "center";
    dropAreaContent.style.justifyContent = "center";
    dropAreaContent.innerText = "Add File";
    dropAreaContent.style.cursor = "pointer";
    dropAreaContent.setAttribute('onclick', 'browseFiles()')

    output.style.justifyContent = "start";
    output.style.alignItems = "start";

    var addFileContent = output.querySelector('#dropAreaContent');

    if (addFileContent) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileBlock = createFileBlock(file);
            output.insertBefore(fileBlock, addFileContent);
            dropArea.style.border = 'none';
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


function saveAndFilter() {
    copyToClipboard()
    saveText();
    filterLink();
    
}

function displayAndStorage() {
    clearText();
    clearStorageText();
}

document.getElementById('textData').value = localStorage.getItem('savedText') || '';





function copyToClipboard() {
    var textarea = document.getElementById('textData');
    if (localStorage.savedText == textarea.value && textarea.value != "") {

        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');

        window.getSelection().removeAllRanges();

        btnTwo.innerText = "Copied"

    }
}

function saveText() {
    event.preventDefault()
    var textarea = document.getElementById('textData');

    var textToSave = document.getElementById('textData').value;

    if (localStorage.savedText != textarea.value ) {


    localStorage.setItem('savedText', textToSave);

    document.getElementById('btnTwo').innerText = "Saving"
    setTimeout(function () {
        document.getElementById('btnTwo').innerText = "Copy";
    }, 1000);
}
}













function clearStorageText() {
    localStorage.removeItem('savedText');

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