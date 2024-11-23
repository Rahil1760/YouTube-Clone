import React from "react";
import {AsideBox2} from "./AsideBox2";
import {AsideBox1} from "./AsideBox1";
import {AsideBox3} from "./AsideBox3";

export const Aside = () => {
    return (
        <div className="bg-gray-900 h-lvh w-[18%] z-0">
            <div className="h-[200px] w-full">
                <AsideBox1 />
                <AsideBox2 />
                <AsideBox3 />
            </div>
        </div>
    );
};
