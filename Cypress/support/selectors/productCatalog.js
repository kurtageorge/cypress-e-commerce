// selectors.js

export const productCatalogSelectors = {
    carousel: 'h2.h1', // Updated selector for the carousel
    discountBanner: 'div.text-center.md\\:text-left.px-2 > h2',
    couponCode: 'div.text-center.md\\:text-left.px-2 > p > span.font-bold',
    shopKids: 'span:contains("Shop kids")',
    shopWomen: 'h3.h4.uppercase.mt-1.mb-1', // Updated selector for Women shoes collection
    shopMen: 'span:contains("Shop men")',
    featuredProducts: 'h3.mt-3.mb-3.text-center.uppercase.h5.tracking-widest',
    footerIcons: '.card-icons.flex.justify-center.space-x-1.md\\:justify-start'
};
