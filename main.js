const ratingContainer = document.getElementById('rating');
const thanksModal = document.getElementById('thanks-modal');
const submitBtn = document.getElementById('submit-btn');
let rating = '';
ratingContainer.addEventListener('click', (e) =>{
    return rating = e.target.innerText;
})

submitBtn.addEventListener('click', ()=>{
thanksModal.style.display = 'block';
console.log(rating.length)
thanksModal.innerHTML = `
<center>
<img src="images/illustration-thank-you.svg" alt="">
<p class="selected-rating">
You selected ${rating && rating.length < 2 ?  rating : 'nothing'} out of 5
</p>
<h2>${rating && rating.length < 2 ? 'Thank you!' : ''}</h2>
<p>
${rating && rating.length < 2 ? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" : 'Please go back and select a rating.'}
</p>
${rating && rating.length < 2 ? '' : "<button class='back-btn' id='back-btn'>Back</button>"}
</center>
`
if(!rating || rating.length == 0 || rating.length > 1){
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', ()=>{
        thanksModal.style.display = 'none'
    })
}

})