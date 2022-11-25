import React from 'react'

export default function Passed({passedData}) {
  return (
    <div>
         <>
            

            <table className='border-collapse border border-slate-500 w-[100%]'>
                <tr className='font-bold' >
                    <td className='border-slate-500 border p-[15px]'>
                        #
                    </td>

                    <td className='border-slate-500 border p-[15px]'>
                        Description
                    </td>

                    <td className='border-slate-500 border p-[15px]'>
                        Axe rule ID
                    </td>
                    <td className='border-slate-500 border p-[15px]'>
                        WCAG
                    </td>



                    <td className='border-slate-500 border p-[15px]'>
                        Count
                    </td>
                </tr>

                {
                    passedData.map((data, index) => {
                        return (
                            <>
                                <tr className={index % 2 == 0 ? 'bg-gray-300' : ''}>
                                    <td className='border-slate-500 border p-[15px]'>
                                        {index + 1}
                                    </td>

                                    <td className='border-slate-500 border  p-[15px]'>
                                        {data.description}
                                    </td>

                                    <td className='border-slate-500 border p-[15px]'>
                                        {data.id}
                                    </td>
                                    <td className='border-slate-500 border p-[15px]'>

                                        {data.tags.map((items) => {
                                            return (
                                                (<>
                                                    <div>{items} </div>
                                                </>)
                                            )
                                        })}

                                    </td>

                                    <td className='border-slate-500 border p-[15px]'>
                                        {data.nodes.length}
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    </div>
  )
}
