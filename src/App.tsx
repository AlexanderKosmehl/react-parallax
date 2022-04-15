import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from './moon.png'
import land from './land.png'
import cat from './cat.gif'
import { useRef } from 'react'

function App() {
  const ref = useRef<IParallax>(null)

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          sticky={{ start: 1.1, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current?.scrollTo(3)}
        >
          <h2>Cool Parallax Demo!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          speed={2}
          onClick={() => ref.current?.scrollTo(0)}
        >
          <h2>It's Awesome!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
