import React, { useRef, useState } from 'react'
import { Engine, Scene, useBeforeRender, useClick, useHover } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'

const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const SpinningBox = (props) => {
    const boxRef = useRef(null);
  
    const [clicked, setClicked] = useState(false);
    useClick(
      () => setClicked(clicked => !clicked),
      boxRef
    );
  
    const [hovered, setHovered] = useState(false);
  
    useHover(
      () => setHovered(true),
      () => setHovered(false),
      boxRef
    );
  
    const rpm = 7;
    useBeforeRender((scene) => {
      if (boxRef.current) {
        // Delta time smoothes the animation.
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();
        boxRef.current.rotation.x += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
        boxRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
      }
    });

    return (
        <box name={props.name} 
        ref={boxRef} 
        size={1} 
        position={props.position} 
        scaling={clicked ? BiggerScale : DefaultScale}>         
            <standardMaterial name='imageBox' backFaceCulling={false}>
                <texture url={props.url} assignTo="diffuseTexture" hasAlpha={true} />
            </standardMaterial>
        </box>
    );
}

export const Texture = (url) => {
    return (
        <div>
            <Engine antialias 
            adaptToDeviceRatio 
            width="500px"
            height="500px"
            canvasId='babylonJS'>
            <Scene>
                <arcRotateCamera
                name='Camera'
                alpha={3 * Math.PI / 2}
                beta={Math.PI / 2}
                radius={3}
                target={Vector3.Zero()}
                />
                <hemisphericLight
                name='light1'
                direction={Vector3.Up()}
                intensity={0.7}
                diffuse={Color3.White()}
                specular={Color3.White()}
                groundColor={Color3.White()}
                />
                <SpinningBox 
                name='imageBox' 
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString('#EEB5EB')} 
                hoveredColor={Color3.FromHexString('#C26DBC')}
                url={url["url"]}
                />
            </Scene>
            </Engine>
        </div>
    )
}