(()=>{
    function getContent() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'test.json', false);
        xhr.onload = function () {
            let dataJson = JSON.parse(xhr.responseText);
            renderJSOn(dataJson);
        };
        xhr.send();
    }
    function renderJSOn(data) {
        let output="<div>";

        for (let i=0;i<data.length;i++) {
            output+= `<div class="content">
            <div id='id'>${data[i].id}</div>
            <div id='name'>${data[i].name}</div>
            <img id="img-JSON" src="${data[i].imageURL}" alt="">
</div>`;

           }
        document.getElementById("app").innerHTML=output;
        function onClick() {
            let clickName = document.querySelector('button');
            clickName.addEventListener('click',function () {
                alert('clickss');
            });
        }
       let selectDiv = document.querySelector('div');
        selectDiv.addEventListener('click',function () {
           document.querySelector('div').style.backgroundColor = "#0000000"
       });
        onClick();
    }

    getContent();

})();



