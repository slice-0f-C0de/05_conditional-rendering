import React from 'react';
import './App.css';
import Rating from "./Rating/Rating";
import Accordion from "./Accordion/Accordion";

function App() {
    return (
        <div>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
