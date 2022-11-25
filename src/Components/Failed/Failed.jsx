import React from 'react'

export default function Failed({ failedData }) {
    return (
        <>
            <div className='text-[30px] font-bold mt-8 italic underline'>
                Failed
            </div>
            {
                failedData.map((data, index) => {
                    return (
                        <>
                            <div className="container border border-slate-400 p-[20px] rounded mb-4 shadow-md shadow-slate-300 ">

                                <div className="heading text-[25px] italic">
                                    {/* {" 1. <html> element must have a lang attribute"} */}
                                    <span>{index + 1}.</span>
                                    <span> {data.help}</span>
                                </div>

                                <div className='pl-6'>
                                    <div className="tag text-[19px] mt-2">
                                        {data.id}
                                    </div>

                                    <div className="msg  text-[19px]">
                                        {data.description}
                                    </div>

                                    <div className="issues-tag  text-[19px]">
                                        Issues Tag : {
                                            data.tags.map((tag) => {
                                                return (
                                                    <>
                                                        <span> {tag}</span>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className=" w-[100%] overflow-scroll md:overflow-none">
                                    <table className='w-[100%] shadow-md '>
                                        <tr className='text-[15px] font-bold'>
                                            <td className='border-slate-500  border p-[15px]'>
                                                #
                                            </td>

                                            <td className='border-slate-500 border p-[15px]'>
                                                Issue Description
                                            </td>

                                            <td className='border-slate-500 border  p-[15px]'>
                                                To solve this violation, you need to...
                                            </td>
                                        </tr>



                                        {data.nodes ?

                                            data.nodes.map((node, i) => {
                                                return (
                                                    <>
                                                        <tr className={i % 2 == 0 ? 'bg-gray-300 text-[15px] ' : 'text-[15px] '}>
                                                            <td className='border-slate-500 border text-15px p-[15px]'>
                                                                {i + 1}
                                                            </td>

                                                            <td className='border-slate-500 border  p-[15px]  w-[50%]'>
                                                                <div className="elementLocation ">
                                                                    Element Location
                                                                </div>

                                                                <code className='py-[5px] bg-gray-200 p-4 rounded-[5px]'>
                                                                    {node.target[0]}
                                                                </code>

                                                                <div className='py-[5px]'>
                                                                    Element Source
                                                                </div>

                                                                <div className='bg-gray-200 p-4  rounded-[5px]'>
                                                                <code className='py-[5px]   html hljs'>
                                                                    {node.html}
                                                                </code>
                                                                </div>

                                                            </td>

                                                            <td className='border-slate-500 border w-[50%] p-[15px]'>
                                                                {node.failureSummary}
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            }) : null
                                        }



                                    </table>
                                </div>




                            </div>
                        </>
                    )
                })
            }

        </>
    )
}
