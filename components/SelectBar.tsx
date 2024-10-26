import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { gql, useQuery } from "@apollo/client"
import { useState } from "react"


const QUERY = gql`
query Token {
    token {
      token_metadatas {
        coinDecimal
        displayName
        tokenId
        description
        image
        price
      }
    }
  }
`



export const SelectBar = () => {
    const { data, loading, error } = useQuery(QUERY)

    const [selectValue, setSelectValue] = useState<string>()


    return (
        <Select>
            <SelectTrigger className="w-[220px] h-[60px] bg-gradient-to-r from-[#10122e] to-[#1c2056] text-white rounded-full flex items-center justify-between px-4 shadow-lg">
                <div className="flex items-center">
                    {/* Placeholder or Selected Token */}
                    <SelectValue placeholder="Select Token" />
                </div>
                <div className="text-sm text-gray-400">$1.00</div>  {/* Add a default value */}
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data?.token.token_metadatas.map((elt: any) =>
                    (
                        <SelectItem onClick={() => setSelectValue(elt.tokenId)} value={elt.tokenId} key={elt.tokenId}>{elt.displayName || "Select token"}</SelectItem>
                    )
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}