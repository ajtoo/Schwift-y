export const getAllCars = () => (
  $.ajax({
    url: 'api/cars'
  })
);

export const search = (searchTags, location) => {
  let params = {tags: searchTags, location};
  return (
    $.ajax({
      url: 'api/cars',
      data: params
    })
  ); 
}