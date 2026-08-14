'use client'

import { useEffect, useState } from 'react'

const PAGES = ['Home', 'Courses', 'Practice', 'About', 'Contact']

// act name -> how long the kid stays in it
const ACTS = [
  ['knock', 4400],
  ['peep', 4400],
  ['think', 5400],
  ['wave', 3400],
]

export default function Page() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % ACTS.length), ACTS[i][1])
    return () => clearTimeout(t)
  }, [i])

  return (
    <main>
      <nav className="nav">
        <span className="logo">Studifyn</span>
        <div className="links">
          {PAGES.map((p) => (
            <button key={p} type="button" className="nav-btn">
              {p}
            </button>
          ))}
        </div>
      </nav>

      <section className="stage">
        <div className="window">
          <Kid act={ACTS[i][0]} />
        </div>
        <h1 className="wip" aria-label="Work in progress">
          {'Work in progress'.split('').map((c, n) => (
            <span key={n} style={{ animationDelay: `${n * 0.07}s` }} aria-hidden="true">
              {c === ' ' ? ' ' : c}
            </span>
          ))}
        </h1>
        <p className="sub">Our little student is still building the site.</p>
      </section>
    </main>
  )
}

function Kid({ act }) {
  return (
    <svg
      className={`kid ${act}`}
      viewBox="0 0 260 240"
      role="img"
      aria-label="A kid knocking on the screen, peeking out and thinking"
    >
      {/* knuckle ripples on the glass */}
      <circle className="ripple" cx="196" cy="66" r="9" />
      <circle className="ripple r2" cx="196" cy="66" r="9" />

      {/* thought bubble */}
      <g className="thought">
        <circle cx="88" cy="60" r="5" />
        <circle cx="72" cy="44" r="8" />
        <ellipse cx="42" cy="26" rx="30" ry="20" />
        <g className="dots">
          <circle cx="28" cy="26" r="3.5" />
          <circle cx="42" cy="26" r="3.5" />
          <circle cx="56" cy="26" r="3.5" />
        </g>
      </g>

      <g className="bob">
        <path className="shirt" d="M78 240 v-46 a52 52 0 0 1 104 0 v46 z" />
        <path className="limb" d="M86 196 q-22 10 -24 34" />

        {/* arm that knocks and waves */}
        <g className="arm-up">
          <path className="limb" d="M172 194 q26 -60 22 -126" />
          <circle className="skin fist" cx="194" cy="66" r="13" />
        </g>

        {/* head */}
        <circle className="skin" cx="130" cy="106" r="52" />
        <path className="hair" d="M78 100 a52 52 0 0 1 104 0 q-26 -22 -52 -6 q-26 16 -52 6 z" />
        <circle className="skin" cx="78" cy="108" r="8" />
        <circle className="skin" cx="182" cy="108" r="8" />

        {/* eyes */}
        <ellipse className="sclera" cx="112" cy="102" rx="12" ry="13" />
        <ellipse className="sclera" cx="150" cy="102" rx="12" ry="13" />
        <g className="pupils">
          <circle className="pupil" cx="112" cy="103" r="5.5" />
          <circle className="pupil" cx="150" cy="103" r="5.5" />
        </g>
        <rect className="lid" x="100" y="88" width="24" height="28" rx="6" />
        <rect className="lid" x="138" y="88" width="24" height="28" rx="6" />

        {/* face */}
        <circle className="blush" cx="100" cy="126" r="7" />
        <circle className="blush" cx="162" cy="126" r="7" />
        <path className="mouth" d="M118 130 q12 12 24 0" />
        <ellipse className="mouth-o" cx="130" cy="134" rx="6" ry="8" />

        {/* hand on the chin while thinking (drawn in front of the face) */}
        <g className="arm-chin">
          <path className="limb" d="M174 196 q6 -34 -18 -48" />
          <circle className="skin" cx="156" cy="148" r="12" />
        </g>
      </g>
    </svg>
  )
}
