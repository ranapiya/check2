import React from 'react'
import { Input } from './ui/input'
import { gql, useQuery } from '@apollo/client'


const QUERY = gql`
query Simulate_swap($assetIn: String!, $amountIn: String!, $assetOut: String!, $minAmountOut: String!, $swaps: [String!]) {
  router {
    simulate_swap(asset_in: $assetIn, amount_in: $amountIn, asset_out: $assetOut, min_amount_out: $minAmountOut, swaps: $swaps) {
      amount_out
      asset_out
    }
  }
}
`

const InputPrice = () => {
  const { data, loading, error } = useQuery(QUERY, { variables: { "receivingToken": "nibbi", "receivingAmount": "1000", "sendingToken": "fundenom", "sendingAmount": "1200" } })


  return (
    <Input className="w-[200px] h-[60px] bg-gradient-to-r from-[#10122e] to-[#1c2056] text-white rounded-full flex items-center justify-between px-4 shadow-lg" placeholder="0.0" />
  )
}

export default InputPrice