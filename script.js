document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const entreprise = document.getElementById('entreprise').value;
  const modele = document.getElementById('modele').value;
  const prix = document.getElementById('prix').value;
  const description = document.getElementById('description').value;

  const output = `
    <div class="logo-container">
      <img src="logo_skoda.png" alt="Logo Skoda" width="100" height="100">
    </div>
    <h2>Devis personnalisé - Voiture SKODA</h2>

    <h3>Informations de l'entreprise</h3>
    <p><strong>Nom :</strong> Le Continent</p>
    <p><strong>Adresse :</strong> 27 Bis Rue du Progrès, 93100 Montreuil</p>
    <p><strong>Numéro SIRET :</strong> 493 361 372 00011</p>
    <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
    <p><strong>Email :</strong> contact@lecontinent.fr</p>

    <hr>

    <h3>Informations client</h3>
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Prénom :</strong> ${prenom}</p>
    ${entreprise ? `<p><strong>Entreprise :</strong> ${entreprise}</p>` : ''}

    <hr>

    <h3>Détails du devis</h3>
    <p><strong>Modèle :</strong> Skoda ${modele}</p>
    <p><strong>Description :</strong> ${description}</p>
    <p><strong>Montant estimé :</strong> ${parseFloat(prix).toFixed(2)} €</p>
    <p><em>Date :</em> ${new Date().toLocaleDateString('fr-FR')}</p>

    <button class="no-print" onclick="window.print()">Imprimer</button>
    <button class="no-print" onclick="annulerImpression()">Annuler</button>
  `;

  const outputSection = document.getElementById('output');
  outputSection.innerHTML = output;
  outputSection.classList.add('visible');
});

function annulerImpression() {
  const outputSection = document.getElementById('output');
  outputSection.innerHTML = '';
  outputSection.classList.remove('visible');
  document.getElementById('quoteForm').reset();
} 