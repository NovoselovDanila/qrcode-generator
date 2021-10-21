let qrcode = document.querySelector("img")
let qrtext = document.querySelector("input")
let qrbtn = document.querySelector("button")

qrbtn.addEventListener("click", generateQR)

function generateQR(){
    let size = "100x100"
    let data = "hello"
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/"

    let url = `${baseURL}?data=${data}&amp;size=${size}`

    qrcode.src = url
}

