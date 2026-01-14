import React from 'react'
import Image from 'next/image'

export default function fabiprueba() {
  return (
    <div>
      <h1 className='bg-red-600 text-4xl text-amber-300'> ESTO ES UN DIV DE PRUEBA</h1>

      <Image
        src="/hagrid.png" // Ruta relativa a la carpeta public
        alt="Descripción de la imagen para accesibilidad"
        width={500}        // Ancho deseado en píxeles
        height={300}       // Alto deseado en píxeles
        priority           // Opcional: úsalo si es la imagen principal (LCP)
      />

    </div>

  )
}
