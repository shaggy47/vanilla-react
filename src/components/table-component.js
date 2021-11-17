import React from "react";

class TableComponent extends React.Component {

    constructor(props) {
        super();
        this.state = { data: props.initialData, edit: null };
        this.sort = this.sort.bind(this);
        this.clone = this.clone.bind(this);
        this.showEditor = this.showEditor.bind(this);
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
        console.log(columnName);
        this.setState({
            edit: {
                row: parseInt(e.target.parentNode.dataset.row, 10),
                column: columnName
            }
        });

        console.log(this.state);
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
                    </thead>
                    <tbody onDoubleClick={this.showEditor}>
                        {
                            this.state.data.map((row, index) => (
                                <tr data-row={index} key={index}>
                                    <td>{row.title}</td>
                                    <td>{row.author}</td>
                                    <td>{row.language}</td>
                                    <td>{row.published}</td>
                                    <td>{row.sales}</td>
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