import React, { useState } from 'react'

export default function NoData() {

    var emojis = '🍗 🍟 🍕 🌮 🧆 🍔 🥩 🥓 🍳 🥐 🥝 🍅 🍑 🥑 🍉 🍤 🍣 🍜 🍫 🍩 🍪 🍰 🍦 🍷 🥂 🍻 🍾 🍽 🍺 🍸 🥗 🥙 🥖 🍞 🧇 🧀'

    const [emo, setEmo] = useState('')
    function emoji(){
        return emojis.split(' ')[Math.floor(Math.random() * emojis.split(' ').length)]
    }


    return (

        <div className='display justify-c p-1 f-s-16 w-100 justify-c'>
            <div className='grid'>
                <div className='display justify-c'>          
                    <button className='grey border-r-1 border' style={{width: '5rem', height: '5rem', borderRadius: '100%'}} onClick={e=> setEmo(emoji())}>
                        <span className='margin-0 f-s-2rem'> {emo ? emo : '👻'}</span>
                    </button>
                </div>
                <div className='display m-t-1'>
                    <span>Il n'y a rien ici pour le moment</span>
                </div>
            </div>
        </div>
    )
}
