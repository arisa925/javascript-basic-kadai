const btn = document.getElementById('btn');
const text = document.getElementById('text');

function handleClick() {
    setTimeout(() => {
        text.innerText = '文章が書き換わりました';
        console.log('ボタンをクリックしました');
    }, 2000);
}

btn.addEventListener('click', handleClick);