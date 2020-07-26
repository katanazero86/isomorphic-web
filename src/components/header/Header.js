import React from 'react';

export default function Header() {

    return (
        <header style={{width:'100%', border:'1px dotted black'}}>
            <div>
                <span style={{padding:'4px'}}>My App |</span>
                <span style={{padding:'4px'}}>Home</span>
                <span style={{padding:'4px'}}>About</span>
            </div>
        </header>
    )
}