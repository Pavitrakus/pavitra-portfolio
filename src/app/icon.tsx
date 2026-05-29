import { ImageResponse } from 'next/og'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#FDFBF7', // Cream background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a1a', // Dark text
          fontFamily: 'serif',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  )
}
