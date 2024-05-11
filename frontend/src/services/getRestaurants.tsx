/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';

export default function getRestaurant(id: number) {
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR( id ? `${process.env.apiUrl}/api/restaurants/${id}` : null,
    fetcher, { revalidateOnFocus: false }
  )

  return { restaurants: data, isLoading: !error && !data, isError: error }
}