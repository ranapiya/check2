"use client"
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState } from "react"

export function PopOver() {
    const [inputValue, setInputValue] = useState("")




    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className='bg-gradient-to-r from-[#1e1e2d] to-[#501154] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-32'>Slippage</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Settings</h4>
                        <p className="text-sm text-muted-foreground">
                            Slippage Tolerance
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <Button onClick={() => setInputValue("0.1%")}>0.1%</Button>
                        <Button onClick={() => setInputValue("0.5%")}>0.5%</Button>
                        <Button onClick={() => setInputValue("1.0%")}>1.0%</Button>
                        <div className="grid grid-cols-3 items-center gap-4">
                            {/* <Label htmlFor="maxHeight">Max. height</Label> */}
                            <Input
                                id="maxHeight"
                                defaultValue="0.1%"
                                className="col-span-5 h-8 ml-1"
                                value={inputValue}

                            />
                        </div>


                    </div>

                </div>
            </PopoverContent>
        </Popover>
    )
}