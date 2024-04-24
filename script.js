const entities = [
    {
        cityLine1: "Rostov-on-Don",
        cityLine2: "LCD admiral",
        apartmentArea: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon Request",
        image: "images/img_01.png",
        circle1: "images/selected_circle.svg",
        circle2: "images/grey_circle.svg",
        circle3: "images/grey_circle.svg",
        headingId: "id1",
        circleId: "circle1"
    },
    {
        cityLine1: "Sochi",
        cityLine2: "Thieves",
        apartmentArea: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon Request",
        image: "images/img_02.png",
        circle1: "images/grey_circle.svg",
        circle2: "images/selected_circle.svg",
        circle3: "images/grey_circle.svg",
        headingId: "id2",
        circleId: "circle2"
    },
    {
        cityLine1: "Rostov-on-Don",
        cityLine2: "Patriotic",
        apartmentArea: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon Request",
        image: "images/img_03.png",
        circle1: "images/grey_circle.svg",
        circle2: "images/grey_circle.svg",
        circle3: "images/selected_circle.svg", 
        headingId: "id3",
        circleId: "circle3"
    },
]

const cityLine1 = document.querySelector(".city-line1")
const cityLine2 = document.querySelector(".city-line2")
const apartmentArea = document.querySelector(".apartment-area")
const repairTime = document.querySelector(".repair-time")
const repairCost = document.querySelector(".repair-cost")
const image = document.getElementById("apartment-photo")
const circle1 = document.getElementById("circle1")
const circle2 = document.getElementById("circle2")
const circle3 = document.getElementById("circle3")
const cityButton1 = document.querySelector(".city-button1")
const cityButton2 = document.querySelector(".city-button2")
const cityButton3 = document.querySelector(".city-button3")

const setEntity = (index) => {
    cityLine1.innerText = entities[index].cityLine1
    cityLine2.innerText = entities[index].cityLine2
    apartmentArea.innerText = entities[index].apartmentArea
    repairTime.innerText = entities[index].repairTime
    repairCost.innerText = entities[index].repairCost
    image.src = entities[index].image
    circle1.src = entities[index].circle1
    circle2.src = entities[index].circle2
    circle3.src = entities[index].circle3
}

const updateHeadingCss = (index) => {
    const headingId = entities[index].headingId

    const headings = document.querySelectorAll(".main--section-heading")

    headings.forEach( heading => {
        heading.classList.remove("active-heading")
        heading.classList.add("grey-heading")
    })

    const selectedHeading = document.getElementById(headingId)
    selectedHeading.classList.add("active-heading")
}

const prevArrow = document.querySelector(".prev-button-arrow")
const nextArrow = document.querySelector(".next-button-arrow")

let currentIndex = 0

prevArrow.addEventListener("click", () => {
    currentIndex -= 1
    if (currentIndex < 0){
        currentIndex = entities.length - 1
    }    
    setEntity(currentIndex)
    updateHeadingCss(currentIndex)
})

nextArrow.addEventListener("click", () => {
    currentIndex += 1
    if (currentIndex >= entities.length){
        currentIndex = 0
    }
    setEntity(currentIndex)
    updateHeadingCss(currentIndex)
})


const allCircleButtons = document.querySelectorAll(".button-round")

const circleButtonClick = (index) => {
    const allCircleImg = document.querySelectorAll(".circle")

    const circleId = entities[index].circleId

    allCircleImg.forEach( circleImg => {
        circleImg.src = "images/grey_circle.svg"
    })

    const selectedCircle = document.getElementById(circleId)
    selectedCircle.src = "images/selected_circle.svg"
}


allCircleButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const buttonIndex = button.getAttribute("data-index")
        circleButtonClick(parseInt(buttonIndex))
        setEntity(buttonIndex)
        updateHeadingCss(buttonIndex)
    })
})




const allCityButtons = document.querySelectorAll(".button-city")

allCityButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const buttonIndex = button.getAttribute("data-index")
        circleButtonClick(parseInt(buttonIndex))
        setEntity(buttonIndex)
        updateHeadingCss(buttonIndex)
    })
})
