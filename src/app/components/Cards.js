import { useState,useEffect,useRef } from 'react'
import Card from './Card'

function Cards(){
    const [flips,setFlips] = useState(0);
    const [gameLost,setGameLost] =useState(false)
    const [showResult,setShowResult] = useState(false)
    const [timeLeft, setTimeLeft] = useState(60);
    const refreshButton= useRef(null);

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
          } else {
            setShowResult(true)
            if(items.some(obj => obj.stat === '')){
                setGameLost(true)
                setTimeout(() => refreshButton.current.click(), 2000);
            }else{
                setGameLost(false);
                setTimeout(() => refreshButton.current.click(), 2000);

            }
          }
      });


    const [items, setItems] = useState([
        { id: 1, img: '/assets/images/img-1.png', stat: "" },
        { id: 1, img: '/assets/images/img-1.png', stat: "" },
        { id: 2, img: '/assets/images/img-2.png', stat: "" },
        { id: 2, img: '/assets/images/img-2.png', stat: "" },
        { id: 3, img: '/assets/images/img-3.png', stat: "" },
        { id: 3, img: '/assets/images/img-3.png', stat: "" },
        { id: 4, img: '/assets/images/img-4.png', stat: "" },
        { id: 4, img: '/assets/images/img-4.png', stat: "" },
        { id: 5, img: '/assets/images/img-5.png', stat: "" },
        { id: 5, img: '/assets/images/img-5.png', stat: "" },
        { id: 6, img: '/assets/images/img-6.png', stat: "" },
        { id: 6, img: '/assets/images/img-6.png', stat: "" },
        { id: 7, img: '/assets/images/img-7.png', stat: "" },
        { id: 7, img: '/assets/images/img-7.png', stat: "" },
        { id: 8, img: '/assets/images/img-8.png', stat: "" },
        { id: 8, img: '/assets/images/img-8.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }
    

    function handleClick(id){
        setFlips(flips + 1)
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
    function Refresh(){
        window.location.reload()
    }

    return (
        <div>{showResult ? <>
        {gameLost ? <div className='showResult-container'>
        <span>You Lost</span>
            <svg  version="1.1" width="150" height="150" viewBox="0 0 24 24" style={{background:'rgb(255 250 91)',borderRadius:'100px',margin:'0 auto'}}><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
        </div> : 
        <div className='showResult-container'>
        <span>You Won</span>
        <div class="party-popper">🎉</div>
<div class="cannon">
	<div class="cannon__path cannon__path--sm cannon__path--angle-2">
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>
		<div class="cannon__confetti-spacer"></div>
	</div>
	<div class="cannon__path cannon__path--md cannon__path--angle-1">
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
		<div class="cannon__confetti-spacer"></div>
	</div>
	<div class="cannon__path cannon__path--lg cannon__path--angle0">
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti-spacer"></div>
	</div>
	<div class="cannon__path cannon__path--md cannon__path--angle1">
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
		<div class="cannon__confetti-spacer"></div>
	</div>
	<div class="cannon__path cannon__path--sm cannon__path--angle2">
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
		<div class="cannon__confetti-spacer"></div>
	</div>
</div>
        </div>}
            </> : ""}
            <div className="card-container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
        <div className='control-card-container'>
            <span>Time:{timeLeft}S</span>
            <span>Flips: {flips}</span>
            <button ref={refreshButton} onClick={Refresh}>Refresh</button>
        </div>

        </div>
        
    )
}

export default Cards