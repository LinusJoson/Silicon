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

    //     document.querySelectorAll('answer').forEach(answer => {
    //         answer.classList.remove('open');
    //     })
                
    //     const answer = parent.querySelector('.answer');
    //     answer.classList.toggle('open');
    //     // answer.classList.toggle('open');
        
    // })
    
 }) 