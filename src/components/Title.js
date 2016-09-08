import React from 'react'
import { Link } from 'react-router'

export default () => {
  return <div className='TitDirContainer'>
    <h2>It must learn how to be one with the spirits.</h2>
    <div className='TitDir'>
      <p className='read'>To align the spirits one must read:</p>
      <p className='directions'>The Sensei will choose four of six possible spirits. The Neophyte will use his or her <i>ki</i> to guess what four spirits the Sensei has chosen.</p>
      <p> The Neophyte must learn that the Sensei will respond cryptically with markers.</p> <a className='white'>WHITE</a>: Correct spirit deciphered. <a className='red'>RED</a>: Incorrect spirit deciphered.
    </div>
    <button><Link to='/game'>PLAY!</Link></button>
  </div>
}
