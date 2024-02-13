import React, { useCallback, useMemo, useState } from 'react'
import {loadSlim} from 'tsparticles-slim'
import Particles from "@tsparticles/react";
export default function Parti() {
    const options = useMemo(()=>{
        return {}
    },[])

    const particlesInit = useCallback((engine)=>[
        loadSlim(engine)
    ],[])
  return (
    <div>
       <Particles init={particlesInit} options={options}/>
    </div>
  )
}
