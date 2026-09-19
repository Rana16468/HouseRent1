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
            query: (id) => {

                return {
                    url: `/house_list/${id}`,
                    method: "GET",
                }
            },
            providesTags: ["post"]
        }),
        getMyHouseListing: builder.query({
            query: ({ deviceId, page, limit }) => {
                return {
                    url: `/house_list/my_house_listing/${deviceId}`,
                    method: "GET",
                    params: {
                        page, limit
                    }
                }
            },
            providesTags: ["post"]
        }),
        deleteHouseListing: builder.mutation({
            query: ({ id, deviceId }) => {

                return {
                    url: `/house_list/delete_my_house_listing/${id}/${deviceId}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["post"]
        }),
        getLiveHouseListringTracking: builder.query({
            query: () => {
                return {
                    url: "/house_list/live_reasigon_requiring_attention",
                    method: "GET",
                }
            },
            providesTags: ["post"]
        })

    }),









});
export const { useHouseListingMutation,
    useGetFindByAllHouseListQuery,
    useGetSpecificHouseListQuery,
    useDeleteHouseListingMutation,
    useGetMyHouseListingQuery,
    useGetLiveHouseListringTrackingQuery
 } = AuthenticatorApi;