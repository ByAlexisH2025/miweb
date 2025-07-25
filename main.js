// Filtros del portafolio
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            projects.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mensaje contacto
    const form = document.getElementById('form-contacto');
    const msg = document.getElementById('form-msg');
    if(form){
        form.addEventListener('submit', function(e){
            setTimeout(function(){
                msg.innerHTML = "<span style='color:#c0392b;'>¡Mensaje enviado! Pronto te contacto.</span>";
                form.reset();
            }, 1000);
        });
    }
});
