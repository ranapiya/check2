"use client"
import React, { useState } from 'react';
import { SelectBar } from './SelectBar';
import { Input } from './ui/input';
import { ArrowDown } from 'lucide-react';
import InputPrice from './InputPrice';

function CentreContainer() {
    const [inputValue, setInputVaue] = useState()

    const InputHandler = (e: any) => {
        const result = e.target.value
        setInputVaue(result)
        e.preventDefault()

    }

    return (

        < div className="flex justify-center items-center mt-14" >

            <div className="flex flex-col p-6 w-3/6 max-w-4xl bg-[#0f1e2d] border border-gray-800 rounded-lg shadow-lg space-y-8">
                {/* Top section with select and input */}
                <div className="flex gap-5 justify-between items-center">
                    <SelectBar ></SelectBar>
                    <Input type='text' onChange={(e) => InputHandler} className="w-[200px] h-[60px] bg-gradient-to-r from-[#10122e] to-[#1c2056] text-white rounded-full flex items-center justify-between px-4 shadow-lg" placeholder="0.0" value={inputValue} />
                </div>



                {/* Arrow */}
                <div className="flex justify-center items-center">
                    <div className="relative flex items-center justify-center">
                        <div className="h-16 w-16 bg-gradient-to-b from-[#1e1e2d] to-[#11e31f] rounded-full shadow-lg flex items-center justify-center">
                            <div className="h-12 w-12 bg-[#1e1e3f] rounded-full shadow-lg flex items-center justify-center">
                                <ArrowDown className="text-white" height={30} width={30} />
                            </div>
                        </div>
                    </div>
                </div>





                {/* Bottom section with select and input */}
                <div className="flex gap-5 justify-between items-center">
                    <SelectBar />
                    <div>
                        <Input type='text' onChange={(e) => InputHandler} className="w-[200px] h-[60px] bg-gradient-to-r from-[#10122e] to-[#1c2056] text-white rounded-full flex items-center justify-between px-4 shadow-lg" placeholder="0.0" value={inputValue} />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default CentreContainer;