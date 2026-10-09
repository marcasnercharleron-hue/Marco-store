"use strict";

// ========================================
// 1. NIMEWO WHATSAPP MAGAZEN AN
// ========================================

// Ranplase nimewo egzanp lan ak nimewo pa w.
// Ekri kòd peyi a ansanm ak nimewo a.
// Pa mete siy +, espas oswa tirè.
//
// Egzanp fòma pou Ayiti: 509XXXXXXXX

const WHATSAPP_NUMBER = "50948107188";


// ========================================
// 2. NAVIGASYON ANT 3 PAJ YO
// ========================================

function showPage(pageId) {
    const selectedPage = document.getElementById(pageId);

    if (!selectedPage) {
        return;
    }

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    selectedPage.classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(function(button) {
        button.classList.toggle(
            "active",
            button.dataset.page === pageId
        );
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Konekte bouton meni yo

document.querySelectorAll(".nav-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        showPage(button.dataset.page);
    });
});


// ========================================
// 3. VERIFYE NIMEWO WHATSAPP LA
// ========================================

function isWhatsAppNumberConfigured() {
    if (
        !/^\d{8,15}$/.test(WHATSAPP_NUMBER) ||
        WHATSAPP_NUMBER === "50948107188"
    ) {
        alert(
            "Broh ! Mete vrè nimewo WhatsApp ou nan fichye script.js la avan."
        );

        return false;
    }

    return true;
}


// ========================================
// 4. OUVRI WHATSAPP AK YON MESAJ
// ========================================
function openWhatsApp(message) {
    const numero = WHATSAPP_NUMBER.trim();

    if (!/^\d{8,15}$/.test(numero)) {
        alert("Verifye nimewo WhatsApp la nan script.js");
        return;
    }

    const url = "https://api.whatsapp.com/send?phone="
        + numero
        + "&text="
        + encodeURIComponent(message);

    window.location.href = url;
}




// ========================================
// 5. KÒMANN YON PWODWI
// ========================================

function orderProduct(productName, price) {
    const message =
        "Bonjour Marco$tore ! 👋\n\n" +
        "Je souhaite commander un article de votre boutique.\n\n" +
        "🛍️ Article : " + productName + "\n" +
        "💰 Prix affiché : " + price + "\n\n" +
        "Pouvez-vous me confirmer sa disponibilité ?\n" +
        "Merci !";

    openWhatsApp(message);
}


// ========================================
// 6. KONTAK JENERAL
// ========================================

function contactWhatsApp() {
    const message =
        "Bonjour Marco$tore ! 👋\n\n" +
        "Je vous contacte depuis votre site internet.\n" +
        "J'aimerais obtenir des informations sur vos articles.\n\n" +
        "Merci de me répondre.";

    openWhatsApp(message);
}

/* =========================
   QR CODE MARCO$TORE
========================= */

// Mete vrè lyen GitHub Pages Marco$tore la isit la.
const marcoStoreURL = "https://TON-UTILISATEUR.github.io/TON-REPO/";

const qrContainer = document.getElementById("marco-qrcode");

if (qrContainer && typeof QRCode !== "undefined") {
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: marcoStoreURL,
        width: 220,
        height: 220,
        colorDark: "#111111",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });
}
