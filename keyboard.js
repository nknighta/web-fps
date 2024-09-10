const keyid = document.querySelector('#keyid');
// キーが押されたとき
keyid.addEventListener('keyup', (event) => {
    // 出力例は「a」を押したととき
    keyid.innerHTML = event.key;
});

const handleKeyDown = (event) => {
    // キーコード（どのキーが押されたか）を取得
    const keyCode = event.keyCode;

    alert(keyCode);
};

//window.addEventListener('keydown', handleKeyDown);
