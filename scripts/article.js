const copyTarget1 = "game.ssnetwork.io:40100";
const copyTarget2 = "25.ip.gl.ply.gg:43340";
const copyTarget3 = "18.ip.gl.ply.gg";
const copyTarget4 = "4892";
const copyButton1 = document.getElementById('copyButton1');
const copyButton2 = document.getElementById('copyButton2');

if (copyButton1) {
    copyButton1.addEventListener('click', () => {
        const textToCopy = copyTarget1;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('サーバーアドレスをコピーしました！');
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
                alert('サーバーアドレスをコピーしました！');
            })
            .catch(err => {
                console.error('サーバーアドレス2のコピーに失敗しました: ', err);
            });
    });
} else {
    console.error('コピーボタン2が見つかりませんでした。');
}

if (copyButton3) {
    copyButton3.addEventListener('click', () => {
        const textToCopy = copyTarget3;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('サーバーアドレスをコピーしました！');
            })
            .catch(err => {
                console.error('サーバーアドレス3のコピーに失敗しました: ', err);
            });
    });
} else {
    console.error('コピーボタン3が見つかりませんでした。');
}

if (copyButton4) {
    copyButton4.addEventListener('click', () => {
        const textToCopy = copyTarget4;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('サーバーアドレスをコピーしました！');
            })
            .catch(err => {
                console.error('サーバーアドレス4のコピーに失敗しました: ', err);
            });
    });
}else {
    console.error('コピーボタン4が見つかりませんでした。');
}