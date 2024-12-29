export default function LoadingAnimation() {
  return (
    <div className='fixed inset-0 bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center z-50'>
      <div className='relative'>
        {/* Om Symbol */}
        <div className='text-8xl text-primary-gold animate-pulse'>ॐ</div>

        {/* Rotating Circle */}
        <div
          className='absolute inset-0 border-4 border-primary-gold rounded-full animate-spin'
          style={{ animationDuration: '3s' }}
        ></div>

        {/* Loading Text */}
        <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap'>
          <p className='text-text-brown text-lg'>Loading divine blessings...</p>
        </div>
      </div>
    </div>
  );
}
