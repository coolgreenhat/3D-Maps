import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'

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
                <box name='box'>
                    <standardMaterial name='dog' backFaceCulling={false}>
                    <texture url={url["url"]} assignTo="diffuseTexture" hasAlpha={true} />
                    </standardMaterial>
                </box>
            </Scene>
            </Engine>
        </div>
    )
}