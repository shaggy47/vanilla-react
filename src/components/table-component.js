import React from "react";

class TableComponent extends React.Component {

    constructor(props) {
        super();
        this.state = { data: props.initialData };
        this.sort = this.sort.bind(this);
        this.clone = this.clone.bind(this);
    }

    sort(e) {
        const column = e.target.cellIndex;
        const data = this.clone(this.state.data);
        const keys= Object.keys(data[0]);

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
                    <tbody>
                        {
                            this.state.data.map((row, index) => (
                                <tr key={index}>
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