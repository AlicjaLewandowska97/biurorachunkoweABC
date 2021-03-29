//prevent

const btns = [...document.querySelectorAll('button')]

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })
})


// slider
const slider = document.querySelector('section.slider')

const slides = [{
        src: 'img/slider1.jpg'
    },
    {
        src: 'img/slider2.jpg'
    },
    {
        src: 'img/slider3.jpg'
    }
]

let slideIndex = 0;

const changeSlide = () => {
    slider.style.backgroundImage = `url(${slides[slideIndex].src})`
    slideIndex++
    if (slideIndex === slides.length) slideIndex = 0
}

setInterval(changeSlide, 6000)

// text slider
const whiteSlider = document.querySelector('section.slider div.white')
const txtDiv = document.querySelector('section.slider div.h1')
const txtH2 = document.querySelector('section.slider h2')

setTimeout(() => {
    whiteSlider.classList.add('active');
    txtDiv.classList.add('active');
    txtH2.classList.add('active');

}, 100)

//odnośniki

const pricesSection = document.querySelector('section.price')

//about title
const aboutTitle = document.querySelector('section.about div.description h1')
aboutSection = document.querySelector('section.about')

const titleShowUp = () => {
    if (scrollY + window.innerHeight >= 1 / 3 * aboutSection.offsetHeight + aboutSection.offsetTop) {
        aboutTitle.classList.add('active')
    }

}
window.addEventListener('scroll', titleShowUp)

//services
const btnMore = document.querySelector('section.services button.more')

btnMore.addEventListener('click', (e) => {
    document.querySelector('section.services').classList.add('active')
    document.querySelector('section.services div.services').classList.add('active')
    document.querySelectorAll('section.services div.service').forEach(service => {
        service.classList.add('active')
    });
    e.target.remove()
    document.querySelector('section.services img.white').remove()
    console.log('dziala')
})

//services wjazd
const servicesSection = document.querySelector('section.services')
const servicesImgWhite = document.querySelector('section.services img.white')

const servicesShowUp = () => {
    mobileViewport = window.matchMedia("(max-width: 1024px)")
    if (mobileViewport.matches && scrollY + window.innerHeight >= document.querySelector('section.services>h1').offsetHeight + servicesSection.offsetTop) {
        servicesSection.classList.add('visible')
        servicesImgWhite.classList.add('visible')
    }
    if (scrollY + window.innerHeight >= 1 / 4 * servicesSection.offsetHeight + servicesSection.offsetTop) {
        servicesSection.classList.add('visible')
        servicesImgWhite.classList.add('visible')
    }
}
window.addEventListener('scroll', servicesShowUp)

//price

const priceTxt = document.querySelector('section.price h1.price span')
const accountingSelect = document.querySelector('section.price div.accounting select')
const docBtns = document.querySelectorAll('section.price div.documents button.document')
let chosenBtn = document.querySelector('section.price div.documents button.document.chosen')
const employeeInput = document.querySelector('section.price div.employees input')

// price wjazd 
const priceDiv = document.querySelector('div.price')

const priceShowUp = () => {
    if (scrollY + window.innerHeight >= 1 / 3 * pricesSection.offsetHeight + pricesSection.offsetTop) {
        priceDiv.style.opacity = '1'
    }
}
window.addEventListener('scroll', priceShowUp)

// wybrany przycisk w calc
const setChosen = (e) => {
    chosenBtn = document.querySelector('section.price div.documents button.document.chosen')
    chosenBtn.classList.remove('chosen');
    e.target.classList.add('chosen')
}

docBtns.forEach(docBtn => {
    docBtn.addEventListener('click', setChosen)
})

//price
let price;
let priceInfo;
let mobileViewport
const changePrice = () => {
    if (chosenBtn.id == 'sixth' && document.querySelector('div.documents').lastChild == priceInfo) {
        document.querySelector('#information').remove();
    }
    priceTxt.style.color = 'var(--txt-blue)'
    let actualPrice = priceTxt.textContent;
    chosenBtn = document.querySelector('section.price div.documents button.document.chosen');
    if (accountingSelect.value == 'Ryczałt') {
        price = 220 + employeeInput.value * 15;
    } else if (accountingSelect.value == 'KPiR') {
        price = 120 + employeeInput.value * 15;
        switch (chosenBtn.id) {
            case 'second':
                price += 100;
                break;
            case 'third':
                price += 100;
                break;
            case 'fourth':
                price += 200;
                break;
            case 'fifth':
                price += 300;
                break;
            case 'sixth':
                price = actualPrice;
                priceInfo = document.createElement('p');
                priceInfo.id = 'information';
                priceInfo.textContent = 'Potrzebujesz szerszej oferty? Zapraszam do indywidualnej wyceny.';
                priceInfo.style.fontSize = '12px'
                priceInfo.style.color = "var(--darkblue)"
                priceInfo.style.fontStyle = 'italic'
                document.querySelector('div.documents').appendChild(priceInfo)
                priceInfo.style.position = 'absolute';
                priceInfo.style.width = '100%';
                priceInfo.style.bottom = '0';
                priceInfo.style.left = '50%';
                priceInfo.style.transform = 'translate(-50%, 180%)';
                mobileViewport = window.matchMedia("(max-width: 824px) and (orientation: landscape)")
                if (mobileViewport.matches) {
                    priceInfo.style.transform = 'translate(-50%, 130%)';
                    priceInfo.style.fontSize = '10px'
                }
                priceTxt.style.color = '#97d9ff'
                return
                break;
        }
    } else {

        price = 350 + employeeInput.value * 15;
        switch (chosenBtn.id) {
            case 'third':
                price += 300;
                break;
            case 'fourth':
                price += 650;
                break;
            case 'fifth':
                price += 950;
                break;
            case 'sixth':
                price = actualPrice;
                priceInfo = document.createElement('p');
                priceInfo.id = 'information';
                priceInfo.textContent = 'Potrzebujesz szerszej oferty? Zapraszam do indywidualnej wyceny.';
                priceInfo.style.fontSize = '12px'
                priceInfo.style.color = "var(--darkblue)"
                priceInfo.style.fontStyle = 'italic'
                document.querySelector('div.documents').appendChild(priceInfo)
                priceInfo.style.position = 'absolute';
                priceInfo.style.width = '100%';
                priceInfo.style.bottom = '0';
                priceInfo.style.left = '50%';
                priceInfo.style.transform = 'translate(-50%, 190%)';
                priceTxt.style.color = '#97d9ff'
                return
                break;
        }
    }

    priceTxt.textContent = price + 'zł'
}

accountingSelect.addEventListener('input', changePrice)
docBtns.forEach(docBtn => {
    docBtn.addEventListener('click', changePrice)
})
employeeInput.addEventListener('input', changePrice)

// input employees

const plusValue = (e) => {
    console.log(e.target.value)
    if (employeeInput.value == '') {
        employeeInput.value = ""
    }
}

employeeInput.addEventListener('input', plusValue)