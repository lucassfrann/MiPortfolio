import React from 'react'
import myPage from '../assets/images/mypage.png'

function card() {
  return (
    <div className="max-w-sm mx-4 m-2 bg-white rounded overflow-hidden shadow-lg">
     <img className="w-full" src={myPage} alt="Sunset in the mountains"/>
     <div className="px-6 py-4">
     <div className="font-bold text-xl mb-2">Proximamente</div>
        <p className="text-gray-700 text-base">
      
        </p>
    </div>
    <div className="px-6 pt-4 pb-2">
        <a href='https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver pagina</a>
        <a href='https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github repositorio</a>
    </div>
</div>
  )
}

export default card