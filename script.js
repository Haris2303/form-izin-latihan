const scriptURL = 'https://script.google.com/macros/s/AKfycbzXfnEf-znDw0mIpBQG53ayfJ-nlEIamzvp2kwq3uEcFZXtQQEnqWSvvuRBccxkj66qnQ/exec'
const form = document.forms['form-izin']

form.addEventListener('submit', e => {
    e.preventDefault()
    const btnKirim = document.querySelector('.btn-kirim')
    const btnLoading = document.querySelector('.btn-loading')
    const alert = document.querySelector('.alert')
    btnKirim.classList.toggle('d-none')
    btnLoading.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response)
            alert.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            btnLoading.classList.toggle('d-none')
            form.reset()
            const btnClose = document.querySelector('.btn-close');
            btnClose.addEventListener('click', function() {
                window.location.reload();
            })
        })
        .catch(error => alert('Error!', error.message))
})