export const getAllCars = () => (
  $.ajax({
    url: 'api/cars'
  })
);