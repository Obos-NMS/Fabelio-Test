'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Products', [
    {
      product_name: "Sofa 2 dudukan Vienna",
      image: "https://fabelio.com/media/catalog/product/w/i/wina_2_seater_sofa__custard__1_1.jpg",
      price: 3899000,
      material: 'solid wood',
      dimension: "162 x 95 x 86",
      colours: "custard vienna, graphite vienna, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa Tempat Tidur Mochi",
      image: "https://fabelio.com/media/catalog/product/r/2/r2710.jpg",
      price: 3500000,
      material: "solid wood",
      dimension: "160 x 95 x 90",
      colours: "custard vienna, graphite vienna, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 2 dudukan Zelado",
      image: "https://fabelio.com/media/catalog/product/z/e/zelado-2-seater-sofa---custard-01.jpg",
      price: 4299000,
      material: "hollow steel",
      dimension: "162 x 95 x 86",
      colours: "graphite vienna, teal vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 2 dudukan Toril",
      image: "https://fabelio.com/media/catalog/product/t/o/Toril_2_Seater_Sofa_(Paradise)_1.jpg",
      price: 2899000,
      material: "solid wood",
      dimension: "160 x 95 x 90",
      colours: "blue jay, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa Tempat Tidur Deacon",
      image: "https://fabelio.com/media/catalog/product/d/e/deacon_white_1_1_1.jpg",
      price: 3299000,
      material: "hollow steel",
      dimension: "150 x 90 x 80",
      colours: "custard vienna, graphite vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa Java",
      image: "https://fabelio.com/media/catalog/product/t/a/Taby_Java_2_Seater_Living_Set_(Sugar)_1.jpg",
      price: 3869100,
      material: "solid wood",
      dimension: "142 x 90 x 80",
      colours: "blue jay, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 1 dudukan Hughes",
      image: "https://fabelio.com/media/catalog/product/h/u/Hughes_Armchair_(Wood)_0.jpg",
      price: 2500000,
      material: "solid wood",
      dimension: "90 x 82 x 58",
      colours: "custard vienna, graphite vienna, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 1 dudukan Taby",
      image: "https://fabelio.com/media/catalog/product/t/a/Taby_Armchair_(Jezebel)_1.jpg",
      price: 3869100,
      material: "solid wood",
      dimension: "90 x 82 x 58",
      colours: "blue jay, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 1 dudukan Zoey",
      image: "https://fabelio.com/media/catalog/product/k/u/Kursi_Zoey_Armchair_(Brown)_0.jpg",
      price: 2399000,
      material: "hollow steel",
      dimension: "90 x 82 x 58",
      colours: "brown vienna, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      product_name: "Sofa 1 dudukan Vienna",
      image: "https://fabelio.com/media/catalog/product/w/i/wina_armchair__graphite__1_1.jpg",
      price: 2199000,
      material: "solid wood",
      dimension: "90 x 82 x 58",
      colours: "custard vienna, graphite vienna, ruby vienna",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    
  ])
},

down: async (queryInterface, Sequelize) => {
  return await queryInterface.bulkDelete('Products', null, {})
}
};
