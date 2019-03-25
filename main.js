class portal {
    constructor(input){
        let type = input.charAt(0)
        let name = input.substr(1)

        type === "#"
            ? this.element = document.getElementById(name)
            : type === "."
                ? this.element = document.getElementsByClassName(name)[0]
                : this.element = document.getElementsByTagName(input)[0]
    }


    addClass(className) { return this.element.classList.add(className) }
    removeClass(className) { return this.element.classList.remove(className) }
}

const navbar = new portal('nav')
