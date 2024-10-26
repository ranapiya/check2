"use client"
import {
    Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { gql, useQuery } from "@apollo/client"
import { useState } from "react"



const QUERY = gql`
        query All_chain_uids {
            chains {
              all_chains {
                factory_address
                chain_uid
                display_name
                logo
              }
            }
          }
  `

export const Dropdown = () => {

    const { data, loading, error } = useQuery(QUERY)

    const [dropdownValue, setDropdownValue] = useState<string>()


    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='bg-gradient-to-r from-[#1e1e2d] to-[#53175e] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-32 ml-[-100px]'>{dropdownValue || "Choose chain"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    {data?.chains.all_chains.map((elt: any) => (
                        <DropdownMenuItem key={elt.chain_uid} onClick={() => setDropdownValue(elt.chain_uid)}>
                            <Settings className="mr-2 h-4 w-4" />
                            <span key={elt.chain_uid}>{elt.chain_uid}</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
