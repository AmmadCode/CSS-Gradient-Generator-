let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let code = document.querySelector(".code");
let rgb1 = '#ff4599';
let rgb2 = '#ab3dd1';

const hexCode = () => {
    let cod = "0123456789abcdef";
    let color = "#";
    for(let i=0;i<6;i++) {
        color = color + cod[Math.floor(Math.random() * 16)];
        
    }
    return color;
}




const generate1 = () => {
    rgb1 = hexCode();
    btn1.textContent = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    code.innerHTML = `background-image = linear-gradient(to right, ${rgb1},${rgb2});`;
   
}
const generate2 = () => {
    rgb2 =hexCode();
    btn2.textContent = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;
    code.innerHTML = `background-image = linear-gradient(to right, ${rgb1}, ${rgb2})`;
   
}

code.addEventListener('click', ()=> {
    navigator.clipboard.writeText(code.innerText);
    alert(`👌Your color is successfully copied!  `)
});


btn1.addEventListener("click",generate1);
btn2.addEventListener("click",generate2);
