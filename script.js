class Writing {
    constructor(type){
        this.el = document.querySelector(type.el);
        this.text = this.el.innerHTML
        this.fullText = ''
        this.typing()
    }
    typing(i = 0){
        this.fullText += this.text[i]
        this.el.innerHTML = this.fullText
        if (i < this.text.length-1) {
            i++
            setTimeout(() => {
                this.typing(i)
            }, 200); 
        }
    }
}

const write = new Writing({
    el:'.header__content h1'
})
const text = new Writing({
    el:'.info__scroll-desc'
})

class Scroll {
    constructor(item){
        if (typeof item.el  == 'string') {
           this.el = document.querySelector(item.el) 
        }
        
        this.top = item.top
        this.el.style.position = 'fixed'
        this.el.style.top = this.check()
        window.addEventListener('scroll', ()=> this.check())
    }
    check(){
        this.window = this.scrollNum()
        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset +"px"
        }else{
            this.el.style.top = 0
        }
    }
    scrollNum(){
        return (window.innerHeight/100 * this.top) - this.el.clientHeight
    }
}

const scroll = new Scroll({
    el:'.header__nav',
    top:100
})

class Hover {
    constructor(option){
       if (typeof option.el == 'string') {
        this.el = document.querySelector(option.el);
       } 
       this.el.addEventListener('mouseover', ()=> this.move())
    }
    random(min,max){
        return Math.floor(Math.random()* (max+1-min)+min)
    }
    move(){
        this.el.style.marginLeft = this.random(0,innerWidth-this.el.clientWidth) + 'px'
        this.el.style.marginTop = this.random(0,innerHeight-this.el.clientHeight) + 'px'
    }
}
const hover = new Hover({
    el:'.header__content'
})

const open1 = document.querySelector('.open'),
    menu = document.querySelector('.header__menu'),
    close1 = document.querySelector('.header__menu-close');
 
open1.addEventListener('click', function () {
    menu.style.left = '0%'
    menu.style.position = 'fixed'
    document.body.style.overflow = "hidden"
})

close1.addEventListener('click',function () {
    location.reload()
})