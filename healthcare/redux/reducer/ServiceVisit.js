import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/api';
import {apiConstants} from '../constant/apiConstant';

export const getLoginDetails = createAsyncThunk(
  'LoginSlice/getLoginDetails',
  async (formBody, {dispatch}) => {
    console.log('hello', formBody);
    const response = await api.post(
      apiConstants.login.loginCredentials,
      formBody,
    );
    const data = response.data;
    dispatch(setCountries(data));
  },
);

export const getRegisterDetails = createAsyncThunk(
  'LoginSlice/getLoginDetails',
  async (formBody, {dispatch}) => {
    const response = await api.post(
      apiConstants.login.registerValidate,
      formBody,
    );
    const data = response.data;
    dispatch(setCountries(data));
  },
);

export const loginApi = createSlice({
  name: 'register',
  initialState: {
    login: [],
    register: [],
  },

  reducers: {
    setLoginDetails: (state, action) => {
      state.login = action.payload;
    },
    setRegisterDetails: (state, action) => {
      state.register = action.payload;
    },
  },
});

export const {setLoginDetails, setRegisterDetail} = loginApi.actions;

export default loginApi.reducer;
