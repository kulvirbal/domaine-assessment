document.querySelectorAll('.variant-swatches .swatch').forEach((swatch) => {
    swatch.addEventListener('click', function () {
        const siblings = Array.from(swatch.parentNode.children)
        .filter(sibling => sibling !== swatch); 
        siblings.forEach(sibling => {
            sibling.classList.remove('outline', 'outline-blue-1', 'outline-1',  'outline-offset-2');
        });
        this.classList.add('outline', 'outline-blue-1', 'outline-1',  'outline-offset-2');
        const productCard = this.closest('.product-card-wrapper');
        const imageElement = productCard.querySelector('img');
        const secondaryImageElement = productCard.querySelector('.secondary-image');
        const variantImage = this.getAttribute('data-variant-image');
        const secondaryVariantImage = this.getAttribute('data-variant-secondary-image');
        if (variantImage) {
            imageElement.src = variantImage;
            imageElement.srcset = `
            ${variantImage}&width=165 165w,
            ${variantImage}&width=360 360w,
            ${variantImage}&width=533 533w,
            ${variantImage}&width=720 720w,
            ${variantImage}&width=940 940w,
            ${variantImage}&width=1066 1066w
            `;
            secondaryImageElement.src = secondaryVariantImage;
            secondaryImageElement.srcset = `
            ${secondaryVariantImage}&width=165 165w,
            ${secondaryVariantImage}&width=360 360w,
            ${secondaryVariantImage}&width=533 533w,
            ${secondaryVariantImage}&width=720 720w,
            ${secondaryVariantImage}&width=940 940w,
            ${secondaryVariantImage}&width=1066 1066w
            `;
        }
    });
});