import * as React from "react"
import { SVGProps } from "react"

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 535.35 529.28"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#3d8584;stroke-miterlimit:10;stroke-width:20px}"
        }
      </style>
    </defs>
    <ellipse cx={270.62} cy={264.64} className="cls-1" rx={130.9} ry={133.63} />
    <path
      d="M270.62 131.01V21.13c0-8.32 1.6-9.95 15.81-10.83s131.08-4.89 195.81 81.85M279.65 398.27v109.88c0 8.32-1.6 10-15.82 10.83s-131.1 4.89-195.81-81.85"
      className="cls-1"
    />
    <ellipse cx={486.02} cy={131.01} className="cls-1" rx={39.33} ry={40.15} />
    <ellipse cx={49.33} cy={406.04} className="cls-1" rx={39.33} ry={40.15} />
    <ellipse cx={270.62} cy={264.64} className="cls-1" rx={39.33} ry={40.15} />
  </svg>
)
export default Logo
