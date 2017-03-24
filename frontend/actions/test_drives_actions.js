import * as TestDriveApi from '../util/test_drives_api_util';

export const RECEIVE_TEST_DRIVES = "RECEIVE_TEST_DRIVES";
export const RECEIVE_TEST_DRIVE = "RECEIVE_TEST_DRIVE";
export const REMOVE_TEST_DRIVE = "REMOVE_TEST_DRIVE";

export const getUserTestDrives = (uid) => dispatch => (
  TestDriveApi.getUserTestDrives(uid).then(drivesInfo => dispatch(receiveTestDrives(drivesInfo)))
);

export const createUserTestDrive = (info) => dispatch => (
  TestDriveApi.createTestDrive(info).then(newTestDrive => dispatch(receiveTestDrive(newTestDrive)))
);

export const deleteTestDrive = (ids) => dispatch => (
  TestDriveApi.deleteTestDrive(ids)//.then(deletedDrive => dispatch(removeTestDrive(deletedDrive)))
);

const receiveTestDrives = (drivesInfo) => ({
  type: RECEIVE_TEST_DRIVES,
  drives: drivesInfo
});

const receiveTestDrive = (newTestDrive) => ({
  type: RECEIVE_TEST_DRIVE,
  testDrive: newTestDrive
});

const removeTestDrive = (testDrive) => ({
  type: REMOVE_TEST_DRIVE,
  testDrive
});

