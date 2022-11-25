import React from 'react'

export default function Rules({ ids }) {



    return (
        <>



            <table className='w-[100%]'>
                <tr className='font-bold' >
                    <td className='border-slate-500 border  p-[15px]'>
                        #
                    </td>

                    <td className='border-slate-500 border w-1/2 p-[15px]'>
                        Rule ID
                    </td>

                    <td className='border-slate-500 border w-1/2 p-[15px]'>
                        Enabled
                    </td>
                </tr>
                {
                    ids.map((id, index) => {
                        return (
                            <>
                                <tr className={index % 2 == 0 ? 'bg-gray-300' : ''} >
                                    <td className='border-slate-500 border  p-[15px]'>
                                        {index+1}
                                    </td>

                                    <td className='border-slate-500 border w-1/2 p-[15px]'>
                                        {id}
                                    </td>

                                    <td className='border-slate-500 border w-1/2 p-[15px]'>
                                        True
                                    </td>
                                </tr>


                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
