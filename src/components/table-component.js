import React from "react";

class TableComponent extends React.Component {

    constructor(props) {
        super();
        this.state = { data: props.initialData, edit: null };
        this.sort = this.sort.bind(this);
        this.clone = this.clone.bind(this);
        this.showEditor = this.showEditor.bind(this);
        this.presSearchData = null;
    }

    sort(e) {
        const column = e.target.cellIndex;
        const data = this.clone(this.state.data);
        const keys = Object.keys(data[0]);

        data.sort((a, b) => {
            if (a[keys[column]] === b[keys[column]]) {
                return 0;
            }

            return a[keys[column]] > b[keys[column]] ? 1 : -1;
        });

        this.setState({ data: data });
    }

    clone(o) {
        return JSON.parse(JSON.stringify(o));
    }

    showEditor(e) {
        let columnName = String(this.props.headers[e.target.cellIndex]).toLowerCase();

        this.setState({
            edit: {
                row: parseInt(e.target.parentNode.dataset.row, 10),
                column: columnName
            }
        });

        console.log(this.state);
    }

    save(e, edit) {
        e.preventDefault();
        const input = e.target.firstChild;
        const data = this.clone(this.state.data);
        data[edit.row][edit.column] = input.value;
        this.setState({
            data: data,
            edit: null
        });
    }

    searchBy(e, columnIndex) {
        console.log(this.presSearchData);
        const term = e.target.value.toLowerCase();
        this.presSearchData = this.state.data;
        if (term.length==0) {
            this.setState({
                data: this.presSearchData,
                edit: null
            });
            return;
        }

        const property = String(this.props.headers[columnIndex]).toLowerCase();
        const data = this.clone(this.state.data.filter(d => String(d[property]).toLowerCase().indexOf(term) > -1));
        this.presSearchData = this.state.data;
        this.setState({
            data: data,
            edit: null
        })
    }

    render() {
        const headers = [];

        let i = 0;
        for (const idx in this.props.headers) {
            const title = this.props.headers[idx];
            headers.push(<th key={idx}>{title}</th>)
            i++;
        }

        return (
            <div id="table">
                <table>
                    <thead onClick={this.sort}>
                        <tr>{headers}</tr>
                        <tr>{
                            headers.map((_, index) => (
                                <td key={'search_' + index}>
                                    <input type="text" onChange={(e) => { this.searchBy(e, index) }} key={index}></input>
                                </td>
                            ))
                        }</tr>
                    </thead>
                    <tbody onDoubleClick={this.showEditor}>
                        {
                            this.state.data.map((row, rowIndex) => (
                                <tr key={rowIndex} data-row={rowIndex}>
                                    {
                                        Object.keys(row).map((key, index) => {
                                            const edit = this.state.edit;
                                            if (edit && edit.row === rowIndex && key === edit.column) {
                                                return <td key={index + edit.column}>
                                                    <form onSubmit={(e) => { this.save(e, this.state.edit) }}>
                                                        <input type="text" defaultValue={row[key]} />
                                                    </form>
                                                </td>
                                            }

                                            return <td key={index}>{row[key]}</td>
                                        })
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableComponent;