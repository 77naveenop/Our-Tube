import React from 'react';
import "../Categories bar/Categories.scss";
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { getVideosByCategory } from '../../redux/actions/video.action';


const Keywords = [
    "All",
    "React.js",
    "Angular.js",
    "React-native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm art",
    "Guitar",
    "Bengali songs",
    "Coding",
    "Cricket",
    "Football",
    "Real-Madrid",
    "Gatsby",
    "Poor-Coder",
    "Harsh beniwal",
    "the weekend",
    "dino james",
    "movies",
    "Ipl 2021",
    "Ms Dhoni",
    "World-Cup2021",
    "Arijit singh",
    "Jubin nautiyal",
    "Bollywood",
]


const Categories = () => {

    const [activeElement, setActiveElement] = useState("All");

    const dispatch = useDispatch()

    const handleClick = value => {
        setActiveElement(value)
        dispatch(getVideosByCategory(value))
    }

    

    return (

        <div className="cBar">
            {
                Keywords.map((value, i) => <span

                    onClick={() => handleClick(value)}
                    key={i}
                    className={activeElement === value ? 'active' : ''}>
                        {value}</span>
                        )
            }
        </div>
    )
}

export default Categories;
