"use client";

import { type AxiosError } from "axios";
import moment from "moment";

import { type ErrorApiResponse } from "@/types/error-api-response";
import { type AllLeads, type Lead } from "@/types/lead";
import { API_URL } from "@/lib/env-config";

import axiosInstance from "./axios.instance";

function GetLeadUrl(): string {
  // const token = localStorage.getItem("custom-auth-token");
  // if (token) {
  //   return `${API_URL}lead`;
  // }

  return `${API_URL}lead-public`;
}

export async function findAllLeads(
  createdAt?: Date | null,
  pageNumber = 1,
  search: string | null = "",
): Promise<AllLeads> {
  try {
    let url = `${GetLeadUrl()}?page=${String(pageNumber)}&pageLength=12`;
    if (createdAt) {
      url += `&createdAt=${String(moment(createdAt).format("YYYY-MM-DD"))}`;
    }
    if (search && search.length > 0) {
      url += `&search=${String(search)}`;
    }
    const response = await axiosInstance.get<AllLeads>(url);
    return response.data; // Return only the data from the response
  } catch (error) {
    throw new Error(
      (error as AxiosError<ErrorApiResponse>).response?.data?.message ??
        (error as AxiosError).message ??
        "Failed in findAllLeads",
    );
  }
}

export async function findLeadById(id: string): Promise<Lead> {
  try {
    let url = `${GetLeadUrl()}/${id}`;
    const response = await axiosInstance.get<Lead>(url);
    return response.data;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ErrorApiResponse>).response?.data?.message ??
        (error as AxiosError).message ??
        "Failed in findLeadById",
    );
  }
}

export async function postLead(lead: Lead): Promise<Lead> {
  try {
    const response = await axiosInstance.post<Lead>(`${API_URL}lead/`, lead);
    return response.data;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ErrorApiResponse>).response?.data?.message ??
        (error as AxiosError).message ??
        "Failed in postLead",
    );
  }
}

export async function patchLead(id: string): Promise<Lead> {
  try {
    const response = await axiosInstance.patch<Lead>(`${GetLeadUrl()}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ErrorApiResponse>).response?.data?.message ??
        (error as AxiosError).message ??
        "Failed in patchLead",
    );
  }
}
