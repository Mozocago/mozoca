const dataquiz = [
    {
        question: "Comment appelle-t-on le petit du chat ?",
        answers: ["Chaleur", "Chalatan", "Chauve"],
        resultat: ["Haha, toi aussi hein", "Haha good for your", "Pop griii"]
    },
    {
        question: "Pourquoi les poissons ne parlent pas ?",
        answers: ["Ils ont oublié leur langue", "L’eau les empêche de respirer s’ils parlent", "Ils font la grève du silence"],
        resultat: ["Mdr, un poisson amnésique !", "Pas faux, mais bizarre...", "Solidarité aquatique !"]
    },
    {
        question: "Quel est le super-pouvoir d’une carotte ?",
        answers: ["Elle voit dans le noir", "Elle rend aimable", "Elle peut voler"],
        resultat: ["Bah oui, la vitamine A !", "C'est ce que maman disait 🤔", "Wow, super-carotte en approche !"]
    },
    {
        question: "Pourquoi les poules traversent-elles la route ?",
        answers: ["Pour voir si l’herbe est plus verte", "Pour échapper aux nuggets", "Pour rejoindre un gang de pigeons"],
        resultat: ["On ne saura jamais 😆", "Survie avant tout !", "Les pigeons vont être jaloux"]
    },
    {
        question: "Si un arbre tombe dans une forêt et que personne ne l’entend, fait-il du bruit ?",
        answers: ["Oui, mais personne ne peut le confirmer", "Non, car il est discret", "Ça dépend s’il veut attirer l’attention"],
        resultat: ["T’es philosophe ou quoi ?!", "Arbre ninja détecté", "Un arbre narcissique ? Possible !"]
    },
    {
        question: "Quel est le point commun entre une banane et un téléphone ?",
        answers: ["On peut les éplucher", "On les met à l’oreille", "Les deux finissent dans un sac"],
        resultat: ["Ah, t’as essayé d’éplucher un téléphone ?!", "Alooo, t’es là ? 🍌📞", "Eh oui, sac fourre-tout"]
    },
    {
        question: "Pourquoi les extraterrestres ne viennent pas nous voir ?",
        answers: ["Ils n’ont pas de GPS", "Ils ont vu nos vidéos TikTok", "Ils attendent la fin des promos Black Friday"],
        resultat: ["Galactique problème !", "Trop de cringe en effet...", "Ils veulent juste des bonnes affaires !"]
    },
    {
        question: "Que dit un escargot quand il roule en voiture ?",
        answers: ["Wheeeeee !", "C’est moi ou ça va trop vite ?", "Attendez-moiiii !"],
        resultat: ["Un escargot en mode turbo !", "La vitesse, c’est relatif 🐌", "Toujours en retard celui-là !"]
    }
];
		

let quizIndex = 0; // Index du quiz en cours

function controlequiz(numm, snum) {
    quizIndex = numm % dataquiz.length; // Assure que l index reste valide
    let quizData = dataquiz[quizIndex];

    // Mise à jour du numéro du quiz
    document.querySelector("#quiznum").innerText = quizIndex + 1;

    // Mise à jour de la question
    document.querySelector("#mquestion").innerText = quizData.question;

    // Effacer le résultat précédent
    let resultDiv = document.querySelector("#mresultat");
    resultDiv.innerHTML = ""; // Vide le résultat

    // Animation d’apparition du résultat
    resultDiv.style.opacity = "0"; // Cache le résultat
    resultDiv.style.transform = "scale(0.5)";

    // Mise à jour des réponses avec animation
    let answersDiv = document.querySelector("#manswers");
    answersDiv.innerHTML = ""; // Supprime les anciens boutons

    quizData.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.style.opacity = "0"; // Rendre invisible au départ
        btn.style.transform = "translateY(-20px) rotate(-10deg)";

        // Ajout d''une animation décalée
        setTimeout(() => {
            btn.style.transition = "0.5s ease-in-out";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0) rotate(0)";
        }, index * 200); // Chaque bouton apparaît avec un léger décalage

        btn.onclick = function() {
            afficherResultat(quizData.resultat, index, snum);
        };
        answersDiv.appendChild(btn);
    });
}

// Fonction pour afficher le résultat avec animation drôle
function afficherResultat(resultats, index, snum) {
    let resultDiv = document.querySelector("#mresultat");

    // Ajout d'une animation de suspense avant d'afficher le vrai résultat
    resultDiv.innerHTML = '<span style="color: blue; font-weight:bold;">🌀 Réflexion intense... 🤔</span>';
    resultDiv.style.opacity = "1";
    resultDiv.style.transform = "scale(1)";

    setTimeout(() => {
        resultDiv.innerHTML = `<span style="font-size:1.2em; animation: bounce 0.5s ease-in-out infinite alternate;">${resultats[index]}</span>`;
        resultDiv.style.color = "red";

        // Animation d’apparition drôle
        resultDiv.style.transition = "0.5s";
        resultDiv.style.transform = "rotate(5deg) scale(1.3)";
        setTimeout(() => {
            resultDiv.style.transform = "rotate(360deg) scale(1)";
        }, 300);

    }, snum * 1000);
}

// Gestion des boutons de navigation
document.querySelectorAll("#mfooter button").forEach(btn => {
    btn.addEventListener("click", function() {
        if (this.innerText === "Suivant") {
            controlequiz(quizIndex + 1, 2);
        } else if (this.innerText === "Précédent") {
            controlequiz(quizIndex - 1 + dataquiz.length, 2);
        } else if (this.innerText === "Aléatoire") {
            controlequiz(Math.floor(Math.random() * dataquiz.length), 2);
        } else if (this.innerText === "Rejouer") {
            controlequiz(quizIndex, 2);
        }
    });
});

// Initialisation du quiz
controlequiz(0, 2);
                  
