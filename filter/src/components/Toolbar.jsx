import '../css/Toolbar.css';

export default function Toolbar(props) {
    const filters = props.filters.map(filter =>
        <button className="toolbar-btn" type={"button"}>{filter}</button>);

    return (
        <div className="toolbar">
            {filters}
        </div>
    )
}
