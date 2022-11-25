import React from 'react'
import Failed from '../Failed/Failed'

export default function Violation({ violationData }) {

    // console.log(violationData)

    return (
        <>
            <div className='text-[30px] font-bold mt-4 italic underline'>
                <span className='text-yellow'>{violationData.length}</span> violations found
            </div>

            <div className='shadow-md shadow-slate-300 border border-slate-500 p-4 rounded-[5px] overflow-scroll md:overflow-none'>
                <table className='border-collapse border border-slate-400 w-[100%] '>
                    <tr className='font-bold rounded-[20px]' >
                        <td className='border-slate-400 border p-[15px]'>
                            #
                        </td>

                        <td className='border-slate-400 border p-[15px]'>
                            Description
                        </td>

                        <td className='border-slate-400 border p-[15px]'>
                            Axe rule ID
                        </td>
                        <td className='border-slate-400 border p-[15px]'>
                            WCAG
                        </td>

                        <td className='border-slate-400 border p-[15px]'>
                            Impact
                        </td>

                        <td className='border-slate-400 border p-[15px]'>
                            Count
                        </td>
                    </tr>

                    {
                        violationData.map((data, index) => {
                            return (
                                <>
                                    <tr className={index % 2 == 0 ? 'bg-gray-300' : ''}>
                                        <td className='border-slate-400 border p-[15px]'>
                                            {index + 1}
                                        </td>

                                        <td className='border-slate-400 border  p-[15px]'>
                                            {data.description}
                                        </td>

                                        <td className='border-slate-400 border p-[15px]'>
                                            {data.id}
                                        </td>
                                        <td className='border-slate-400 border p-[15px]'>

                                            {data.tags.map((items) => {
                                                return (
                                                    (<>
                                                        <div>{items} </div>
                                                    </>)
                                                )
                                            })}

                                        </td>

                                        <td className='border-slate-400 border p-[15px]'>
                                            {data.impact}
                                        </td>

                                        <td className='border-slate-400 border p-[15px]'>
                                            {data.nodes.length}
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>

            <div>
                <Failed failedData={violationData} />
            </div>

        </>
    )
}
