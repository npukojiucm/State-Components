import { useState } from "react";
import './style/Store.css'
import CardsView from "./components/CardsView/CardsView";
import ListView from "./components/ListView/ListView";
import IconSwitch from "./components/IconSwitch";

export default function Store() {
    const products = [
        {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    const [icon, setIcon] = useState('view_list');

    const handlerSwitchIcon = () => {
        if (icon === 'view_list') setIcon('view_module');
        if (icon === 'view_module') setIcon('view_list');
    }

    return (
        <div className="page">
            <nav className="nav">
                <IconSwitch icon={icon} onSwitch={handlerSwitchIcon} />
            </nav>

            <main className="main">
                {icon === 'view_list' ? <CardsView products={products} /> : <ListView products={products} />}
            </main>
        </div>

    )
};
