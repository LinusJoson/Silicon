
// /\_/\   ||o//     
//(='.'=)  ||//________________________________________________________________________
//(")__(") |//|Författare: Linus Johansson | Filnamn: index.html | Datum: 2024-11-10  |
// -------// |________________________________________________________________________| 


const questions = document.querySelectorAll('.question');



questions.forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;

        if(parent.classList.contains('open')) {
            parent.classList.remove('open');
            
            return
        }
        
        document.querySelectorAll('.faq-card').forEach(answer => {
            answer.classList.remove('open');

        })

        parent.classList.toggle('open');
    })

 }) 