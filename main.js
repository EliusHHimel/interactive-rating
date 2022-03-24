//Getting the dom elements
const ratingContainer = document.getElementById('rating');
const thanksModal = document.getElementById('thanks-modal');
const submitBtn = document.getElementById('submit-btn');
let rating = '';

// Get the rating that user has selected
ratingContainer.addEventListener('click', (e) =>{
    return rating = e.target.innerText;
})

// Submit the rating and show thanks message
submitBtn.addEventListener('click', ()=>{
thanksModal.style.display = 'block';
thanksModal.innerHTML = `
<center>
<img src="images/illustration-thank-you.svg" alt="">
<p class="selected-rating">
You selected ${rating && rating.length < 2 ?  rating : 'nothing'} out of 5
</p>
<h2>${rating && rating.length < 2 ? 'Thank you!' : ''}</h2>
<p class="description">
${rating && rating.length < 2 ? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" : 'Please go back and select a rating.'}
</p>
${rating && rating.length < 2 ? '' : "<button class='back-btn' id='back-btn'>Back</button>"}
</center>
`
// If user doesn't select any rating or click on the whole parent element then show error message.
if(!rating || rating.length == 0 || rating.length > 1){
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', ()=>{
        thanksModal.style.display = 'none'
    })
}
})