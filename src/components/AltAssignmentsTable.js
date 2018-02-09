import React from "react";
import PropTypes from "prop-types";

import { GroupingState, IntegratedGrouping } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow
} from "@devexpress/dx-react-grid-material-ui";

class AssignmentsTable extends React.PureComponent {
  static propTypes = {
    assignments: PropTypes.any.isRequired,
    instructorView: PropTypes.bool.isRequired,
    studentName: PropTypes.string
  };

  state = {
    editingIds: [],
    changes: {},
    added: []
  };

  render() {
    return (
      <Grid
        rows={this.props.assignments}
        columns={[
          { name: "studentName", title: "Student" },
          { name: "assignment", title: "Assignment" },
          { name: "solution", title: "Solution" }
        ].concat(
          this.props.instructorView
            ? [{ name: "actions", title: "Actions" }]
            : []
        )}
      >
        <GroupingState
          defaultGrouping={[{ columnName: "studentName" }]}
          defaultExpandedGroups={[this.props.studentName]}
        />
        <IntegratedGrouping />
        <Table />
        <TableHeaderRow />
        <TableGroupRow />
      </Grid>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default AssignmentsTable;