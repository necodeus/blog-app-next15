/* eslint-disable @next/next/no-img-element */

import { BackFilled } from "./BackFilled";
import { PetTheCat } from "./PetTheCat";

type ErrorHeaderProps = {
    code: number;
    message: string;
};

export const ErrorHeader = ({ code, message }: ErrorHeaderProps) => {
    return (
        <>
            <div className="relative font-jost component-border-bottom">
                <div className="p-[7px]">
                    <img
                        src="https://images.necodeo.com/58fa83c2-326c-4909-b454-73118453c697"
                        alt="error background"
                        loading="lazy"
                    />
                    <div className="m-[20px] absolute z-[1] top-0 right-0 flex">
                        <PetTheCat extraClasses="mr-2" />
                        <BackFilled />
                    </div>
                </div>
            </div>
            <div className="component-border-bottom relative font-jost">
                <div className="text-[20px] font-jost relative">
                    <p className="m-[30px] leading-[35px]"><b>{ code } ~ </b>{ message }</p>
                </div>
            </div>
        </>
    );
};