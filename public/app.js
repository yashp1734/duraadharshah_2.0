// import express, { urlencoded } from 'express';
// import cors from 'cors';
// import { URLSearchParams } from 'url';
// const app = express();
// const port = 3000;

// app.use(cors());

// app.use(urlencoded({ extended: false}));

// app.post('/upload', function(req,res){

//     const params = new URLSearchParams({
//         secret: '6Lex35EpAAAAANMltMj0EMchbC8P2TfhyhdVbqHM',
//         response: req.body['g-recaptcha-response'],
//         remoteip: req.ip,
//     });

//     fetch('https://www.google.com/recaptcha/api/siteverify' ,{
//         method: "POST",
//         body: params,
//     })
//     .then(res => res.json())
//     .then(data => {if (data.success){
//         res.json({captchaSuccess: true});
//     }
//     else{
//         res.json({captchaSuccess: false});
//     }
// })
// });

// app.listen(port, () => {
//     console.log(`App Running On Port ${port}`);
// });

const otpInputs = document.querySelectorAll('.otp-field input');

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const currentInput = event.target;
            const maxLength = parseInt(currentInput.getAttribute('maxlength'));
            
            if (currentInput.value.length >= maxLength) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && index > 0 && !input.value) {
                otpInputs[index - 1].focus();
            }
        });
    });