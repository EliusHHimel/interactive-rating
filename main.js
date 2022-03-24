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
You selected ${rating} out of 5
</p>
<h2>Thank you!</h2>
<p>
We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!
</p>
</center>
`
})