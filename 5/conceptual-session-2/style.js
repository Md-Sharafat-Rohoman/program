function text(params){
    // console.log('tumake onk balo bashi');
    // document.getElementById('info1').innerText="bangladesh";
    setText('info1','tomak ajibon balo basa jabo');
}
function text2(params){
    // console.log('tumake onk balo bashi');
    // document.getElementById('info2').innerText="bangladesh";
    setText('info2','tomak ajibon balo basa jabo');
    const sum= toNumber('input1');
    console.log(sum);
}
function text3(params){
    // console.log('tumake onk balo bashi');
    // document.getElementById('info3').innerText="bangladesh";
    setText('info3','tomak ajibon balo basa jabo');
}

function setText(id,text){
    document.getElementById(id).innerText=text;
}

function toNumber(id){
    const result = document.getElementById('id').value;
    return parseInt(result);
}