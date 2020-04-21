{
    let model = {
        data: {
            state: false
        }
    }
    let controller = {
        init(model, lib) {
            this.model = model
            this.lib = lib
            this.test()
            this.test1()
        },
        test1() {
            let stickers = this.lib.getElement('#stickers')
            let star1 = this.lib.getElement('#star1')
            let canvas = this.lib.getElement('.canvas')
            let pointerX, pointerY
            star1.onclick = e => {
                e.preventDefault()
                let newNode = star1.cloneNode(true)
                newNode.style.position = 'absolute'
                canvas.appendChild(newNode)
                let state = false
                newNode.onmousedown = e => {
                    pointerX = e.clientX
                    pointerY = e.clientY
                    state = true
                }
                canvas.onmousemove = e => {
                    e.preventDefault()
                    if (state) {
                        let dX =  e.clientX - pointerX
                        let dY =  e.clientY - pointerY
                        newNode.style.left = newNode.offsetLeft + dX + 'px'
                        newNode.style.top = newNode.offsetTop + dY + 'px'
                        pointerX = e.clientX
                        pointerY = e.clientY
                    }
                }
                canvas.onmouseup = e => {
                    state = false
                }
            }
        },
        test() {
            let stickers = this.lib.getElement('#stickers')
            let star = this.lib.getElement('#star')
            let canvas = this.lib.getElement('.canvas')
            let pointerX, pointerY
            star.onclick = e => {
                e.preventDefault()
                let newNode = star.cloneNode(true)
                newNode.style.position = 'absolute'
                canvas.appendChild(newNode)
                let state = false
                newNode.onmousedown = e => {
                    pointerX = e.clientX
                    pointerY = e.clientY
                    state = true
                }
                canvas.onmousemove = e => {
                    e.preventDefault()
                    if (state) {
                        let dX =  e.clientX - pointerX
                        let dY =  e.clientY - pointerY
                        newNode.style.left = newNode.offsetLeft + dX + 'px'
                        newNode.style.top = newNode.offsetTop + dY + 'px'
                        pointerX = e.clientX
                        pointerY = e.clientY
                    }
                }
                canvas.onmouseup = e => {
                    state = false
                }
            }
        }
    }
    let lib = {
        getElement(selector) {
            return document.querySelector(selector)
        }
    }
    controller.init(model, lib)
}
