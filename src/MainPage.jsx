import React, { useState } from 'react'
import Inaplicable from './Components/Inapplicable/Inapplicable'
import Incomplete from './Components/Incomplete/Incomplete'
import Passed from './Components/Passed/Passed'
import Rules from './Components/RulesSection/Rules'
import Violation from './Components/Violation/Violation'
import data from "./data.json"

export default function MainPage() {


  const [pass, setPass] = useState(false)
  const [incomplete, setIncomplete] = useState(false)
  const [inapplicable, setInapplicable] = useState(false)
  const [rules, setRules] = useState(false)

  let violations_id = data.violations.map(v => v.id)
  let passes_id = data.passes.map(p => p.id)
  let incomplete_id = data.incomplete.map(i => i.id)
  let inapplicable_id = data.inapplicable.map(ia => ia.id)
  let ids = [...violations_id, ...passes_id, ...incomplete_id, ...inapplicable_id]

  return (

    <>
      <div className='border-b-2 border-slate-400 pb-4'>
        <div className='text-[30px] text-bold underline-offset-2 italic'>
          Accessibility Test Results
        </div>
        <div>
          Page URL :
          <a className='text-[blue]' href={data.url}>{data.url}</a>
        </div>
        <div> Date : {data.timestamp.slice(0, 10)}</div>
        <div>Time : {data.timestamp.slice(11, 19)}</div>
        <div>
          Test Case : Full Page analysis
        </div>
        {/* <div>
          Steps
          <ol className='pl-4'>
            <li>
              1. Open <a href="">https://dequeuniversity.com/demo/mars/</a>
            </li>

            <li>
              2. Analyze full page with all rules enabled
            </li>
          </ol>
        </div> */}
      </div>


      {/* violation-Section */}
      <Violation violationData={data.violations} />


      {/* Passed Section */}
      <div onClick={() => { pass ? setPass(false) : setPass(true) }} className="pass border border-slate-400 rounded-[5px] p-2 mt-4 shadow-md shadow-slate-300">
        <div className='text-[15px] md:text-[25px] font-bold italic '>
          <span className='text-yellow'>{data.passes.length}</span> Passes found. <span className="text-[#5e9bda]">Click to expand</span>
        </div>

        {
          pass ?
            <div className='mt-4 overflow-scroll md:overflow-none'>
              <Passed passedData={data.passes} />
            </div> : null
        }

      </div>







      {/* Inapplicable Section */}

      <div onClick={() => { inapplicable ? setInapplicable(false) : setInapplicable(true) }} className="pass border border-slate-400 rounded-[5px] p-2  mt-4   shadow-md shadow-slate-300">
        <div className='text-[15px] md:text-[25px] font-bold italic '>
          <span className='text-yellow'>{data.inapplicable.length}</span> Inapplicable found. <span className="text-[#5e9bda]">Click to expand</span>
        </div>

        {
          inapplicable ?

            <>
              <div>
                <div className="pl-4">
                  <div className="italic">
                    What 'inapplicable' axe checks means?
                  </div>
                  <div>
                    The inapplicable array lists all the rules for which no matching elements were found on the page.
                  </div>
                  <div>
                    <a className="text-[blue]" href="https://www.deque.com/axe/core-documentation/api-documentation/#results-object">Visit axe API Documentation </a>to learn more.
                  </div>
                </div>


                {data.inapplicable.length > 0 ?
                  <div className='mt-4 overflow-scroll md:overflow-none'>
                   <Inaplicable inapplicableData={data.inapplicable} />
                  </div> :
                  <div className="text-[15px] md:text-[25px] mt-4"> No Inapplicables</div>
                }
              </div>
            </>

            : null

        }

      </div>



      {/* Incomplete Section */}

      <div onClick={() => { incomplete ? setIncomplete(false) : setIncomplete(true) }} className="pass border border-slate-400 rounded-[5px] p-2  mt-4   shadow-md shadow-slate-300">
        <div className='text-[15px] md:text-[25px] font-bold italic '>
          <span className='text-yellow'>{data.incomplete.length}</span> Incomplete found. <span className="text-[#5e9bda]">Click to expand</span>
        </div>

        {
          incomplete ?

            <>
              <div>
                <div className="pl-4">
                  <div className="italic">
                    What 'incomplete' axe checks means?
                  </div>
                  <div>
                    Incomplete results were aborted and require further testing. This can happen either because of technical restrictions to what the rule can test, or because a javascript error occurred.
                  </div>
                  <div>
                    <a className="text-[blue]" href="https://www.deque.com/axe/core-documentation/api-documentation/#results-object">Visit axe API Documentation </a>to learn more.
                  </div>
                </div>

                {data.incomplete.length > 0 ?
                  <div className='mt-4 overflow-scroll md:overflow-none'>
                    <Incomplete incompleteData={data.incomplete} />
                  </div> :
                  <div className="text-[15px] md:text-[25px] mt-4"> No Incompletes</div>
                }
              </div>
            </>

            : null

        }

      </div>


      {/* Rules-Section */}


      <div onClick={() => { rules ? setRules(false) : setRules(true) }} className="pass border border-slate-400 rounded-[5px] p-2  mt-4   shadow-md shadow-slate-300">
        <div className='text-[15px] md:text-[25px] font-bold italic '>
          Running with <span className='text-yellow'>{ids.length}</span> rules. <span className="text-[#5e9bda]">Click to expand</span>
        </div>

        {
          rules ?
            <div className='mt-4 overflow-scroll md:overflow-none'>
              <Rules ids={ids} />
            </div> : null
        }

      </div>




    </>

  )
}
