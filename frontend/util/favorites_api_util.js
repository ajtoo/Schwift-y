export const favorite = (link) => (
  $.ajax({
    url: 'api/favorites',
    method: 'POST',
    data: link
  })
);

//having the user id be the :id field even though unnecessary (no time to fix enpoint)

export const unfavorite = (link) => (
  $.ajax({
    url: 'api/favorites/' + link.user_id,
    method: 'DELETE',
    data: link
  })
);

export const getFavorite = (link) => (
  $.ajax({
    url: 'api/favorites/' + link.user_id,
    data: link
  })
);