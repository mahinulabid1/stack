/**
 * this file handles password strenth indicator function
 */

import React, { useState, useEffect } from 'react';
import styles from './passStrengthIndicator.module.css';

interface ComponentProps {
  strength: number
}

const PassStrengthIndicator: React.FC<ComponentProps> = ({ strength }) => {
  console.log(strength)
  const [lowStrengthDisplay, setLowStrengthDisplay] = useState<string>('none');
  const [mediumStrengthDisplay, setMediumStrengthDisplay] = useState<string>('none');
  const [goodStrengthDisplay, setGoodStrengthDisplay] = useState<string>('none');
  const [betterStrengthDisplay, setBetterStrengthDisplay] = useState<string>('none');
  const [bestStrengthDisplay, setBestStrengthDisplay] = useState<string>('none');

  const layerBasicStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
  }
  const lowStrengthLayer: React.CSSProperties = {
    background: '#FF0000',
    zIndex: 2,
    display: lowStrengthDisplay
  }

  const mediumStrengthLayer: React.CSSProperties = {
    background: '#FF5959',
    zIndex: 3,
    display: mediumStrengthDisplay
  }

  const goodStrengthLayer: React.CSSProperties = {
    background: '#FF7A7A',
    zIndex: 4,
    display: goodStrengthDisplay
  }

  const betterStrengthLayer: React.CSSProperties = {
    background: '#12DC57',
    zIndex: 5,
    display: betterStrengthDisplay
  }

  const bestStrengthLayer: React.CSSProperties = {
    background: '#38CB89',
    zIndex: 6,
    display: bestStrengthDisplay
  }

  useEffect(() => {
    switch (strength) {
      case undefined:
        break;
      case 1:
        setLowStrengthDisplay('block');

        setMediumStrengthDisplay('none');
        setGoodStrengthDisplay('none');
        setBetterStrengthDisplay('none');
        setBestStrengthDisplay('none');
        break;

      case 2:
        setMediumStrengthDisplay('block');

        setLowStrengthDisplay('none');
        setGoodStrengthDisplay('none');
        setBetterStrengthDisplay('none');
        setBestStrengthDisplay('none');
        break;

      case 3:
        setGoodStrengthDisplay('block');

        setBetterStrengthDisplay('none');
        setBestStrengthDisplay('none');
        setLowStrengthDisplay('none');
        setMediumStrengthDisplay('none');
        break;

      case 4:
        setBetterStrengthDisplay('block');

        setLowStrengthDisplay('none');
        setMediumStrengthDisplay('none');
        setGoodStrengthDisplay('none');
        setBestStrengthDisplay('none');
        break;

      case 5:
        setBestStrengthDisplay('block');

        setBetterStrengthDisplay('none');
        setLowStrengthDisplay('none');
        setMediumStrengthDisplay('none');
        setGoodStrengthDisplay('none');
    }
  }, [strength])

  return (
    <>
      <div className={styles.passStrengthContainer + " dFlex dSpaceBetween"}>
        <div className={styles.primaryLayer}>
          <div style={{ ...layerBasicStyle, ...lowStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...mediumStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...goodStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...betterStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...bestStrengthLayer }}></div>
        </div>

        <div>
          <div style={{ ...layerBasicStyle, ...mediumStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...goodStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...betterStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...bestStrengthLayer }}></div>
        </div>

        <div>
          <div style={{ ...layerBasicStyle, ...goodStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...betterStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...bestStrengthLayer }}></div>
        </div>

        <div>
          <div style={{ ...layerBasicStyle, ...betterStrengthLayer }}></div>
          <div style={{ ...layerBasicStyle, ...bestStrengthLayer }}></div>
        </div>

        <div>
          <div style={{ ...layerBasicStyle, ...bestStrengthLayer }}></div>
        </div>
      </div>
    </>
  )
}

export default PassStrengthIndicator;