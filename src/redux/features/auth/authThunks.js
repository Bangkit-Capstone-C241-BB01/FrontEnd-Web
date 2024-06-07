import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginCustomer, loginSeller, loginAdmin, registerCustomer, registerSeller } from "./authApi";
import { setTokenCustomer, setTokenSeller, setTokenAdmin } from "../../../utils/cookies";

export const login = createAsyncThunk("auth/login", async ({ user_email, user_password, role }, { rejectWithValue }) => {
  try {
    let response;
    switch (role) {
      case "customer":
        response = await loginCustomer(user_email, user_password);
        setTokenCustomer(response.data.token);
        break;
      case "seller":
        response = await loginSeller(user_email, user_password);
        setTokenSeller(response.data.token);
        break;
      case "admin":
        response = await loginAdmin(user_email, user_password);
        setTokenAdmin(response.data.token);
        break;
      default:
        throw new Error("Invalid role");
    }
    return { token: response.data.token, role };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk("auth/register", async ({ user_name, user_email, user_password, user_role, store_name }, { rejectWithValue }) => {
  try {
    let response;
    switch (user_role) {
      case "customer":
        response = await registerCustomer(user_name, user_email, user_password);
        setTokenCustomer(response.data.token);
        break;
      case "seller":
        response = await registerSeller(user_name, user_email, user_password, store_name);
        setTokenSeller(response.data.token);
        break;
      default:
        throw new Error("Invalid role");
    }
    return { token: response.data.token, role: user_role };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
