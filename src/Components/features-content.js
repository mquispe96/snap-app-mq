import React from 'react';
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const FeaturesContent = () => {
    return (
        <>
            <div className='features__eaFeature'>
                <img src={todo}/>
                <a>Todo List</a>
            </div>
            <div className='features__eaFeature'>
                <img src={calendar}/>
                <a>Calendar</a>
            </div>
            <div className='features__eaFeature'>
                <img src={reminders}/>
                <a>Reminders</a>
            </div>
            <div className='features__eaFeature'>
                <img src={planning}/>
                <a>Planning</a>
            </div>
        </>
    )
}

export default FeaturesContent;