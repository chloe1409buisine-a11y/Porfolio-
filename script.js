// Affiche automatiquement l'année actuelle dans le pied de page.
// Cela évite de devoir modifier l'année manuellement chaque année.
document.getElementById("year").textContent = new Date().getFullYear();