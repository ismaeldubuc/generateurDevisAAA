(function () {
  const modelePrix = {
    Fabia: 15000,
    Octavia: 22000,
    Karoq: 28000,
    Kodiaq: 32000,
    Superb: 35000,
    Enyaq: 40000
  };

  const modeleSelect = document.getElementById('modele');
  const achatTypeSelect = document.getElementById('achatType');
  const prixInput = document.getElementById('prix');
  const tvaInput = document.getElementById('tva');

  function updatePrix() {
    const modele = modeleSelect.value;
    const achatType = achatTypeSelect.value;
    let prix = modelePrix[modele] || 0;

    if (achatType === 'leasing') {
      prix = prix / 36; 
    }

    prixInput.value = prix.toFixed(2);
    tvaInput.value = (prix * 0.2).toFixed(2);
  }

  modeleSelect.addEventListener('change', updatePrix);
  achatTypeSelect.addEventListener('change', updatePrix);

  function annulerImpression() {
    const outputSection = document.getElementById('output');
    outputSection.innerHTML = '';
    outputSection.classList.remove('visible');
    document.getElementById('quoteForm').reset();
  }
  
  window.annulerImpression = annulerImpression;

  document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const entreprise = document.getElementById('entreprise').value;
    const modele = modeleSelect.value;
    const prix = prixInput.value;
    const tva = tvaInput.value;
    const description = document.getElementById('description').value;
    const achatType = achatTypeSelect.value;

    // Calcul du total
    const total = (parseFloat(prix) + parseFloat(tva)).toFixed(2);

    // Génération du HTML pour le devis
    const output = `
      <div class="logo-container">
        <img src="logo_skoda.png" alt="Logo Skoda" width="100" height="100">
      </div>
      <h2>Devis personnalisé - Voiture SKODA</h2>

      <h3>Informations de l'entreprise</h3>
      <p><strong>Nom :</strong> Škoda Villemomble - VGRF Grand Paris </p>
      <p><strong>Adresse :</strong> 113 Av. de Rosny, 93250 Villemomble</p>
      <p><strong>Téléphone :</strong> 09 69 39 09 04</p>
      <p><strong>Email :</strong> contact@skoda.fr</p>

      <hr>

      <h3>Informations client</h3>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Prénom :</strong> ${prenom}</p>
      ${entreprise ? `<p><strong>Entreprise :</strong> ${entreprise}</p>` : ''}

      <hr>

      <h3>Détails du devis</h3>
      <p><strong>Modèle :</strong> Skoda ${modele}</p>
      <p><strong>Type d'achat :</strong> ${achatType === 'leasing' ? 'Leasing (36 mois)' : 'Vente'}</p>
      <p><strong>Description :</strong> ${description}</p>
      <p><strong>Prix HT :</strong> ${prix} €</p>
      <p><strong>TVA (20%) :</strong> ${tva} €</p>
      <p><strong>Montant total TTC :</strong> ${total} €</p>
      <p><em>Date :</em> ${new Date().toLocaleDateString('fr-FR')}</p>

      <button class="no-print" onclick="window.print()">Imprimer</button>
      <button class="no-print" onclick="annulerImpression()">Annuler</button>
    `;

    const outputSection = document.getElementById('output');
    outputSection.innerHTML = output;
    outputSection.classList.add('visible');
  });
  
  updatePrix();
})();