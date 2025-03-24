document.addEventListener('DOMContentLoaded', function() {
    const modals = {
        wearResistant: document.getElementById("modal-wear-resistant"),
        thermalBarrier: document.getElementById("modal-thermal-barrier"),
        antifriction: document.getElementById("modal-antifriction"),
        heatResistant: document.getElementById("modal-heat-resistant"),
        corrosionResistant: document.getElementById("modal-corrosion-resistant"),
        electricallyConductive: document.getElementById("modal-electrically-conductive"),
        overlay: document.getElementById("modal-overlay")
    };

    for (const key in modals) {
        if (!modals[key]) {
            console.error(`Элемент не найден: ${key}`);
            return;
        }
    }

    document.getElementById("modal-wear-resistant-btn")?.addEventListener("click", () => toggleModal(modals.wearResistant));
    document.getElementById("modal-thermal-barrier-btn")?.addEventListener("click", () => toggleModal(modals.thermalBarrier));
    document.getElementById("modal-antifriction-btn")?.addEventListener("click", () => toggleModal(modals.antifriction));
    document.getElementById("modal-heat-resistant-btn")?.addEventListener("click", () => toggleModal(modals.heatResistant));
    document.getElementById("modal-corrosion-resistant-btn")?.addEventListener("click", () => toggleModal(modals.corrosionResistant));
    document.getElementById("modal-electrically-conductive-btn")?.addEventListener("click", () => toggleModal(modals.electricallyConductive));

    modals.overlay.addEventListener("click", closeModal);

    function toggleModal(modal) {
        modal.style.display = "block";
        modals.overlay.style.display = "block";
        disableScroll();
    }

    function closeModal() {
        for (const key in modals) {
            if (key !== 'overlay') {
                modals[key].style.display = "none";
            }
        }
        modals.overlay.style.display = "none";
        enableScroll();
    }

    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = "";
    }
});