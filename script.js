// script.js
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        // Clear any previously selected cell
        document.querySelectorAll('.cell').forEach(c => c.classList.remove('selected'));
        // Mark the clicked cell as selected
        this.classList.add('selected');
    });
});
