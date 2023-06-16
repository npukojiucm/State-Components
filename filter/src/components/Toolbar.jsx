export default function Toolbar(props) {
    const mappers = (filter) => {
        let _className = "toolbar-btn"
        if (filter === props.selected) {
            _className = "toolbar-btn selected"
        }

        return <button
            className={`${_className}`}
            type={"button"}
            data-name={filter}
            onClick={(event) => props.onSelectedFilter(event)}>
                {filter}
            </button>
    }
    const filters = props.filters.map(filter => mappers(filter))

    return (
        <nav className="toolbar">
            {filters}
        </nav>
    )
}
