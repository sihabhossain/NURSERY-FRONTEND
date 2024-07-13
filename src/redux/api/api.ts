import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (_id) => ({
        url: `/product/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/product/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = baseApi;
