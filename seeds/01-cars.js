exports.seed = async function (knex) {
  await knex('cars').truncate();

  await knex('cars').insert([
    {
      VIN: '4Y1SL65848Z411439',
      make: 'Toyota',
      model: 'Camry',
      mileage: 140345,
      transmission: 'Automatic',
      titleStatus: 'salvage'
    },
    {
      VIN: '1M8GDM9A_KP042788',
      make: 'Tesla',
      model: 'Model 3',
      mileage: 10345,
      transmission: 'Automatic',
      titleStatus: 'clean'
    },
    {
      VIN: 'WP0ZZZ99ZTS392124',
      make: 'Duesenberg',
      model: 'Model A',
      mileage: 340298,
      transmission: 'Manual',
      titleStatus: 'clean'
    }
  ]);
};
