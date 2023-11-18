const ratingState = document.querySelector('#rating-state')
const thankYouState = document.querySelector('#thank-you-state')
const submitBtn = document.querySelector('.submit-btn')
let selectedRate = document.querySelector('#selected')
let rate = 0;

const gridDOM = document.querySelectorAll('.rate')

gridDOM.forEach(num => {
    num.addEventListener('click', function () {
        rate = this.innerHTML
        gridDOM.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
})

submitBtn.addEventListener('click', rateHandler)

function rateHandler (){
    if(rate === 0){
        alert("please rate us")
    } 
    else {
        selectedRate.innerHTML = rate
        ratingState.style.display = "none";
        thankYouState.style.display = "block";
        
    }
}