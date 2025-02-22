const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll('.faq-answer').forEach(item => item.style.maxHeight = null);
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});