function HeroFlowLine() {
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full text-blue"
      aria-hidden="true"
    >
      <defs>
        <filter id="heroFlowGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        id="heroFlowPath"
        d="M -50 210 C 200 90, 350 330, 600 200 C 850 70, 1000 330, 1250 190"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.18"
      />

      <circle r="6" fill="#ef4444" filter="url(#heroFlowGlow)">
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#heroFlowPath" />
        </animateMotion>
        <animate
          attributeName="fill"
          values="#ef4444;#ef4444;#3b82f6;#3b82f6"
          keyTimes="0;0.45;0.55;1"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.06;0.94;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default HeroFlowLine
