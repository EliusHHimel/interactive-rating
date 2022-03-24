const t = `You selected <!-- Add rating here --> out of 5

Thank you!

We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!`

const ratingContainer = document.getElementById('rating');
const thanksModal = document.getElementById('thanks-modal');
const submitBtn = document.getElementById('submit-btn');
let rating = '';
ratingContainer.addEventListener('click', (e) =>{
    return rating = e.target.innerText;
})

submitBtn.addEventListener('click', ()=>{
thanksModal.style.display = 'block';
thanksModal.innerHTML = `<p>
You selected ${rating} out of 5
<br>
Thank you!
<br>
We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!
</p>
<button class='ok-btn' id='ok-btn'>OK</button>
`
const okBtn = document.getElementById('ok-btn');
okBtn.addEventListener('click', ()=>{
    thanksModal.style.display = 'none'
})
})