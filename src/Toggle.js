import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, animated } from 'react-spring';

// const Toggle = props => {
//   const [ isToggled, setToggle ] = useState(false)
//   const fade = useSpring({
//     // opacity: isToggled ? 1 : 0,
//     top: isToggled ? 200 : 10
//   })

//   return (
//     <div>
//       <Message style={fade}>Yo, yo this works</Message>
//       <button onClick={() => setToggle(!isToggled)}>Toggle me bro</button>
//     </div>
//   )
// }

// const Message = styled(animated.span)`
//   font-size: 40px;
//   color: white;
//   position: absolute
// `
//

// const Toggle = () => {
//   const [toggle, set] = useState(true)
//   const transitions = useTransition(toggle, null, {
//     from: { top: '0px', opacity: 0 },
//     enter: { top: '50px', opacity: 1 },
//     leave: { top: '100px', opacity: 0 },
//   })

//   return (
//     <div>
//       {
//         transitions.map(({ item, key, props }) => (
//             item ? <Abso style={props}>Hoi</Abso>
//           : <Abso style={props}>Boi</Abso>
//         ))
//       }
//       <button onClick={() => set(!toggle)}>Toggle</button>
//     </div>
//   )
// }

// const Abso = styled(animated.div)`
//   position: absolute;
// `

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// const initialState = [ { id: 1, text: 'Hello ' }, { id: 2, text: 'what is ' }, { id: 3, text: 'up ' }]

// const Toggle = () => {
//   const [items, set] = useState(initialState)
//   useInterval(() => items.length === 0 ? set(initialState) : set([]), 1000)

//   const transitions = useTransition(items, item => item.id, {
//     from: { transform: 'translateY(-200px)', opacity: 0 },
//     enter: { transform: 'tranlateY(0)', opacity: 1 },
//     leave: { transform: 'translateY(-200px)', opacity: 0 },
//   })

//   return (
//     <div style={{ height: '800px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '400px', alignItems: 'center' }}>
//         {
//           transitions.map(({ item, key, props }) => (
//             <Abso key={key} style={props}>{item.text}</Abso>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// const Abso = styled(animated.span)`
// `

// const Toggle = () => {
//   const [isBig, set] = useState(false)
//   useInterval(() => set(!isBig), 1000)

//   const transitions = useTransition(isBig, null, {
//     from: { width: '50px', height: '50px', opacity: 0 },
//     enter: { width: '200px', height: '200px', opacity: 1 },
//     leave: { width: '50px', height: '50px', opacity: 0 }
//   })

//   return (
//     <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
//         {
//           transitions.map(({ item, key, props }) => (
//             item && <Abso key={key} style={props}>{item.text}</Abso>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// const Abso = styled(animated.div)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #E45865;
//   border-radius: 50%;
// `

// const Toggle = () => {
//   const [isVisible, set] = useState(true)
//   useInterval(() => set(!isVisible), 1000)

//   const transitions = useTransition(isVisible, null, {
//     from: { width: '0' },
//     enter: { width: '500px' },
//     leave: { width: '0' }
//   })

//   return (
//     <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
//         {
//           transitions.map(({ item, key, props }) => {
//             return(
//               item && (
//               <svg width="50%" key={key}>
//                 <ProgressIndicator style={props} ry="5" width="100" height="10" />
//               </svg>
//               )
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// const ProgressIndicator = styled(animated.rect)`
//   fill: #E45865;
//   border-radius: 50%;
// `

// const Toggle = () => {
//   const [left, set] = useState(true)
//   useInterval(() => set(!left), 2000)

//   const animation = useSpring({
//     to: { 
//       x: left ? 0 : 450,
//     },
//   })

//   return (
//     <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
//         <svg width="50%" height="400">
//           <ProgressIndicator style={animation} ry="5" width="100" height="10" />
//         </svg>
//       </div>
//     </div>
//   )
// }

// const ProgressIndicator = styled(animated.rect)`
//   fill: #E45865;
//   border-radius: 50%;
// `

const Toggle = () => {
  const [left, set] = useState(true)
  useInterval(() => set(!left), 1500)

  const animation = useSpring({
    to: { 
      x: left ? 0 : 450,
    },
  })

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
        <svg width="50%" height="400">
          <ProgressIndicator style={animation} ry="5" width="100" height="10" />
        </svg>
      </div>
    </div>
  )
}

const ProgressIndicator = styled(animated.rect)`
  fill: #E45865;
  filter: drop-shadow(0 -15px 15px #E45865);
`

export default Toggle
