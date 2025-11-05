import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
export default function SignInScreen() {
  /**
   * PUBLIC_INTERFACE
   * SignInScreen renders the pixel-perfect Sign In screen extracted from Figma.
   * It injects the external CSS from assets/common.css and assets/sign-in-11-235.css
   * and preserves absolute positioning and classes exactly as generated.
   *
   * Returns:
   *  A React element containing the sign-in screen DOM with fixed 375x812 canvas.
   */
  useEffect(() => {
    // Dynamically include external CSS files from assets to avoid modifying index.html.
    const links = [];

    const addCss = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.injected = 'signin';
      document.head.appendChild(link);
      links.push(link);
    };

    addCss('/assets/common.css');
    addCss('/assets/sign-in-11-235.css');

    return () => {
      // Cleanup injected styles when navigating away
      links.forEach(l => {
        if (l && l.parentNode) l.parentNode.removeChild(l);
      });
    };
  }, []);

  useEffect(() => {
    // Attach the button click behavior from assets/sign-in-11-235.js
    const clickHandler = () => {
      // Placeholder action to mirror generated script
      // eslint-disable-next-line no-console
      console.log('Sign In clicked');
    };
    const btn = document.getElementById('btn-54-668');
    if (btn) btn.addEventListener('click', clickHandler);

    return () => {
      if (btn) btn.removeEventListener('click', clickHandler);
    };
  }, []);

  // Render the generated markup as JSX with minimal adjustments (class -> className)
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      {/* Screen container - keep exact size for pixel-perfect */}
      <div
        id="screen-sign-in-11-235"
        className="screen ds-style-10"
        style={{
          position: 'relative',
          width: '375px',
          height: '812px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-ffffff)'
        }}
      >
        {/* Status Bar (component) */}
        <div id="comp-13-71" style={{ position: 'absolute', left: '0px', top: '0px', width: '375px', height: '44px' }}>
          {/* Symbols frame */}
          <div id="comp-13-71-128-302" className="ds-style-2" style={{ position: 'absolute', left: '293.5px', top: '16.6px', width: '68px', height: '13px' }}>
            {/* Battery */}
            <div id="battery" className="ds-style-2" style={{ position: 'absolute', left: '468px', top: '17.16px', width: '24.5px', height: '11.5px', display: 'none' }}></div>
            {/* Battery mask and inner */}
            <div id="battery-rect" className="ds-style-33" style={{ position: 'absolute', left: '336px', top: '17.16px', width: '24.5px', height: '11.5px', display: 'none' }}></div>
            <img alt="Battery Path inner" src="/assets/figmaimages/figma_image_13_71_128_306.svg" className="icon-img" style={{ left: '337px', top: '18.16px', width: '20px', height: '9.5px' }} />
            <img alt="Battery outer" src="/assets/figmaimages/figma_image_13_71_128_307.svg" className="icon-img" style={{ left: '336px', top: '17.16px', width: '22px', height: '11.5px' }} />
            <div className="icon-img" style={{ left: '359px', top: '20.85px', width: '1.5px', height: '4px', backgroundColor: 'var(--color-000000)' }}></div>

            {/* Signal (Combined Shape rectangles) */}
            <img alt="Signal bar 1" src="/assets/figmaimages/figma_image_13_71_128_311.svg" className="icon-img" style={{ left: '293.5px', top: '24.3px', width: '3px', height: '4px' }} />
            <img alt="Signal bar 2" src="/assets/figmaimages/figma_image_13_71_128_312.svg" className="icon-img" style={{ left: '298.3px', top: '22.3px', width: '3px', height: '6px' }} />
            <img alt="Signal bar 3" src="/assets/figmaimages/figma_image_13_71_128_313.svg" className="icon-img" style={{ left: '302.9px', top: '20px', width: '3px', height: '8.3px' }} />
            <img alt="Signal bar 4" src="/assets/figmaimages/figma_image_13_71_128_314.svg" className="icon-img" style={{ left: '307.6px', top: '17.6px', width: '3px', height: '10.7px' }} />

            {/* Wi-Fi arcs (vector fills drawn as background divs for precision) */}
            <div className="icon-img" style={{ left: '315.6px', top: '17.4px', width: '15.4px', height: '4.7829px', backgroundColor: 'var(--color-000000)', opacity: 1 }}></div>
            <div className="icon-img" style={{ left: '318.29px', top: '21.226px', width: '10.032px', height: '3.664px', backgroundColor: 'var(--color-000000)', opacity: 1 }}></div>
            <div className="icon-img" style={{ left: '320.968px', top: '25.055px', width: '4.665px', height: '3.403px', backgroundColor: 'var(--color-000000)', opacity: 1 }}></div>
          </div>
          {/* Time */}
          <div id="time" style={{ position: 'absolute', left: '0px', top: '12px', width: '180px', height: '22px' }}>
            <span style={{
              position: 'absolute', left: '29.5px', top: '2px', width: '37px', height: '18px',
              fontFamily: 'var(--typo-67-family)', fontSize: 'var(--typo-67-size)', fontWeight: 'var(--typo-67-weight)',
              lineHeight: 'var(--typo-67-line-height)', letterSpacing: 'var(--typo-67-letter-spacing)',
              color: 'var(--typo-67-color)'
            }}>19:27</span>
          </div>
        </div>

        {/* Title group */}
        <div id="group-13-110" style={{ position: 'absolute', left: '30px', top: '94px', width: '155px', height: '75px' }}>
          <span style={{
            position: 'absolute', left: '0px', top: '0px', width: '84px', height: '45px',
            fontFamily: 'var(--typo-60-family)', fontSize: 'var(--typo-60-size)', fontWeight: 'var(--typo-60-weight)',
            lineHeight: 'var(--typo-60-line-height)', color: 'var(--typo-60-color)'
          }}>Hello,</span>
          <span style={{
            position: 'absolute', left: '0px', top: '45px', width: '155px', height: '30px',
            fontFamily: 'var(--typo-61-family)', fontSize: 'var(--typo-61-size)', fontWeight: 'var(--typo-61-weight)',
            lineHeight: 'var(--typo-61-line-height)', color: 'var(--typo-61-color)'
          }}>Welcome Back!</span>
        </div>

        {/* Input field Email */}
        <div id="comp-30-585" style={{ position: 'absolute', left: '30px', top: '226px', width: '315px', height: '81px' }}>
          <div className="ds-style-30" style={{ position: 'absolute', left: '0px', top: '26px', width: '315px', height: '55px', backgroundColor: 'transparent' }}></div>
          <span style={{
            position: 'absolute', left: '20px', top: '45px', width: '61px', height: '17px',
            fontFamily: 'var(--typo-65-family)', fontSize: 'var(--typo-65-size)', fontWeight: 'var(--typo-65-weight)',
            lineHeight: 'var(--typo-65-line-height)', color: 'var(--typo-65-color)'
          }}>Enter Email</span>
          <span style={{
            position: 'absolute', left: '0px', top: '0px', width: '38px', height: '21px',
            fontFamily: 'var(--typo-66-family)', fontSize: 'var(--typo-66-size)', fontWeight: 'var(--typo-66-weight)',
            lineHeight: 'var(--typo-66-line-height)', color: 'var(--typo-66-color)'
          }}>Email</span>
        </div>

        {/* Input field Password */}
        <div id="comp-30-590" style={{ position: 'absolute', left: '30px', top: '337px', width: '315px', height: '81px' }}>
          <div className="ds-style-30" style={{ position: 'absolute', left: '0px', top: '26px', width: '315px', height: '55px', backgroundColor: 'transparent' }}></div>
          <span style={{
            position: 'absolute', left: '20px', top: '45px', width: '84px', height: '17px',
            fontFamily: 'var(--typo-65-family)', fontSize: 'var(--typo-65-size)', fontWeight: 'var(--typo-65-weight)',
            lineHeight: 'var(--typo-65-line-height)', color: 'var(--typo-65-color)'
          }}>Enter Password</span>
          <span style={{
            position: 'absolute', left: '0px', top: '0px', width: '107px', height: '21px',
            fontFamily: 'var(--typo-66-family)', fontSize: 'var(--typo-66-size)', fontWeight: 'var(--typo-66-weight)',
            lineHeight: 'var(--typo-66-line-height)', color: 'var(--typo-66-color)'
          }}>Enter Password</span>
        </div>

        {/* Forgot Password */}
        <div id="group-12-91" style={{ position: 'absolute', left: '40px', top: '438px', width: '97px', height: '17px' }}>
          <span style={{
            position: 'absolute', left: '0px', top: '0px', width: '97px', height: '17px',
            fontFamily: 'var(--typo-62-family)', fontSize: 'var(--typo-62-size)', fontWeight: 'var(--typo-62-weight)',
            lineHeight: 'var(--typo-62-line-height)', color: 'var(--typo-62-color)'
          }}>Forgot Password?</span>
        </div>

        {/* Big Button Sign In */}
        <button
          id="btn-54-668"
          className="ds-style-11"
          style={{
            position: 'absolute', left: '30px', top: '480px', width: '315px', height: '60px',
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            gap: '12px', border: 'none', cursor: 'pointer'
          }}
        >
          <span style={{
            fontFamily: 'var(--typo-58-family)', fontSize: 'var(--typo-58-size)', fontWeight: 'var(--typo-58-weight)',
            lineHeight: 'var(--typo-58-line-height)', color: 'var(--typo-58-color)'
          }}>Sign In</span>
          <div style={{ position: 'relative', width: '20px', height: '20px' }}>
            {/* Arrow Right union */}
            <div style={{ position: 'absolute', left: '3.333px', top: '9.354px', width: '13.333px', height: '1.292px', backgroundColor: 'var(--color-000000)', opacity: 1 }}></div>
            <div style={{ position: 'absolute', left: '10.566px', top: '4.167px', width: '6.101px', height: '11.667px', backgroundColor: 'var(--color-000000)', opacity: 1, borderRadius: '1px' }}></div>
          </div>
        </button>

        {/* Divider "Or Sign in With" */}
        <div id="group-12-139" style={{ position: 'absolute', left: '90px', top: '560px', width: '195px', height: '17px' }}>
          <div className="ds-style-28" style={{ position: 'absolute', left: '145px', top: '9px', width: '50px', height: '1px', backgroundColor: 'var(--color-d9d9d9)' }}></div>
          <div className="ds-style-28" style={{ position: 'absolute', left: '0px', top: '9px', width: '50px', height: '1px', backgroundColor: 'var(--color-d9d9d9)' }}></div>
          <span style={{
            position: 'absolute', left: '57px', top: '0px', width: '81px', height: '17px',
            fontFamily: 'var(--typo-64-family)', fontSize: 'var(--typo-64-size)', fontWeight: 'var(--typo-64-weight)',
            lineHeight: 'var(--typo-64-line-height)', color: 'var(--typo-64-color)'
          }}>Or Sign in With</span>
        </div>

        {/* Google Button (44x44) */}
        <div id="btn-13-35" style={{ position: 'absolute', left: '131px', top: '597px', width: '44px', height: '44px' }}>
          <div className="ds-style-126" style={{ position: 'absolute', left: '0px', top: '0px', width: '44px', height: '44px' }}></div>
          {/* Google icon vectors */}
          <img alt="Google base" src="/assets/figmaimages/figma_image_13_39.svg" className="icon-img" style={{ left: '12px', top: '12px', width: '20px', height: '20px' }} />
          <div className="icon-img ds-style-22" style={{ left: '13.153px', top: '12px', width: '15.656px', height: '7.755px' }}></div>
          <div className="icon-img ds-style-23" style={{ left: '13.097px', top: '24.027px', width: '15.607px', height: '7.973px' }}></div>
          <img alt="Google blue" src="/assets/figmaimages/figma_image_13_42.svg" className="icon-img" style={{ left: '23px', top: '20px', width: '10px', height: '9.414px' }} />
        </div>

        {/* Facebook Button (44x44) */}
        <div id="btn-13-49" style={{ position: 'absolute', left: '200px', top: '597px', width: '44px', height: '44px' }}>
          <div className="ds-style-126" style={{ position: 'absolute', left: '0px', top: '0px', width: '44px', height: '44px' }}></div>
          {/* FB icon */}
          <div className="icon-img" style={{ left: '10px', top: '10px', width: '24px', height: '24px', backgroundColor: 'rgba(0,0,0,0.58)', borderRadius: '4px', display: 'none' }}></div>
          <img alt="Facebook glyph" src="/assets/figmaimages/figma_image_13_58.svg" className="icon-img" style={{ left: '12px', top: '12px', width: '20px', height: '20px' }} />
        </div>

        {/* Don't have an account */}
        <div id="txt-13-67" style={{ position: 'absolute', left: '99px', top: '696px', width: '177px', height: '17px' }}>
          <span style={{
            position: 'absolute', left: '0px', top: '0px', width: '177px', height: '17px',
            fontFamily: 'var(--typo-63-family)', fontSize: 'var(--typo-63-size)', fontWeight: 'var(--typo-63-weight)',
            lineHeight: 'var(--typo-63-line-height)', color: 'var(--typo-63-color)'
          }}>Don’t have an account? Sign up</span>
        </div>

        {/* Home Indicator (iOS) */}
        <div id="comp-42-614" style={{ position: 'absolute', left: '0px', top: '778px', width: '375px', height: '34px' }}>
          <div className="ds-style-32" style={{ position: 'absolute', left: '120px', top: '21px', width: '135px', height: '5px' }}></div>
        </div>
      </div>
    </div>
  );
}
