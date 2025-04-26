const copyTarget1 = "game.ssnetwork.io:40100";
const copyTarget2 = "25.ip.gl.ply.gg:43340";
const copyButton1 = document.getElementById('copyButton1');
const copyButton2 = document.getElementById('copyButton2');

if (copyButton1) {
    copyButton1.addEventListener('click', () => {
        const textToCopy = copyTarget1;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('サーバーアドレスをコピーしました！'); // どのボタンが押されたか明確にする
            })
            .catch(err => {
                console.error('サーバーアドレス1のコピーに失敗しました: ', err);
            });
    });
} else {
    console.error('コピーボタン1が見つかりませんでした。');
}

if (copyButton2) {
    copyButton2.addEventListener('click', () => {
        const textToCopy = copyTarget2;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('サーバーアドレスをコピーしました！'); // どのボタンが押されたか明確にする
            })
            .catch(err => {
                console.error('サーバーアドレス2のコピーに失敗しました: ', err);
            });
    });
} else {
    console.error('コピーボタン2が見つかりませんでした。');
}
