import React from "react";

class TableComponent extends React.Component {

    constructor(props) {
        super();
        this.state = { data: props.initialData };
    }

    render() {
        const headers = [];
        let dataRows ='';
        let i = 0;
        for (const idx in this.props.headers) {
            const title = this.props.headers[idx];
            headers.push(<th key={idx}>{title}</th>)
            i++;
        }

        return (
            <div id="table">
                <table>
                    <thead>
                        <tr>{headers}</tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((row, index)=>(
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