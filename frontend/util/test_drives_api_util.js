export const getUserTestDrives = (uid) => (
  $.ajax({
    url: 'api/test_drives/' + uid
  })
);

export const createTestDrive = (info) => (
  $.ajax({
    url: 'api/test_drives',
    method: 'POST',
    data: {info}
  })
);

export const deleteTestDrive = (info) => (
  $.ajax({
    url: 'api/test_drives/' + info.car_id,
    method: 'DELETE',
    data: {user_id: info.uid}
  })
)