/* eslint-disable @next/next/no-img-element */

import { Button } from "@components/components/Button/Button";

type HeaderProps = {
    code: number;
    message: string;
};

export const Header = ({ code, message }: HeaderProps) => {
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
                        <Button color="yellow" text="Daj głaski" extraClasses="mr-2" />
                        <Button link="/" color="white" text="Wstecz" />
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
