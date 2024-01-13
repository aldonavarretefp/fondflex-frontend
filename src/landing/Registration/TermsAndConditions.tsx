import React, { useState } from 'react'

interface TermsAncConditionsProps {
    currentStep: number;
}

const TermsAndConditions: React.FC<TermsAncConditionsProps> = ({currentStep}) => {

    const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLParagraphElement>) => {
        const element = e.currentTarget;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setIsCheckboxEnabled(true);
        } else {
            setIsCheckboxEnabled(false);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center p-6 gap-5'>
            <h1 className='text-xl font-bold'>Terms and Conditions</h1>
            <p className='h-80 overflow-y-scroll p-6 bg-background border text-justify rounded-md' onScroll={handleScroll}>
            Ea anim aute eu magna sunt proident ea proident Lorem. Est ipsum aliquip fugiat. Sit cupidatat ex cillum nisi ullamco cillum irure cupidatat culpa mollit culpa consequat sit. Sunt ipsum esse amet adipisicing adipisicing sit ex reprehenderit cillum elit aliquip eiusmod laborum laborum. Ut nisi consequat laborum proident id incididunt labore voluptate ad sit velit ut reprehenderit proident proident. Fugiat voluptate ad nulla fugiat reprehenderit sint. Ex irure irure ut commodo dolore labore voluptate adipisicing in veniam consectetur duis. Eiusmod ad ex id.Ea anim aute eu magna sunt proident ea proident Lorem. Est ipsum aliquip fugiat. Sit cupidatat ex cillum nisi ullamco cillum irure cupidatat culpa mollit culpa consequat sit. Sunt ipsum esse amet adipisicing adipisicing sit ex reprehenderit cillum elit aliquip eiusmod laborum laborum. Ut nisi consequat laborum proident id incididunt labore voluptate ad sit velit ut reprehenderit proident proident. Fugiat voluptate ad nulla fugiat reprehenderit sint. Ex irure irure ut commodo dolore labore voluptate adipisicing in veniam consectetur duis. Eiusmod ad ex id.Ea anim aute eu magna sunt proident ea proident Lorem. Est ipsum aliquip fugiat. Sit cupidatat ex cillum nisi ullamco cillum irure cupidatat culpa mollit culpa consequat sit. Sunt ipsum esse amet adipisicing adipisicing sit ex reprehenderit cillum elit aliquip eiusmod laborum laborum. Ut nisi consequat laborum proident id incididunt labore voluptate ad sit velit ut reprehenderit proident proident. Fugiat voluptate ad nulla fugiat reprehenderit sint. Ex irure irure ut commodo dolore labore voluptate adipisicing in veniam consectetur duis. Eiusmod ad ex id.Ea anim aute eu magna sunt proident ea proident Lorem. Est ipsum aliquip fugiat. Sit cupidatat ex cillum nisi ullamco cillum irure cupidatat culpa mollit culpa consequat sit. Sunt ipsum esse amet adipisicing adipisicing sit ex reprehenderit cillum elit aliquip eiusmod laborum laborum. Ut nisi consequat laborum proident id incididunt labore voluptate ad sit velit ut reprehenderit proident proident. Fugiat voluptate ad nulla fugiat reprehenderit sint. Ex irure irure ut commodo dolore labore voluptate adipisicing in veniam consectetur duis. Eiusmod ad ex id.Ea anim aute eu magna sunt proident ea proident Lorem. Est ipsum aliquip fugiat. Sit cupidatat ex cillum nisi ullamco cillum irure cupidatat culpa mollit culpa consequat sit. Sunt ipsum esse amet adipisicing adipisicing sit ex reprehenderit cillum elit aliquip eiusmod laborum laborum. Ut nisi consequat laborum proident id incididunt labore voluptate ad sit velit ut reprehenderit proident proident. Fugiat voluptate ad nulla fugiat reprehenderit sint. Ex irure irure ut commodo dolore labore voluptate adipisicing in veniam consectetur duis. Eiusmod ad ex id.
            </p>
            <div className='flex items-center gap-2 justify-start w-full'>
                <input className={`w-4 h-4 text-accent bg-gray-100 border-gray-300 rounded focus:accent ${isCheckboxEnabled ? "cursor-pointer" : ""}`} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled={!isCheckboxEnabled}></input>
                <label htmlFor="vehicle1" className={`${isCheckboxEnabled ? "" : " text-gray-400"} transition-all duration-300 ms-2 text-sm font-medium dark:text-gray-300`}>He leído y estoy de acuerdo con los Terminos y Condiciones.</label>
            </div>
           

        </div>
    )
}

export default TermsAndConditions