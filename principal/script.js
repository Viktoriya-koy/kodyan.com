// =============================================
// 1. ESPERAR A QUE LA PÁGINA CARGUE COMPLETA
// =============================================

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // 2. ELEMENTOS DEL DOM
    // =============================================

    const livingImage = document.getElementById('living-image');
    const areas = document.querySelectorAll('area');

    // =============================================
    // 3. EFECTO HOVER: Iluminar la imagen al pasar
    //    el mouse por encima de cada zona
    // =============================================

    areas.forEach(area => {
        area.addEventListener('mouseenter', function () {
            // Eliminar cualquier clase previa
            livingImage.className = '';
            // Añadir la clase correspondiente al pilar
            const pilar = this.dataset.pilar;
            if (pilar) {
                livingImage.classList.add(`hover-${pilar}`);
            }
        });

        area.addEventListener('mouseleave', function () {
            // Quitar la clase al salir
            livingImage.className = '';
        });
    });

    // =============================================
    // 4. EFECTO CLICK: Feedback visual al hacer clic
    // =============================================

    areas.forEach(area => {
        area.addEventListener('click', function (e) {
            // Pequeña animación de "pulse" en la imagen
            livingImage.style.transition = 'transform 0.1s ease';
            livingImage.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                livingImage.style.transform = 'scale(1)';
            }, 150);

            // (Opcional) Mostrar un mensaje en consola
            const pilar = this.dataset.pilar;
            console.log(`🔗 Navegando a Kodyan ${pilar.toUpperCase()}`);
        });
    });

    // =============================================
    // 5. (OPCIONAL) MENSAJE DE BIENVENIDA EN CONSOLA
    //    Para que sepas que el script funciona
    // =============================================

    console.log('🐙 ¡Bienvenida a Kodyan! El living interactivo está listo.');
    console.log('📌 Haz clic en las zonas para explorar cada pilar.');
});
