        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                document.querySelector('.profile-info').classList.add('visible');
            }, 200);
        });

const nameElement = document.getElementById('name');
        nameElement.addEventListener('mouseover', function() {
        this.classList.add('highlight');
    });
        nameElement.addEventListener('mouseout', function() {
        this.classList.remove('highlight');
    });