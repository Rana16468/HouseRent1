import { baseApi } from "../api/baseApi";







const AuthenticatorApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        houseListing: builder.mutation({
            query: (userInfo) => ({
                url: "/house_list/",
                method: 'POST',
                body: userInfo
            }),
            invalidatesTags: ['post']

        }),
        getFindByAllHouseList: builder.query({
            query: (data) => {
                return {
                    url: "/house_list/find_by_house_list",
                    method: "GET",
                    params: data
                };
            },
            providesTags: ["post"],
        }),
        getSpecificHouseList: builder.query({
            query:(id)=>{

                return {
                    url:`/house_list/${id}`,
                    method: "GET",
                }
            },
            providesTags: ["post"]
        })
    }),









});
export const { useHouseListingMutation,
     useGetFindByAllHouseListQuery ,
    useGetSpecificHouseListQuery} = AuthenticatorApi;