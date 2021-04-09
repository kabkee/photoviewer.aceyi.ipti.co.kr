let $msg = `
    <div class="msg">
        이전 : <- 왼쪽화살표<br/>
        다음 : -> 오른쪽화살표<br/>
        사진 다운로드 : END 버튼
    </div>
`;
$('body').append($msg);

$(document).keyup((key)=>{
    let {keyCode, code} = key;
    console.info(keyCode, code)

    // 오른쪽 키
    if(keyCode == 39){
        let $nextBtn = $('img[src="img/photoviewer_next.gif"]');
        if(!$nextBtn.length){
            alert('마지막 사진입니다.')
        }else{
            console.info($nextBtn.parent());
            window.location.href = $nextBtn.parent().attr('href');
        }
    }
    // 왼쪽 키
    if(keyCode == 37){
        let $prevBtn = $('img[src="img/photoviewer_prev.gif"]');
        if(!$prevBtn.length){
            alert('처음 사진입니다.')
        }else{
            console.info($prevBtn.parent());
            window.location.href = $prevBtn.parent().attr('href');

        }
    }
    // End 키
    if(keyCode == 35){
        let $img = $('body > table:nth-child(1) > tbody > tr:nth-child(2) > td > img');
        if(!$img.length){
            alert('오류 :: 사진을 찾을수 없습니다.')
        }else{
            let href = $img.prop('src');
            console.info('$img', $img.prop('src'))
            let fileName = href.split('=')[1];
            saveBase64AsFile(href, fileName);
        }
    }
})

function saveBase64AsFile(base64, fileName) {
    var link = document.createElement("a");

    document.body.appendChild(link); // for Firefox

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
}