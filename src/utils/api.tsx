/* eslint-disable */

import { NextResponse } from "next/server";
import axios from "axios";
import config from "./config";

export const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Accept: "*/*",
    "Content-type": "application/json",
  },
});

export const apiToken = () =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
    },
  });

export const apiContact = () =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
    },
  });

export const apiAuth = () =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
      Authorization: `Bearer ${config.authorization}`,
    },
  });

export const apiChangePassword = (type: string) =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
      Authorization: `Bearer ${type}`,
    },
  });

export const apiUsersOld = (token: string) =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export const apiUsers = (token: string) =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const validateExchangeCode = () =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
    },
  });

export const apiTransactions = () =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

export const biddingDocs = (token: string) =>
  axios.create({
    baseURL: config.apiUrl,
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getUserRoles = () => {};

export const Redirection = (req: Request) => {
  let url = req.url;
  if (url.includes("/dashboard")) {
    return NextResponse.redirect("/");
  }
};


/* eslint-enable */

