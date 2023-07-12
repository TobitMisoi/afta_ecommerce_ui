// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

//  GET /api/currentUser
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

//  POST /logout
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

// POST /login
export async function login(body: any, options?: { [key: string]: any }) {
  console.log(body)
  return request(API_DOMAIN + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// POST /signup
export async function signup(body: any, options?: { [key: string]: any }) {
  console.log(body)
  return request(API_DOMAIN + '/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


