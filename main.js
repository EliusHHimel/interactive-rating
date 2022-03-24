const ratingContainer = document.getElementById('rating');
const thanksModal = document.getElementById('thanks-modal');
const submitBtn = document.getElementById('submit-btn');
let rating = '';
ratingContainer.addEventListener('click', (e) =>{
    return rating = e.target.innerText;
})

submitBtn.addEventListener('click', ()=>{
thanksModal.style.display = 'block';
thanksModal.innerHTML = `
<center>
<img src="images/illustration-thank-you.svg" alt="">
<p class="selected-rating">
You selected ${rating ?  rating : 'nothing'} out of 5
</p>
<h2>${rating ? 'Thank you!' : ''}</h2>
<p>
${rating ? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" : 'Please go back and select a rating.'}
</p>
${rating ? '' : "<button class='back-btn' id='back-btn'>Back</button>"}
</center>
`
const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', ()=>{
    thanksModal.style.display = 'none'
})
})