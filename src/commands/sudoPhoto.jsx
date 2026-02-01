import React from 'react';

const SudoPhoto = ({ isSudo }) => {
  if (!isSudo) {
    return (
      <pre className="text-red-500">
        {`
Accessing profile photo...
Permission denied.

sike 😏 you're denied to see my photo.
If you’re wondering if I’m ugly — well, it’s quite the opposite.

If you really want to see me, try:
sudo photo
password try 'akiscool'
        `}
      </pre>
    );
  }

  return (
    <div className="py-4">
      <pre className="text-green-400 mb-2">
        {`
[ AUTHENTICATION SUCCESSFUL ]
Access granted. Decrypting profile_image.png...
        `}
      </pre>
      
      <img 
        src="/my-ascii-photo.png" 
        alt="Abhishek Krishna ASCII"
        className="block border border-green-900/30 rounded"
        style={{
          maxWidth: '100%',
          height: 'auto',
          imageRendering: 'pixelated', 
        }}
      />

      <pre className="text-green-400 mt-2">
        {`
[ STATUS: DECRYPTED ]
"I told you it was worth the sudo."
        `}
      </pre>
    </div>
  );
};

export default SudoPhoto;
