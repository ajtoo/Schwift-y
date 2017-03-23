export const getCar = (id) => (
  $.ajax({
      url: 'api/cars/' + id
  })
);